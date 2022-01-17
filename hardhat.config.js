require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const projectId = process.env.ALCHEMY_PROJECT_ID;
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
    networks: {
        hardhat: {
            chainId: 1337
        },
        mumbai: {
            url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
            accounts: [privateKey]
        },
        mainnet: {}
    },
    solidity: "0.8.11",
};
