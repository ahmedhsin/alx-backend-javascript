const Utils = require('./utils.js')
function sendPaymentRequestToApi(totalAmount, totalShipping){
    const ans = Utils.calculateNumber('SUM', totalAmount, totalShipping)
    console.log(`The total is: ${ans}`)
}

module.exports = sendPaymentRequestToApi;
