// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  describe("My test", () => {
    it("Should work with double spaces", () => {
      const message = "me  ssage";
      const actual = polybius(message);
      const expected = "2351  3434112251";

      expect(actual).to.equal(expected);
    });

    it("Should ignore letters when decoding", () => {
        const message = "23yy 23513434112251";
        const actual = polybius(message,false);
        const expected = "m message";
  
        expect(actual).to.equal(expected);
    });   

    it("Should ignore numbers when encoding", () => {
        const message = "m42 message";
        const actual = polybius(message);
        const expected = "23 23513434112251";
  
        expect(actual).to.equal(expected);
    });   

    it("Should work with capitals", () => {
        const message = "My Message";
        const actual = polybius(message);
        const expected = "2345 23513434112251";
  
        expect(actual).to.equal(expected);
    });

    it("Should ignore special characters when encoding", () => {
        const message = "My !Message!!!";
        const actual = polybius(message);
        const expected = "2345 23513434112251";
  
        expect(actual).to.equal(expected);
    });
  });

});