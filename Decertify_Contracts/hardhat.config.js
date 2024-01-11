/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/1df4524b8e964edbb748d10809e0b6eb`,
      accounts: process.env.PRIVATE_KEY,
    },
  },
};
