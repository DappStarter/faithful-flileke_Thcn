require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain snow harvest glimpse food sketch'; 
let testAccounts = [
"0xe13f05076bc087b055bcbc86a0c5ee893661ec89e9343ac1d9623fdaa2eece2e",
"0xe28f93fb46631ae5ed1857aaf02bcbacbbdb57c96045a58020143853450761b0",
"0x459befab0984891b9f0c07b664b69382029dc5fdc73ceea4a490125ae5197efa",
"0x9f537fcfa52fd70a23928eb90090449ece14c01c246c01ca3186fb9902780b0d",
"0x75293e174c9a4fa742a850e244f6def4424fd40855dfa8b21573b194862ab85f",
"0x8b1ef0f29d738b6cce5f34d717b4213779bbfbb63e1016cea92d805ef5d96b84",
"0x0b332ab5d94b52779db8a6398ce580501ea12184146de7573556d9bf8a369fbd",
"0xf127f19b4d6e76ccd8683cfafbf3f21be39419f340dec716641a62cdc1e11c18",
"0xdf918905990be7519e96ff39933476c0dcf3cb79cbfcd048075c545e879ac31c",
"0x426de9c36e80374c1cefe9edc2501eb460ff4cb22785c9ae7b07ed3893d7e2c4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

