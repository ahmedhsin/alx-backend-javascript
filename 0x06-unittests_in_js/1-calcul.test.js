const calculateNumber = require("./1-calcul.js");
console.log(calculateNumber)
const assert = require("assert")
describe("test type sum", () => {
    const sum = 'SUM';
    it("test with zero", () => {
        assert.equal(calculateNumber(sum, 0, 1), 1);
    });
    it("test with 1.5", () => {
        assert.equal(calculateNumber(sum, 1.5, 1), 3);
    });
    it("test with 1.4 and 1.3", () => {
        assert.equal(calculateNumber(sum, 1.4, 1.3), 2);
    });
    it("test with 1.7, 2.3", () => {
        assert.equal(calculateNumber(sum, 1.7, 2.3), 4);
    });
    it("test with 1.5 and 4", () => {
        assert.equal(calculateNumber(sum, 1.5, 4), 6);
    });
});

describe("test type subtract", () => {
    const subtract = 'SUBTRACT';
    it("test with zero", () => {
        assert.equal(calculateNumber(subtract, 0, 1), -1);
    });
    it("test with 1.5", () => {
        assert.equal(calculateNumber(subtract, 1.5, 1), 1);
    });
    it("test with 1.4 and 1.3", () => {
        assert.equal(calculateNumber(subtract, 1.4, 1.3), 0);
    });
    it("test with 1.7, 2.3", () => {
        assert.equal(calculateNumber(subtract, 1.7, 2.3), 0);
    });
    it("test with 1.5 and 4", () => {
        assert.equal(calculateNumber(subtract, 1.5, 4), -2);
    });
});

describe("test type divide", () => {
    const divide = 'DIVIDE';
    it("test with zero", () => {
        assert.equal(calculateNumber(divide, 0, 1), 0);
    });
    it("test with 0.4", () => {
        assert.equal(calculateNumber(divide, 0.4, 0.4), 'Error');
    });
    it("test with 1.4 and 1.3", () => {
        assert.equal(calculateNumber(divide, 1.4, 1.3), 1);
    });
    it("test with 1.7, 2.3", () => {
        assert.equal(calculateNumber(divide, 1.7, 2.3), 1);
    });
    it("test with 1.5 and 4", () => {
        assert.equal(calculateNumber(divide, 1.5, 4), 0.5);
    });
});
