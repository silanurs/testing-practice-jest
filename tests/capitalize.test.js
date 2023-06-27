const capitalize = require('../capitalize');
describe("several capitalize tests", ()=>{
    test("capitalize", ()=>{
        expect(capitalize("hello")).toBe("Hello");
    })
    test("capitalize", ()=>{
        expect(capitalize("the odin project")).toBe("The odin project")
    })
})