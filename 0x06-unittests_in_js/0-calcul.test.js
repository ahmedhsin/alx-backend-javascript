const calculateNumber = require("./0-calcul.js");
console.log(calculateNumber)
const assert = require("assert")
describe("test calc function", () => {
    it("test with zero", () => {
        assert.equal(calculateNumber(0,1), 1);
    });
    it("test with 1.5", () => {
        assert.equal(calculateNumber(1.5,1), 3);
    });
    it("test with 1.4 and 1.3", () => {
        assert.equal(calculateNumber(1.4,1.3), 2);
    });
    it("test with 1.7, 2.3", () => {
        assert.equal(calculateNumber(1.7,2.3), 4);
    });
    it("test with 1.5 and 4", () => {
        assert.equal(calculateNumber(1.5,4), 6);
    });
});
