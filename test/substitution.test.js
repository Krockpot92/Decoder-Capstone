// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    describe("My test", () => {

        it("should return false if alphabet is not a string", () => {
        const message = "message";
        const alphabet = 12345678901234567890123456;
            
        const actual = substitution(message, alphabet)
        expect(actual).to.be.false
        })

        it("should work with double spaces", () => {
            const message = "yp  ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const expected = "my  message"

            const actual = substitution(message, alphabet, false)
            expect(actual).to.equal(expected)
        })

        it("Should return false if character not found in (alphabet)", () => {
            const message = "ypsadah!"
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl"

            const actual = substitution(message, alphabet)
            expect(actual).to.be.false
        })

        it("Should work no matter message length", () => {
            const message = "ypsadahasdasdasdasdasudhaushduasduhasudhaodhwioasijd"
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl"

            const actual = substitution(message, alphabet)
            const expected = 'pui.e.d.ie.ie.ie.ie.ined.niden.iend.ined.vedkxv.ixte'
            expect(actual).to.equal(expected)
        })

        it("Should work with capital letters ", () => {
            const message = "CAPITAL"
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl"

            const actual = substitution(message, alphabet, false)
            const expected = 'lcysjcz'
            expect(actual).to.equal(expected)
        })

    })
})