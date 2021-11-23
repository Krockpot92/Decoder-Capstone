// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    describe("My test",() => {
        it("Should return correct answer (am i working?)", () => {
            const message = "xj f tlohfkd?";
            const shift = 3;
            
            const actual = caesar(message, shift);
            const expected = "am i working?"
            expect(actual).to.equal(expected)
        
        });

        it("Should work with mix of random symbols and spaces", () => {
            const message = "Ah^ &# da"
            const shift = 16

            const actual = caesar(message, shift);
            const expected = "qx^ &# tq"
            expect(actual).to.equal(expected)
        });

        it("Should work with double spaces", () => {
            const message = "bl  ah"
            const shift = 2

            const actual = caesar(message, shift);
            const expected = "dn  cj"
            expect(actual).to.equal(expected)
        });
        
        it("Should return false if word is not string type", () => {
            const message = 42;
            const shift = 2

            const actual = caesar(message, shift);
            const expected = false
            expect(actual).to.equal(expected)
        });       
    
        it("Should decode (Am I working?) ignoring capitals", () => {
            const message = "Am I working?";
            const shift = 3;

            const actual = caesar(message, shift,false);
            const expected = "xj f tlohfkd?"
            expect(actual).to.equal(expected)
        
        });

        it("Should decode with mix of random symbols and spaces", () => {
            const message = "Ah^ &# da"
            const shift = -16

            const actual = caesar(message, shift,false);
            const expected = "qx^ &# tq"
            expect(actual).to.equal(expected)
        });

        it("Should return false if shift over 25 ", () => {
            const message = "bl  ah"
            const shift = 26

            const actual = caesar(message, shift,false);
            const expected = false
            expect(actual).to.equal(expected)
        });
        
        it("Should return false if shift is not a number", () => {
            const message = "monkey";
            const shift = '2'

            const actual = caesar(message, shift, false, false);
            const expected = false
            expect(actual).to.equal(expected)
        });       
    })
})



