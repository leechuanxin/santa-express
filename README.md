# Wish Upon A Santa
## Get into the spirit of gifting with Blockchain and NFTs!

Wish upon a Santa is an online Christmas-themed wishing well that allows users to make wishes, as well as grant wishes made by other users.

This decentralised application (dApp) is deployed on the Rinkeby testnet instead of the Ethereum mainnet, so that anyone can come and use the site without spending actual Ether (ETH) to make and grant wishes.

Similar to an online store, we have a tongue-in-cheek catalogue and users can **wish for items** on the catalogue. Just like tossing a coin into a wishing well, only a small [gas fee](https://www.investopedia.com/terms/g/gas-ethereum.asp#:~:text=Gas%20fees%20are%20payments%20made,spend%20on%20a%20particular%20transaction.) in ETH has to be paid for **making a wish**.

*Granting a wish* works like purchasing an item from an online store to gift to someone else. Every item in our catalogue has a preset price. When *granting a wish*, a user has to pay the price of the item another user has wished for. The price paid in ETH for *granting a wish* goes to the smart contract (ie. our "online store", or us).

To incentivise users to get into the spirit of gifting, the dApp rewards Goodwill points to users who have *granted wishes*. Goodwill points can be used to claim NFT badges that can be displayed on one's profile. The dApp also has a leaderboard to feature the top wish granters.

Here are the links to our [frontend](https://github.com/leechuanxin/santa-frontend), [Express backend](https://github.com/leechuanxin/santa-express), and [smart contract](https://github.com/JustinWong98/santa-blockchain) repositories.

## Features

- Allows users to make their own wishes (in the form of minting them as NFT tokens)
- Users can grant wishes for others through cryptocurrency
- Compete for the top positions in the leaderboard through granting wishes
- Redeem NFT badges as a reward for granting wishes
- See all the wishes a user has made or granted, and the badges they have claimed

## Tech

We use:

- [Solidity] - For coding our smart contract on the blockchain. With our smart contract as our "primary backend", we store ownership information of the wishes made, and the NFT badges redeemed.
- [Express](https://expressjs.com/) - Our "secondary backend", for cosmetic purposes: usernames will be attached to each wallet address for identification purposes.
- [web3.js](https://web3js.readthedocs.io/en/v1.5.2/) - To interact with our smart contract, as well as offer cryptocurrency transactions for making wishes (by paying a [gas fee](https://www.investopedia.com/terms/g/gas-ethereum.asp#:~:text=Gas%20fees%20are%20payments%20made,spend%20on%20a%20particular%20transaction.)) and granting wishes (by paying the price of the item wished to the smart contract, ie. us).
- [React] - Front-end development, with Bootstrap as our key UI library.

## Usage
You can visit our deployed app [here](https://damp-bayou-29307.herokuapp.com)
You will need to install [Metamask](https://metamask.io) to use this app.

- Make sure your Metamask account is connected to the Rinkeby Test Network, and connect Metamask to the website

![](https://user-images.githubusercontent.com/84217227/148346096-2c66414c-3b53-4728-8a5f-9ea67f0c5d1c.gif)

- Create your username

- Make a wish, or grant someone a wish

![](https://user-images.githubusercontent.com/84217227/148346183-08366e59-0111-4158-8c32-7a99354718dc.png)

![](https://user-images.githubusercontent.com/84217227/148346688-6ce47b2e-6ec7-40ea-91bc-b4ceb66bcd59.gif)

- Redeem NFT Badges

![](https://user-images.githubusercontent.com/84217227/148347160-8db83507-5e0a-49e2-8501-57ab7589d595.png)

- Admire your position on the leaderboard and the unique badges you've claimed!

![](https://user-images.githubusercontent.com/84217227/148347151-a5bbc0a4-e0c2-46f2-8f9d-b45300f9866d.png)

![](https://user-images.githubusercontent.com/84217227/148347248-52055b38-fd9c-418a-b65a-0d844ab1b8e7.png)

## License

MIT

   [frontend]: <https://github.com/leechuanxin/santa-frontend>
   [smart-contract]: <https://github.com/JustinWong98/santa-blockchain>
   [Truffle]: <https://trufflesuite.com/truffle/>
   [PostgreSQL]: <https://www.postgresql.org>
   [node.js]: <http://nodejs.org>
   [React]: <https://reactjs.org>
   [express]: <http://expressjs.com>
   [Solidity]: <https://soliditylang.org>
   [React Bootstrap]: <https://react-bootstrap.github.io>
