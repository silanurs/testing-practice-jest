const reverseString = require('../reverseString')
describe('several reverseString tests', () => {
    test('reverseString', ()=> {
        expect(reverseString("Hello")).toBe("olleH")
     })
     test('reverseString', ()=> {
        expect(reverseString("Greetings from Earth")).toBe("htraE morf sgniteerG")
     })
     test('reverseString', ()=>{
        expect(reverseString("Howdy")).toBe("ydwoH")
     })
})
