const caesarsChipher = require('../caesarsChipher');
describe('several caesarsChipher tests', ()=>{
    test('caesarsChipher', ()=>{
        expect(caesarsChipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
            )
    })
    test("caesarsChipher", ()=>{
        expect(caesarsChipher("SERR CVMMN!")).toBe("FREE PIZZA!")
    })
})