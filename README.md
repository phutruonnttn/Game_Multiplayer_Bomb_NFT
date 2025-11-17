Game demo

https://github.com/phutruonnttn/Game_Bomb_NFT/assets/45969976/1aa77140-7420-45d9-817c-8cd8e76cbaad

1. Information

- Graduation project of Nguyen Phu Truong – Student ID 20184319, Global ICT (IT-E7), Hanoi University of Science and Technology, academic years 2018–2023.

- The project received an A grade from the Multimedia & Game evaluation committee.

2. Description

- This is a multiplayer NFT game, where players own characters (as digital assets) to earn in-game tokens or trade them on NFT marketplaces.

- To play the game, a player needs a character NFT and an amount of in-game tokens. The winner of each match receives a reward in tokens.

3. Technologies Used

- Cocos2d-x JS

- Cocos Studio

- Java, JavaScript, Solidity

- Polygon zkEVM

4. Explanation of Components

- client: contains the client-side code running on the Win32 simulator.

- server: the game server that interacts with both the game client and the server API.

- cocosUI: UI assets and layouts for the game client.

- connectMetamaskGUI: GUI for connecting to the user’s MetaMask wallet, returning a UID for game login.

- serverAPI: private backend service that communicates with the smart contracts, receiving requests from the game server.

- smartContract: includes all smart contracts used in the game, deployed on the Polygon zkEVM testnet.
