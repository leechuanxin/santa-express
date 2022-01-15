# Technical Review

## What were the biggest challenges you faced? What would you do differently next time?

### Testing and Circumventing the Lack of Logging

There are no `print` nor `console.log` methods in Solidity. Unfortunately, we only attempted to set up tests using Truffle, Mocha and Chai right before the MVP deadline. Given that we still had some features due before the deadline, we could not afford to be blocked by setting up tests in that timeframe. We had to scrap tests.

We worked around that by being very careful with our commits. This means manually testing our contracts nearly line-by-line using the Remix IDE, and ensuring that our commits are small. Without logging, a multi-line commit becomes harder to test for, since we have to take code out and put them back together.

### Persistence of Data Across Deployed Smart Contract(s)

Using a smart contract as our "backend" and database is risky. A key problem we face is the persistence of data. 

When we make changes and deploy the changes on the smart contract, we will use the address and the ABI of the newly deployed contract on the front-end.

Using a smart contract as a database means that every new deployment behaves like a new migration or re-seeding of data. Previous data that is now stored in the old contracts will not be present in the newly deployed contracts: ownership of the wishes and badges, as well as data on wish granting.

On using the new contract for the first-time, the badges will be newly pre-minted (thus, assigned to the contract but not any user), and there aren't new wishes.

Unfortunately, we haven't the knowledge yet on blockchain and token development to properly address data persistence. This is because there doesn't seem to be plenty of resources addressing this issue; we may have even been tackling blockchain development the whole time.

Regarding what we could have done differently, 1 possible solution found [here](https://www.quicknode.com/guides/solidity/how-to-create-and-deploy-an-erc-721-nft) involves storing every token ownership information in a single contract. For starters, this means creating a contract for every token we are pre-minting, such as the badges.

From what I can gather, this may involve not compiling every single contract together, but having the front-end interact with many contracts separately.

### Inconsistent ERC-721 Compliance

The tokens that represent a wish are ERC721 compliant, but the ones that represent the badges are currently not. For the sake of exploration despite the tight project timeline, we made wishes NFT tokens that are ERC721 compliant, but never really had the chance to do so for badges. 

In fact, there may be a stronger argument for making badges ERC721 compliant. This is because badges involve an actual transfer of ownership - from the smart contract (where they are pre-minted) to the users who redeemed the badges. For wishes, while they are ERC721, they are not actually required to be so. This is because the users mint them (when making their wishes), and the ownership technically stays with them even after the wishes are granted.

### Disparate Data Storage

Should the username be stored in Express or on the blockchain? We initially have the username stored in Express as a pre-emptive measure, in case gas prices get too high for setting too much information on the smart contract. 

However, we do not have any evidence that storing the username in the blockchain actually increases the gas fees, in fact we never even tried storing usernames on the blockchain. 

Right now having 2 databases may cause a disjointed experience, because we have to do verification of user data against the Express backend as well as the smart contract (which also doubles as a backend in a way). 

An argument can be made to consider having the username on the blockchain itself, so that verification of data is only done by 1 source - the blockchain. We already have a struct of users, which stores their addresses and the number of points they have. On paper, it should not hurt to have another key-value in the struct, just to store strings (the usernames).

However, a counter-argument can be made that having usernames on our smart contracts would count towards our total code space. Given how separated and unnecessary the username is when interacting with the data itself, putting the username in a separate database is fine. If we had other features like uploading your own profile picture, the space usage on the blockchain would be too high. Having another database is just a contingency plan to trim the fat on our smart contract.

And this also brings to the final question of whether a username is even necessary? Most blockchain work involves anonymity, and having another identifier attached to your wallet address seems to break this rule around Web3 applications.

# Process Review

## What could have been better? What would you do differently next time?

### dApp Ideation

Web3 and decentralised applications are very hyped amongst developers; a lot of developers want to work on a blockchain application, but no one really knows what it entails.

I am not the most creative at coming up with side project ideas, and I am also a tad fussy with attempting uninspired clones. It does not seem as fun to work on yet another Instagram clone just to be built on the blockchain, nor another game.

It's impossible to find ideas online for simpler 2-week blockchain projects to attempt; most ideas tend to be start-up product design ideas that involve a lot of prior subject matter expertise on logistics, healthcare etc.

We spent the whole of Ideation Phase 1 and half of Ideation Phase 2 just to settle for what we have today. We wanted to have something without much subject matter expertise and we could all relate to (Christmas wishlists), yet be able to use characteristics of Web3 such as the blockchain or tokens. Perhaps it's not a full-fledged game, but we had some gamified elements to support making wishes and fulfilling them.

We only knew about NFT websites such as [Non-Fungible Olive Gardens](https://nonfungibleolivegardens.com/) a day before our presentations. If we were to take this idea further, we could draw references from Non-Fungible Olive Gardens' roadmap. The gamified elements can also be fleshed out better.

### Learning Solidity Late and Expectations Around Web3

Since we have spent plenty of time on ideation, we did not have the chance to learn and master Solidity as much as we would have desired. Many of the problems listed today, such as the need to circumvent the lack of logging, came from realisations too late into development.

In the future, references can be drawn from existing contracts. [The code here](https://etherscan.io/address/0x60e4d786628fea6478f785a6d7e704777c86a7c6#code) references how the Mutant Ape Yacht Club contract is set up, and this will be useful in thinking about conventions about how ERC-721 token contracts can be set up.

Coming from the difficulties in ideating a dApp, we could have developed a better conceptual understanding of Web3 or simple dApps before embarking on this project. I am sure plenty of our technical difficulties come from certain setup that we have come to expect from Web 2.0 applications, but were made redundant or non-compliant in Web3.