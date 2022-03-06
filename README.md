<div id="top"></div>

# Wish Upon A Santa

<img width="1440" alt="Screenshot 2022-01-16 at 2 05 27 AM" src="https://user-images.githubusercontent.com/7672836/149632852-3e6921da-4708-42c1-93b4-7dfb88fc0b79.png">

<img width="1440" alt="Screenshot 2022-01-16 at 2 06 42 AM" src="https://user-images.githubusercontent.com/7672836/149632854-c6273081-8b80-4781-ac26-5d2b6cdb3cd3.png">

## Get into the spirit of gifting with Blockchain and NFTs!

Wish upon a Santa is an online Christmas-themed wishing well that allows users to make wishes, as well as grant wishes made by other users.

**This project is deployed and can be viewed on this [website](https://damp-bayou-29307.herokuapp.com/).**

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
    </li>
    <li>
      <a href="#features">Features</a>
    </li>
    <li>
      <a href="#tech">Tech</a>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
      <a href="#retrospective">Retrospective</a>
      <ol>
        <li>
	  <a href="#testing-and-circumventing-lack-of-print-statements">Testing and Circumventing Lack of Print Statements</a>
	</li>
	<li>
	  <a href="#smart-contract-size-limit-and-array-methods">Smart Contract Size Limit and Array Methods</a>
	</li>
	<li>
	  <a href="#dual-database-approach-and-data-persistence">Dual Database Approach and Data Persistence</a>
	</li>
	<li>
	  <a href="#token-standards">Token Standards</a>
	</li>
      </ol>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- INTRODUCTION -->

## Introduction

This decentralised application (dApp) is deployed on the Rinkeby testnet instead of the Ethereum mainnet, so that anyone can come and use the site without spending actual Ether (ETH) to make and grant wishes.

Similar to an online store, we have a tongue-in-cheek catalogue and users can **wish for items** on the catalogue. Just like tossing a coin into a wishing well, only a small [gas fee](https://www.investopedia.com/terms/g/gas-ethereum.asp#:~:text=Gas%20fees%20are%20payments%20made,spend%20on%20a%20particular%20transaction.) in ETH has to be paid for **making a wish**.

*Granting a wish* works like purchasing an item from an online store to gift to someone else. Every item in our catalogue has a preset price. When *granting a wish*, a user has to pay the price of the item another user has wished for. The price paid in ETH for *granting a wish* goes to the smart contract (ie. our "online store", or us).

To incentivise users to get into the spirit of gifting, the dApp rewards Goodwill points to users who have *granted wishes*. Goodwill points can be used to claim NFT badges that can be displayed on one's profile. The dApp also has a leaderboard to feature the top wish granters.

Here are the links to our [frontend](https://github.com/leechuanxin/santa-frontend), [Express backend](https://github.com/leechuanxin/santa-express), and [smart contract](https://github.com/JustinWong98/santa-blockchain) repositories.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- FEATURES -->

## Features

- Allows users to make their own wishes (in the form of minting them as NFT tokens)
- Users can grant wishes for others through cryptocurrency
- Compete for the top positions in the leaderboard through granting wishes
- Redeem NFT badges as a reward for granting wishes
- See all the wishes a user has made or granted, and the badges they have claimed

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- TECH -->

## Tech

We use:

- [Solidity] - For coding our smart contract on the blockchain. With our smart contract as our "primary backend", we store ownership information of the wishes made, and the NFT badges redeemed.
- [Express](https://expressjs.com/) - Our "secondary backend", for cosmetic purposes: usernames will be attached to each wallet address for identification purposes.
- [web3.js](https://web3js.readthedocs.io/en/v1.5.2/) - To interact with our smart contract, as well as offer cryptocurrency transactions for making wishes (by paying a [gas fee](https://www.investopedia.com/terms/g/gas-ethereum.asp#:~:text=Gas%20fees%20are%20payments%20made,spend%20on%20a%20particular%20transaction.)) and granting wishes (by paying the price of the item wished to the smart contract, ie. us).
- [React] - Front-end development, with Bootstrap as our key UI library.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE -->

## Usage

You can visit our deployed app [here](https://damp-bayou-29307.herokuapp.com).

<img width="1440" alt="Screenshot 2022-01-16 at 3 29 18 AM" src="https://user-images.githubusercontent.com/7672836/149635329-1d3e45a3-e370-4717-ba92-2554dc43401a.png">

1. Go to [MetaMask's site](https://metamask.io/). Download the Chrome extension and register for an account.

![](https://user-images.githubusercontent.com/84217227/148346096-2c66414c-3b53-4728-8a5f-9ea67f0c5d1c.gif)

2. Once you have the Chrome extension and account, go to our [landing page](https://damp-bayou-29307.herokuapp.com). Ensure that your MetaMask wallet account is connected to the site, and the Rinkeby testnet.

<img width="1440" alt="Screenshot 2022-01-16 at 3 08 51 AM" src="https://user-images.githubusercontent.com/7672836/149634907-e817e47e-2c93-4e9a-892a-d3fb1282c598.png">

3. For your first-time logging in, we will request for a username for which you will be identified when using the application.

![](https://user-images.githubusercontent.com/84217227/148346688-6ce47b2e-6ec7-40ea-91bc-b4ceb66bcd59.gif)

4. On logging in, you will be brought to the main page where you can see a list of Wishes you can grant, or make your own Wish. Click on the green 'Grant' button on any of the Wishes to grant a Wish.

<img width="1440" alt="Screenshot 2022-01-16 at 3 18 01 AM" src="https://user-images.githubusercontent.com/7672836/149635017-f84ea257-d92c-4af4-9c09-0f20346f364a.png">

5. Click on the red 'Make a Wish!' button on the same page, and you will be redirected to a form to make a Wish. Type and select an item to wish for, fill in the rest of the information, then click on the red 'Make Wish' button to finish making your Wish.

<img width="1440" alt="Screenshot 2022-01-16 at 3 19 31 AM" src="https://user-images.githubusercontent.com/7672836/149635107-f766480d-2243-4611-bde5-19e7a2cfd579.png">

6. If you have granted a couple of Wishes per step (4), you would have accumulated a number of Goodwill points. Click on the Badge icon on the left navigation bar to visit a list of Badges. Click on the green Redeem button on any of the Badges to redeem them with your Goodwill points.

<img width="1440" alt="Screenshot 2022-01-16 at 3 21 51 AM" src="https://user-images.githubusercontent.com/7672836/149635155-98c6aaad-e40f-456b-bb3d-e4f6c565fa97.png">

7. Click on the Users icon on the left navigation bar to search for the users on the platform. Click on any of their profile usernames to view their profile pages.

<img width="1436" alt="Screenshot 2022-01-16 at 3 22 00 AM" src="https://user-images.githubusercontent.com/7672836/149635180-b61df541-3598-45a2-a88f-494259f08b47.png">

8. To view your own profile, simply click on your own avatar image on the left navigation bar. You will be brought to your own profile page to view your Wishes, Granted Wishes and Badges.

<img width="1440" alt="Screenshot 2022-01-16 at 3 25 54 AM" src="https://user-images.githubusercontent.com/7672836/149635242-26798ffc-1ed7-4028-af78-5891847f5ee7.png">

9. Click on the Trophy icon on the left navigation bar to view the leaderboard. The leaderboard ranks users based on their lifetime accumulated Goodwill points, which is determined the number of Wishes they have granted.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] ERC-721 methods on Badge redemption
- [ ] ERC-1155 methods on Wish making
- [ ] Goodwill points earned weighted against prices for granting individual Wishes
- [ ] Rarity of Badges, and corresponding Goodwill points for redeeming Badges based on rarity
- [ ] Explore wallet authentication alternatives, such as [ethereumjs-wallet](https://github.com/ethereumjs/ethereumjs-wallet).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- RETROSPECTIVE -->

## Retrospective

<!-- TESTING AND CIRCUMVENTING LACK OF PRINT STATEMENTS -->

#### Testing and Circumventing Lack of Print Statements

There are no `print` nor `console.log` statements in Solidity. Unfortunately, we only attempted to set up tests using Truffle, Mocha and Chai right before the MVP deadline. Since we still had some features due before the deadline, we could not afford to be blocked by setting up tests in that timeframe. We had to scrap tests.

We worked around that by being very careful with our commits. This means manually testing our contracts nearly line-by-line using the Remix IDE, and ensuring that our commits are small. Without logging, a large, multi-line commit becomes harder to test for, since we have to take code out and put them back together.

Looking back, given our lack of prior contextual knowledge on blockchain development, Web3, NFTs, and cryptocurrency, we could have played it a lot safer setting up tests right at the project's start. Perhaps, even a test-driven development (TDD) approach would have worked for the project's context.

We only knew about [Hardhat](https://hardhat.org/) days before our presentation. Given our native JavaScript backgrounds, debugging with the Hardhat network and [their console.logs methods from their Console contracts](https://hardhat.org/tutorial/debugging-with-hardhat-network.html) would have made our lives a lot easier.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- SMART CONTRACT SIZE LIMIT AND ARRAY METHODS -->

#### Smart Contract Size Limit and Array Methods

[EIP-170](https://eips.ethereum.org/EIPS/eip-170) proposes a smart contract size limit of approximately 24kb. This made the deployment of our smart contract trickier in the later stages of development, as more and more features were added. 

On the days leading up to our project presentation, our [Remix IDE](https://remix.ethereum.org/) kept throwing the following warning: *Warning: Contract code size exceeds 24576 bytes (a limit introduced in Spurious Dragon). This contract may not be deployable on mainnet. Consider enabling the optimizer (with a low "runs" value!), turning off revert strings, or using libraries.* (see https://soliditydeveloper.com/max-contract-size)

Without any automated tests (e.g. with [truffle-contract-size](https://www.npmjs.com/package/truffle-contract-size)) to guide us, we did not have a way to get the bytecode size of our contracts in advance.

Resorting to manual testing, we realised that we triggered this warning the most frequently by having functions that:

* Have loops
* Return an array of Solidity `struct`s
* Usually a combination of both

With the exception of [a function for retrieving user information given their IDs and addresses](https://github.com/JustinWong98/santa-blockchain/blob/master/contracts/Wishlist.sol#L88-L94), most of the functions that require any form of filtering and sorting similar to JavaScript Array methods are moved to be executed on the front-end instead.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- DUAL DATABASE APPROACH AND DATA PERSISTENCE -->

#### Dual Database Approach and Data Persistence

Our Express backend only serves 1 cosmetic purpose: attach a username to a connected wallet address. However, our Solidity contract stores data about almost everything else in the dApp: wish and badge information, token ownership information, and user information about wishes granted.

[Wishlist.sol in our santa-blockchain repo](https://github.com/JustinWong98/santa-blockchain/blob/master/contracts/Wishlist.sol) is the only contract we compile and deploy. Through multi-level inheritance, [it inherits all other contracts we developed and libraries implementing ERC-721 standards](https://github.com/JustinWong98/santa-blockchain/blob/master/contracts/Wishlist.sol#L1-L7).

When we make changes and deploy the changes on the smart contract, we will use the address and the ABI of the newly deployed contract on the front-end.

Using a multi-level inheritance approach to development and deployment on a single smart contract storing our data, every new deployment has a problem of behaving like a new migration or re-seeding of data. Previous data that is now stored in the old contracts will not be present in the newly deployed contracts.

Thus, we have had issues with data persistence. We had to manually re-seed all prior interactions with the dApp using our multiple wallet test accounts.

Theoretically, having separate contracts for the "data" and the "controller" methods which interact with the data can solve the data persistence problem, as well as the smart contract size limit. We deploy "data" contracts storing data and mappings separately from the "controller" ones defining the methods that interact with said data. For these contracts to interact, the addresses of the "data" contracts will be provided to the "controller" contracts to call any of their setters or getters.

Without using too many instances of multiple or multi-level inheritance on a single contract like we do now, our smart contract(s)' logic can be better encapsulated without much space overheads.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- TOKEN STANDARDS -->

#### Token Standards

The approach of having separate contracts should have been and can be used in our handling of ERC-721 tokens, as suggested by [this QuickNode guide on deploying ERC-721 NFTs](https://www.quicknode.com/guides/solidity/how-to-create-and-deploy-an-erc-721-nft). This guide suggests that ERC-721 tokens are supposed to be deployed 1 per contract. It will be handy for defining the Badges users can redeem on granting Wishes and their ownership, [which unfortunately does not yet utilise any ERC-721 methods](https://github.com/JustinWong98/santa-blockchain/blob/master/contracts/Incentive.sol).

[Making a Wish involve employing ERC-721 methods](https://github.com/JustinWong98/santa-blockchain/blob/master/contracts/Token.sol#L76-L108) like `_safeMint`, because a Wish is a token minted by the user making it. A Wish does not involve any ERC-721 ownership transfer methods currently.

Originally, it was difficult to plan the ownership of Wishes, when implemented as NFTs. When involving ownership transfers, we could not use ERC-721's in-built methods like `safeTransfer` because of our initial complicated workflow. We planned to have the user mint a Wish as an NFT, but have the smart contract own the NFT instead. Only when the Wish is granted does the ownership transfer to the wisher. In the end, we simplified Wishes to be minted only by the wisher themselves, and not involve any ownership transfers.

Reading further about ERC-1155 standards, it's worth exploring implementing Wishes using ERC-1155 methods instead of ERC-721. Given that users mint their own Wishes and Wishes are not pre-minted on a smart contract, we can develop a single contract (as a collective) for tokens associated with Wishes while keeping transaction gas fees for interacting with Wishes lower.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[Justin Wong](https://github.com/JustinWong98) - justinwong8991@gmail.com

[Chuan Xin](https://github.com/leechuanxin) - chuanxin.lee@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

MIT

<p align="right">(<a href="#top">back to top</a>)</p>

   [frontend]: <https://github.com/leechuanxin/santa-frontend>
   [smart-contract]: <https://github.com/JustinWong98/santa-blockchain>
   [Truffle]: <https://trufflesuite.com/truffle/>
   [PostgreSQL]: <https://www.postgresql.org>
   [node.js]: <http://nodejs.org>
   [React]: <https://reactjs.org>
   [express]: <http://expressjs.com>
   [Solidity]: <https://soliditylang.org>
   [React Bootstrap]: <https://react-bootstrap.github.io>
