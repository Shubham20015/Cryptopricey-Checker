const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');
const CrytoAPI = require('../lib/CryptoAPI');

const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            
            const api = new CrytoAPI(key);

            const priceOutputData = await api.getPriceData(cmd.coin , cmd.cur);

            console.log(priceOutputData);
        } catch (error) {
            console.log(error.message.red);
        }
    }
}

module.exports = check;