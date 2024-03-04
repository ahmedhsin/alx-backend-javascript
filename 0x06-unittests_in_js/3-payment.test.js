const sendPaymentRequestToApi = require('./3-payment.js')
const utils = require('./utils.js')
const chai = require('chai')
const sinon = require('sinon')
describe("sendPaymentRequestToApi", () => {
    it("same as Utils", () => {
        const spy = sinon.spy(utils, "calculateNumber")
        sendPaymentRequestToApi(5, 6);
        chai.expect(utils.calculateNumber.calledOnce).to.be.true;
        spy.restore()
    })
})