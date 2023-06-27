const calculator = require('../calculator')
describe("several calculator tests", ()=>{
    test("test add", ()=>{
        expect(calculator(2,"+",2)).toBe(4)
    })
    test("test multiply", ()=>{
        expect(calculator(3, "*", 3)).toBe(9)
    })
    test("test subtract", ()=>{
        expect(calculator(5, "-", 2)).toBe(3)
    })
    test("test divide", ()=>{
        expect(calculator(8, "/", 4)).toBe(2)
    })
})