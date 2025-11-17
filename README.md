# 🎮 Multiplayer Bomb Battle NFT Game

<div align="center">

https://github.com/phutruonnttn/Game_Bomb_NFT/assets/45969976/1aa77140-7420-45d9-817c-8cd8e76cbaad

**A Full-Stack Blockchain-Integrated Multiplayer Battle Arena Game**

[![Graduation Project](https://img.shields.io/badge/Graduation-Project-blue)]()
[![Grade](https://img.shields.io/badge/Grade-A%2B-success)]()
[![Status](https://img.shields.io/badge/Status-Excellent-brightgreen)]()

</div>

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Achievements](#-achievements)
- [Game Design](#-game-design)
- [Architecture](#-architecture)
- [Technology Stack](#-technology-stack)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Component Details](#-component-details)
- [Blockchain Integration](#-blockchain-integration)
- [Game Mechanics](#-game-mechanics)
- [Setup Instructions](#-setup-instructions)
- [Author](#-author)

---

## 🎯 Project Overview

This is a **comprehensive graduation thesis project** developed as a **multiplayer NFT-based battle arena game** that seamlessly integrates blockchain technology with real-time multiplayer gameplay. The project represents a complete full-stack implementation, featuring custom game design, original graphics, client-server architecture, and smart contract integration.

### Project Information

- **Student**: Nguyen Phu Truong
- **Student ID**: 20184319
- **Program**: Global ICT (IT-E7)
- **Institution**: Hanoi University of Science and Technology (HUST)
- **Academic Years**: 2018-2023
- **Evaluation**: **Grade A+** from the Multimedia & Game evaluation committee
- **Recognition**: **Top Excellent Project** in the graduation thesis category

### Core Concept

Players own **character NFTs** (ERC-1155 tokens) as digital assets and compete in real-time 4-player battle matches. Winners earn **in-game tokens** (ERC-20) that can be used to purchase skins, join matches, or traded on NFT marketplaces. The game combines traditional multiplayer battle mechanics with blockchain-based ownership and economy.

---

## 🏆 Achievements

- ✅ **Grade A+** - Highest evaluation grade from the Multimedia & Game committee
- ✅ **Top Excellent Project** - Recognized as one of the outstanding graduation projects
- ✅ **Full-Stack Implementation** - Complete development from design to deployment
- ✅ **Blockchain Integration** - Successfully deployed smart contracts on Polygon zkEVM testnet
- ✅ **Real-Time Multiplayer** - Smooth 4-player synchronous gameplay
- ✅ **Original Design** - Custom game design, graphics, and mechanics

---

## 🎨 Game Design

### Gameplay Overview

**Bomb Battle Arena** is a top-down multiplayer battle game where 4 players compete in a destructible arena. Players use various weapons (bombs, guns, hammers) to eliminate opponents while collecting power-ups and items to gain advantages.

### Core Mechanics

1. **Real-Time Battle System**
   - 4-player simultaneous multiplayer matches
   - Server-authoritative game logic for fairness
   - Synchronized game state across all clients
   - Action queue system for smooth gameplay

2. **Weapon System**
   - **Bomb Weapon**: Default weapon, places bombs that explode after a timer
   - **Gun Weapon**: Ranged weapon firing bullets
   - **Hammer Weapon**: Melee weapon for close combat
   - Weapon switching through item collection

3. **Item System**
   - **Bomb Plus**: Increases maximum bomb capacity
   - **Power Blast Plus**: Increases explosion radius
   - **Speed Plus**: Increases movement speed
   - **Life Plus**: Grants additional lives
   - **Weapon Items**: Temporary weapon upgrades

4. **Map System**
   - Procedurally generated or predefined maps
   - Destructible obstacles
   - Indestructible walls
   - Strategic positioning and cover

5. **Character System**
   - Customizable character skins (NFT-based)
   - Character stats and abilities
   - Visual representation with animations
   - Health and life system

### Visual Design

- **Custom Graphics**: All game assets designed from scratch
- **Cocos Studio Integration**: Professional UI/UX design
- **Animation System**: Smooth character and weapon animations
- **Particle Effects**: Explosions, flames, and visual feedback
- **Responsive UI**: Adaptive layouts for different screen sizes

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Cocos2d-x JS Game Client                             │   │
│  │  - Game Rendering & Logic                            │   │
│  │  - User Input Handling                                │   │
│  │  - Network Communication                              │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ TCP/IP
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      SERVER LAYER                            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Java Game Server (BitZero Framework)                 │   │
│  │  - Battle Logic & Synchronization                     │   │
│  │  - Player Matching                                    │   │
│  │  - Game State Management                              │   │
│  └──────────────────────────────────────────────────────┘   │
│                            │                                 │
│                            │ HTTP/REST                       │
│                            ▼                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  NestJS Server API                                   │   │
│  │  - Blockchain Integration                            │   │
│  │  - Smart Contract Interaction                        │   │
│  │  - User Authentication                               │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Web3 RPC
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    BLOCKCHAIN LAYER                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Polygon zkEVM Testnet                               │   │
│  │  - ERC-1155 (NFT Skins)                              │   │
│  │  - ERC-20 (In-Game Tokens)                           │   │
│  │  - InGameContract (Match Management)                 │   │
│  │  - SwapToken (Token Exchange)                        │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **User Authentication**
   - User connects MetaMask wallet via `connectMetamaskGUI`
   - Wallet address is verified and linked to game account
   - Server API authenticates and returns user ID

2. **Match Joining**
   - Client requests to join match
   - Server API calls smart contract `joinGame()` function
   - ERC-20 tokens are locked as entry fee
   - When 4 players join, match starts automatically

3. **Gameplay**
   - Client sends player actions (move, attack, get item) to game server
   - Server processes actions with authoritative game logic
   - Server broadcasts game state updates to all clients
   - Clients render synchronized game state

4. **Match Completion**
   - Server determines winners based on game logic
   - Server API calls smart contract `finalGame()` function
   - Winners receive token rewards distributed by smart contract
   - Losers forfeit entry fee (with system fee deduction)

---

## 💻 Technology Stack

### Frontend/Client
- **Cocos2d-x JS** - Game engine and rendering framework
- **Cocos Studio** - UI design and asset management
- **JavaScript (ES5/ES6)** - Client-side game logic
- **HTML5 Canvas** - Rendering surface
- **WebSocket/TCP** - Real-time network communication

### Backend/Server
- **Java 8** - Game server implementation
- **BitZero Framework** - Multiplayer game server framework
- **Maven** - Dependency management
- **NestJS** - RESTful API server
- **TypeScript** - Type-safe API development
- **Web3.js / Ethers.js** - Blockchain interaction libraries

### Blockchain
- **Solidity** - Smart contract development
- **OpenZeppelin** - Secure smart contract libraries
- **Polygon zkEVM** - Layer 2 blockchain network
- **Web3** - Blockchain communication protocol

### Tools & Infrastructure
- **MetaMask** - Wallet integration
- **Node.js** - Runtime environment
- **Git** - Version control

---

## ✨ Key Features

### 1. Blockchain Integration

#### NFT Character Skins (ERC-1155)
- Players own unique character skins as NFTs
- Skins are tradeable on NFT marketplaces
- Visual representation in-game
- Rarity system with different skin tiers

#### In-Game Token Economy (ERC-20)
- **ThesisErc20**: Custom ERC-20 token for in-game economy
- Token uses for:
  - Match entry fees
  - Skin purchases
  - Winner rewards
- Whitelist system for secure contract interactions

#### Smart Contract Features
- **InGameContract**: Manages match lifecycle
  - Automatic match creation when 4 players join
  - Entry fee collection and distribution
  - Winner reward calculation and distribution
  - System fee and penalty fee mechanisms
- **SwapToken**: ETH to ERC-20 token exchange
- **ThesisErc1155**: NFT skin minting and management

### 2. Real-Time Multiplayer

#### Synchronization System
- **Server-Authoritative**: All game logic runs on server
- **Action Queue**: Client actions queued and processed in order
- **Frame-Based Updates**: Consistent game state updates
- **Lag Compensation**: Handles network latency gracefully

#### Matchmaking System
- Automatic match creation when 4 players ready
- Game index tracking for multiple concurrent matches
- Player validation and duplicate prevention

### 3. Game Features

#### Battle System
- **4-Player Arena**: Simultaneous multiplayer battles
- **Multiple Weapons**: Bomb, Gun, Hammer with unique mechanics
- **Destructible Environment**: Breakable obstacles and strategic gameplay
- **Power-Up System**: Collect items to gain advantages
- **Time Limit**: Matches have countdown timer
- **Victory Conditions**: Last player standing or time-based scoring

#### Character System
- **Customizable Skins**: NFT-based character appearance
- **Character Stats**: Speed, health, bomb capacity, blast power
- **Visual Feedback**: Animations, effects, and UI indicators
- **Life System**: Multiple lives per character

#### Map System
- **Grid-Based**: Tile-based map system
- **Procedural Generation**: Random map generation with seed
- **Obstacle Types**: Indestructible walls, destructible blocks
- **Item Spawning**: Random item placement on destroyed blocks

### 4. User Interface

#### Lobby System
- Character skin selection and preview
- Token balance display
- Match finding interface
- Skin marketplace integration

#### In-Game UI
- Real-time player information (health, lives, stats)
- Game timer and countdown
- Control panel with joystick/keyboard support
- Visual feedback for actions and damage

#### Result Screen
- Match outcome display
- Token reward/penalty information
- Return to lobby functionality

### 5. Security Features

#### Authentication
- MetaMask wallet signature verification
- Ethereum address-based authentication
- Secure user session management

#### Smart Contract Security
- Whitelist system for authorized contracts
- Owner-only functions for critical operations
- Input validation and error handling
- Gas optimization

---

## 📁 Project Structure

```
Game_Multiplayer_Bomb_NFT/
│
├── client/                          # Game client (Cocos2d-x JS)
│   ├── src/                        # Source code
│   │   ├── base/                   # Base classes and utilities
│   │   ├── config/                 # Game configuration
│   │   ├── data/                   # Data models
│   │   ├── framework/              # Framework utilities
│   │   └── modules/                # Game modules
│   │       ├── Battle/             # Battle system
│   │       │   ├── Data/           # Battle configuration
│   │       │   ├── GUI/            # Battle UI components
│   │       │   └── Logic/          # Battle game logic
│   │       ├── Lobby/              # Lobby system
│   │       ├── Login/              # Authentication
│   │       └── User/               # User management
│   ├── res/                        # Game resources (sprites, sounds)
│   ├── frameworks/                 # Cocos2d-x framework
│   └── project.json                # Project configuration
│
├── server/                          # Java game server
│   ├── src/main/java/              # Java source code
│   │   ├── battle/                 # Battle logic
│   │   │   ├── model/              # Battle models (Character, Weapon, etc.)
│   │   │   └── BattleMgr.java      # Battle manager
│   │   ├── handler/                # Request handlers
│   │   ├── cmd/                    # Command definitions
│   │   ├── config/                 # Configuration classes
│   │   ├── model/                  # Data models
│   │   ├── nft/                    # NFT integration
│   │   └── util/                   # Utility classes
│   ├── conf/                       # Server configuration
│   └── pom.xml                     # Maven dependencies
│
├── serverAPI/                       # NestJS REST API
│   ├── src/                        # TypeScript source
│   │   ├── app.controller.ts      # API endpoints
│   │   ├── app.service.ts          # Business logic
│   │   └── shares/                 # Shared utilities
│   ├── helper/                     # Blockchain helpers
│   │   └── getBalance.ts           # Web3 interaction functions
│   └── package.json                # Node.js dependencies
│
├── smartContract/                   # Solidity smart contracts
│   ├── ThesisErc1155.sol           # NFT skin contract
│   ├── ThesisErc20.sol             # In-game token contract
│   ├── InGameContract.sol          # Match management contract
│   └── SwapToken.sol               # Token exchange contract
│
├── connectMetamaskGUI/              # MetaMask integration GUI
│   ├── index.html                 # Wallet connection interface
│   ├── index.js                   # Connection logic
│   └── package.json                # Dependencies
│
├── cocosUI/                         # Cocos Studio UI assets
│   └── cocosstudio/                # UI design files
│
└── docs/                            # Documentation
    ├── Thesis_NguyenPhuTruong_20184319.pdf
    └── Slide - Nguyễn Phú Trường - 20184319.pdf
```

---

## 🔧 Component Details

### Client (`client/`)

The game client is built with **Cocos2d-x JS**, providing cross-platform game rendering and logic execution.

**Key Components:**
- **GameScene.js**: Main game scene managing battle rendering
- **GameGUI.js**: Battle arena rendering and visual updates
- **Character.js**: Character logic, movement, and abilities
- **Weapon System**: Bomb, Gun, and Hammer implementations
- **MapMgr.js**: Map generation and obstacle management
- **GameClient.js**: Network communication with game server
- **Packet Handlers**: Process server responses and update game state

**Features:**
- Real-time rendering at 60 FPS
- Input handling (keyboard and joystick)
- Animation system for characters and effects
- Sound effects and music integration
- Localization support

### Server (`server/`)

The game server is built with **Java** using the **BitZero Framework**, handling all authoritative game logic.

**Key Components:**
- **BattleMgr.java**: Core battle logic and state management
- **BattleHandler.java**: Handles client battle requests
- **MatchingHandler.java**: Manages player matchmaking
- **Character.java**: Server-side character logic
- **Weapon Classes**: Server-side weapon implementations
- **MapLogic.java**: Map generation and management

**Features:**
- Server-authoritative game state
- Action queue system for synchronization
- Frame-based game loop (60 FPS)
- Multiple concurrent battle instances
- Player disconnection handling
- Database integration for player data

### Server API (`serverAPI/`)

The **NestJS** REST API serves as the bridge between the game server and blockchain.

**Key Endpoints:**
- `GET /user-balance/:address` - Get user token balance
- `GET /user-skin/:address` - Get user's NFT skins
- `GET /game-index` - Get current game index
- `POST /user-joingame` - Join a match (blockchain transaction)
- `POST /user-buy-skin` - Purchase skin (blockchain transaction)
- `POST /user-winner` - Finalize match and distribute rewards

**Features:**
- Web3 integration with Polygon zkEVM
- Transaction signing and broadcasting
- Event listening and processing
- Authentication guards
- Error handling and validation

### Smart Contracts (`smartContract/`)

All smart contracts are written in **Solidity** and deployed on **Polygon zkEVM testnet**.

#### ThesisErc1155.sol
- ERC-1155 standard for NFT skins
- Custom URI management
- Owner-controlled minting

#### ThesisErc20.sol
- ERC-20 standard for in-game tokens
- Whitelist system for authorized contracts
- Owner-controlled minting
- Transfer restrictions for security

#### InGameContract.sol
- Match lifecycle management
- Entry fee collection (100 tokens)
- Automatic match creation (4 players)
- Winner reward distribution
- System fee (1% of pool)
- Penalty fee for draws (5% of pool)

#### SwapToken.sol
- ETH to ERC-20 token exchange
- Configurable exchange rates
- Owner-controlled rate management

### MetaMask GUI (`connectMetamaskGUI/`)

A simple web interface for connecting user wallets.

**Features:**
- MetaMask integration
- Wallet connection flow
- Address verification
- User ID generation for game login

---

## ⛓️ Blockchain Integration

### Network
- **Polygon zkEVM Testnet**: Layer 2 scaling solution for Ethereum
- Low transaction fees
- Fast confirmation times
- EVM-compatible

### Tokenomics

#### Entry Fee System
- Players pay **100 ERC-20 tokens** to join a match
- Total pool: **400 tokens** (4 players × 100)
- System fee: **1%** (0.4 tokens) deducted from pool
- Penalty fee (draws): **5%** (2 tokens per player)

#### Reward Distribution
- Winners split the remaining pool proportionally
- Example: 3 winners split 399.6 tokens = **133.2 tokens each**
- Losers forfeit entry fee

#### Skin Economy
- Skins purchased with ERC-20 tokens
- Prices vary by skin rarity
- Ownership tracked on-chain as ERC-1155 NFTs

### Security Measures

1. **Whitelist System**: Only authorized contracts can mint tokens
2. **Owner Controls**: Critical functions restricted to contract owner
3. **Input Validation**: All user inputs validated before processing
4. **Reentrancy Protection**: Safe contract interaction patterns
5. **Gas Optimization**: Efficient contract design for lower costs

---

## 🎮 Game Mechanics

### Battle Flow

1. **Match Creation**
   - Players request to join match via API
   - Smart contract collects entry fees
   - When 4 players join, match status changes to "InGame"
   - Game server creates battle instance

2. **Game Start**
   - Server generates map with random seed
   - Players spawn at corners of map
   - Game timer starts (typically 3-5 minutes)
   - All clients receive initial game state

3. **Gameplay Loop**
   - Clients send actions (move, attack, get item)
   - Server processes actions in order
   - Server updates game state (positions, health, items)
   - Server broadcasts updates to all clients
   - Clients render updated state

4. **Match End**
   - Conditions: Time expires OR 3 players eliminated
   - Server determines winners
   - Server API calls `finalGame()` on smart contract
   - Smart contract distributes rewards
   - Clients display result screen

### Synchronization

The game uses a **deterministic lockstep** approach:
- All clients use same random seed
- Server processes actions in deterministic order
- Clients receive state updates, not individual actions
- This ensures all clients see identical game state

### Collision Detection

- **Grid-Based**: Map divided into cells
- **Character Collision**: Circular collision detection
- **Obstacle Collision**: Cell-based wall detection
- **Item Collection**: Overlap detection for item pickup

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js** (v14 or higher)
- **Java JDK 8**
- **Maven** (for Java project)
- **MetaMask** browser extension
- **Polygon zkEVM Testnet** network configured in MetaMask

### Client Setup

```bash
cd client
# Open project in Cocos Creator or use Cocos2d-x simulator
# Configure server IP in res/ipConfig.json
```

### Server Setup

```bash
cd server
mvn clean install
# Configure server settings in conf/cluster.properties
# Run server with appropriate JVM arguments
```

### Server API Setup

```bash
cd serverAPI
npm install
# Create .env file with:
# - MUMBAI_RPC (Polygon zkEVM RPC endpoint)
# - ERC20_ADDRESS
# - ERC1155_ADDRESS
# - INGAME_ADDRESS
# - PK (Private key for transaction signing)
npm run start:dev
```

### Smart Contracts

```bash
# Deploy contracts to Polygon zkEVM testnet
# Update addresses in serverAPI/.env
# Configure whitelist addresses in contracts
```

### MetaMask GUI

```bash
cd connectMetamaskGUI
npm install
npm start
# Access via browser at localhost:1234
```

---

## 👨‍💻 Author

**Nguyen Phu Truong**

- **Student ID**: 20184319
- **Program**: Global ICT (IT-E7)
- **Institution**: Hanoi University of Science and Technology
- **Email**: phutruongnttn@gmail.com
- **GitHub**: [phutruonnttn](https://github.com/phutruonnttn)

### Project Scope

This project represents a **complete full-stack development** effort, including:

- ✅ **Game Design**: Original game concept and mechanics
- ✅ **Graphics Design**: Custom sprites, UI elements, and animations
- ✅ **Client Development**: Complete game client implementation
- ✅ **Server Development**: Multiplayer game server with battle logic
- ✅ **Blockchain Integration**: Smart contract development and deployment
- ✅ **API Development**: RESTful API for blockchain interaction
- ✅ **Testing & Optimization**: Performance tuning and bug fixes

### Acknowledgments

Special thanks to:
- Hanoi University of Science and Technology faculty
- Multimedia & Game evaluation committee
- Open-source communities (Cocos2d-x, OpenZeppelin, NestJS)

---

## 📄 License

This project is developed as a graduation thesis and is for educational purposes.

---

## 📚 Documentation

For detailed technical documentation, please refer to:
- `docs/Thesis_NguyenPhuTruong_20184319.pdf` - Complete thesis document
- `docs/Slide - Nguyễn Phú Trường - 20184319.pdf` - Presentation slides

---

<div align="center">

**Built with ❤️ as a Graduation Thesis Project**

*Hanoi University of Science and Technology - 2023*

</div>
