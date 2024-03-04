const chai = require('chai')
const calculateNumber = require("./2-calcul_chai.js");
describe("test type sum with chai", () => {
    const sum = 'SUM';
    it("test with zero", () => {
        chai.expect(calculateNumber(sum, 0, 1)).to.equal(1);
    });
    it("test with 1.5", () => {
        chai.expect(calculateNumber(sum, 1.5, 1)).to.equal(3);
    });
    it("test with 1.4 and 1.3", () => {
        chai.expect(calculateNumber(sum, 1.4, 1.3)).to.equal(2);
    });
    it("test with 1.7, 2.3", () => {
        chai.expect(calculateNumber(sum, 1.7, 2.3)).to.equal(4);
    });
    it("test with 1.5 and 4", () => {
        chai.expect(calculateNumber(sum, 1.5, 4)).to.equal(6);
    });
});

describe("test type subtract with chai", () => {
    const subtract = 'SUBTRACT';
    it("test with zero", () => {
        chai.expect(calculateNumber(subtract, 0, 1)).to.equal(-1);
    });
    it("test with 1.5", () => {
        chai.expect(calculateNumber(subtract, 1.5, 1)).to.equal(1);
    });
    it("test with 1.4 and 1.3", () => {
        chai.expect(calculateNumber(subtract, 1.4, 1.3)).to.equal(0);
    });
    it("test with 1.7, 2.3", () => {
        chai.expect(calculateNumber(subtract, 1.7, 2.3)).to.equal(0);
    });
    it("test with 1.5 and 4", () => {
        chai.expect(calculateNumber(subtract, 1.5, 4)).to.equal(-2);
    });
});

describe("test type divide with chai", () => {
    const divide = 'DIVIDE';
    it("test with zero", () => {
        chai.expect(calculateNumber(divide, 0, 1)).to.equal(0);
    });
    it("test with 0.4", () => {
        chai.expect(calculateNumber(divide, 0.4, 0.4)).to.equal('Error');
    });
    it("test with 1.4 and 1.3", () => {
        chai.expect(calculateNumber(divide, 1.4, 1.3)).to.equal(1);
    });
    it("test with 1.7, 2.3", () => {
        chai.expect(calculateNumber(divide, 1.7, 2.3)).to.equal(1);
    });
    it("test with 1.5 and 4", () => {
        chai.expect(calculateNumber(divide, 1.5, 4)).to.equal(0.5);
    });
});
