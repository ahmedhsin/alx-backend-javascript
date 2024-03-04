const sendPaymentRequestToApi = require('./3-payment.js')
const utils = require('./utils.js')
const chai = require('chai')
const sinon = require('sinon')
describe("sendPaymentRequestToApi", () => {
    it("make calculate func stub", () => {
        const stub = sinon.stub(utils, "calculateNumber").returns(10)
        const spy = sinon.spy(console, "log")
        sendPaymentRequestToApi(100, 20);
        chai.expect(stub.firstCall.args[0]).to.equal('SUM');
        chai.expect(stub.firstCall.args[1]).to.equal(100);
        chai.expect(stub.firstCall.args[2]).to.equal(20);
        chai.expect(spy.firstCall.args[0]).to.equal('The total is: 10');
        spy.restore();
        stub.restore()
    })
})