/****************************************************************************
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * cc.AtlasNode's rendering objects of WebGL
 */
(function () {
    cc.AtlasNode.WebGLRenderCmd = function (renderableObject) {
        this._rootCtor(renderableObject);
        this._needDraw = true;
        this._textureAtlas = null;
        this._colorUnmodified = cc.color.WHITE;
        this._colorF32Array = null;
        this._uniformColor = null;

        this._matrix = new cc.math.Matrix4();
        this._matrix.identity();

        //shader stuff
        this._shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURE_UCOLOR);
        this._uniformColor = cc._renderContext.getUniformLocation(this._shaderProgram.getProgram(), "u_color");
    };

    var proto = cc.AtlasNode.WebGLRenderCmd.prototype = Object.create(cc.Node.WebGLRenderCmd.prototype);
    proto.constructor = cc.AtlasNode.WebGLRenderCmd;

    proto._updateBlendFunc = function () {
        var node = this._node;
        if (!this._textureAtlas.texture.hasPremultipliedAlpha()) {
            node._blendFunc.src = cc.SRC_ALPHA;
            node._blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA;
        }
    };

    proto._updateOpacityModifyRGB = function () {
        this._node._opacityModifyRGB = this._textureAtlas.texture.hasPremultipliedAlpha();
    };

    proto.rendering = function (ctx) {
        var context = ctx || cc._renderContext, node = this._node;

        var wt = this._worldTransform;
        this._matrix.mat[0] = wt.a;
        this._matrix.mat[4] = wt.c;
        this._matrix.mat[12] = wt.tx;
        this._matrix.mat[1] = wt.b;
        this._matrix.mat[5] = wt.d;
        this._matrix.mat[13] = wt.ty;

        this._glProgramState.apply(this._matrix);

        cc.glBlendFunc(node._blendFunc.src, node._blendFunc.dst);
        if (this._uniformColor && this._colorF32Array) {
            context.uniform4fv(this._uniformColor, this._colorF32Array);
            this._textureAtlas.drawNumberOfQuads(node.quadsToDraw, 0);
        }
    };

    proto.initWithTexture = function (texture, tileWidth, tileHeight, itemsToRender) {
        var node = this._node;
        node._iteBATTLEidth = tileWidth;
        node._itemHeight = tileHeight;
        this._colorUnmodified = cc.color.WHITE;
        node._opacityModifyRGB = true;

        node._blendFunc.src = cc.BLEND_SRC;
        node._blendFunc.dst = cc.BLEND_DST;

        var locRealColor = node._realColor;
        this._colorF32Array = new Float32Array([locRealColor.r / 255.0, locRealColor.g / 255.0, locRealColor.b / 255.0, node._realOpacity / 255.0]);
        this._textureAtlas = new cc.TextureAtlas();
        this._textureAtlas.initWithTexture(texture, itemsToRender);

        if (!this._textureAtlas) {
            cc.log(cc._LogInfos.AtlasNode__initWithTexture);
            return false;
        }

        this._updateBlendFunc();
        this._updateOpacityModifyRGB();
        this._calculateMaxItems();
        node.quadsToDraw = itemsToRender;

        return true;
    };

    proto.setColor = function (color3) {
        var temp = cc.color(color3.r, color3.g, color3.b), node = this._node;
        this._colorUnmodified = color3;
        var locDisplayedOpacity = this._displayedOpacity;
        if (node._opacityModifyRGB) {
            temp.r = temp.r * locDisplayedOpacity / 255;
            temp.g = temp.g * locDisplayedOpacity / 255;
            temp.b = temp.b * locDisplayedOpacity / 255;
        }
        cc.Node.prototype.setColor.call(node, temp);
    };

    proto.setOpacity = function (opacity) {
        var node = this._node;
        cc.Node.prototype.setOpacity.call(node, opacity);
        // special opacity for premultiplied textures
        if (node._opacityModifyRGB) {
            node.color = this._colorUnmodified;
        }
    };

    proto._updateColor = function () {
        if (this._colorF32Array) {
            var locDisplayedColor = this._displayedColor;
            this._colorF32Array[0] = locDisplayedColor.r / 255.0;
            this._colorF32Array[1] = locDisplayedColor.g / 255.0;
            this._colorF32Array[2] = locDisplayedColor.b / 255.0;
            this._colorF32Array[3] = this._displayedOpacity / 255.0;
        }
    };

    proto.getTexture = function () {
        return this._textureAtlas.texture;
    };

    proto.setTexture = function (texture) {
        this._textureAtlas.texture = texture;
        this._updateBlendFunc();
        this._updateOpacityModifyRGB();
    };

    proto._calculateMaxItems = function () {
        var node = this._node;
        var selTexture = this._textureAtlas.texture;
        var size = selTexture.getContentSize();
        if (node._ignoreContentScaleFactor)
            size = selTexture.getContentSizeInPixels();

        node._itemsPerColumn = 0 | (size.height / node._itemHeight);
        node._itemsPerRow = 0 | (size.width / node._iteBATTLEidth);
    };
})();
