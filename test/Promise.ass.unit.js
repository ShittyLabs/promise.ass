const { expect } = (chai = require("chai"));
chai.use(require("chai-as-promised"));

require("../index")();
describe("Promise", () => {
  describe("#ass", () => {
    it("should be a function", () => {
      expect(Promise.ass).to.be.an.instanceof(Function);
    });

    it("should resolve a series of Promises to an array of values", () => {
      const promise1 = Promise.resolve(4);
      const promise2 = Promise.resolve(false);
      const promise3 = Promise.resolve("hello");
      const expected = [4, false, "hello"];
      const actual = Promise.ass([promise1, promise2, promise3]);

      return expect(actual).to.eventually.deep.equal(expected);
    });

    it("should resolve a mix of Promises and values to an array of values", () => {
      const promise1 = Promise.resolve(4);
      const promise2 = false;
      const promise3 = Promise.resolve("hello");
      const expected = [4, false, "hello"];
      const actual = Promise.ass([promise1, promise2, promise3]);

      return expect(actual).to.eventually.deep.equal(expected);
    });
  });
});
