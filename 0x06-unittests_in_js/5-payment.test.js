const sendPaymentRequestToApi = require('./3-payment.js')
const utils = require('./utils.js')
const chai = require('chai')
const sinon = require('sinon')

describe("test payment5", () => {
    let spy = null;
    beforeEach(() => {
        spy = sinon.spy(console, "log")
    })
    afterEach(() => {
        spy.restore()
    })
    it("sendPaymentRequestToAPI 100 20", () => {
        sendPaymentRequestToApi(100, 20)
        chai.expect(spy.firstCall.args[0]).to.equal('The total is: 120');
        chai.expect(spy.calledOnce).to.be.true

    })
    it("sendPaymentRequestToAPI 10 10", () => {
        sendPaymentRequestToApi(10, 10)
        chai.expect(spy.firstCall.args[0]).to.equal('The total is: 20');
        chai.expect(spy.calledOnce).to.be.true
    })
})