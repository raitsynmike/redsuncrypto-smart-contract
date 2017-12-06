var Dispatcher = artifacts.require("./Dispatcher.sol");
var RedSunCryptoToken = artifacts.require("./token/RedSunCryptoToken.sol");
var SellOffer = artifacts.require("./market/SellOffer.sol");

module.exports = function(deployer) {
  deployer.deploy(Dispatcher);
  deployer.deploy(RedSunCryptoToken).then(function() {
    Dispatcher.deployed().then(function(instance) {
      return instance.setCurrentRedSunCryptoTokenAddress(RedSunCryptoToken.address);
    }).then(function(result) {
      deployer.deploy(SellOffer, Dispatcher.address);
    });
    return;
  });
};
