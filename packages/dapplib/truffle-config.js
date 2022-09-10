require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stove regret range purse grace immense army gentle'; 
let testAccounts = [
"0x9198de7bd54adcbaf633e9feb967922f66805d549c7a4394ab3a9633730a5943",
"0x20ac35a6a2c08290af5612e297c4b4b3aadff5e55c1b164dc6e9a792b58320a5",
"0x392edfd0cd84f3f1be40ae3047391b737be3c4399484d35aefd21586f0bfc4df",
"0xc66c6a808b291202f854719d1b9d87be7c9816610b2caec8ed79126c48d2cd01",
"0x988292f7dd4f885010cfd177da0570059d2a91c3b275476f4c565e4c6a8542e0",
"0x1b0bba8d98cbd389007abd63b2cd7254f1a6992983a57c0992e639588d559703",
"0x72ba88d4a623f22db91f7d921e231aa0efc817af543ace321e5df908aff1ae9a",
"0xd6fe3217cfcc8d0ced81d04e73d8fd7ccd990a7198c6e4552272603a833c7398",
"0xc564cc0771f403be3be3c1e55462896f978e9e8965de761a50980c2f7fca5fe2",
"0x2bca8642f9a92f7f26afe350b3a98b25069778eec2e7e8bdfc2888213efd3460"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

