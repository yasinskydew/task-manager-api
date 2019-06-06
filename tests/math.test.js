const {calculateTip} = require('../src/math')

test('Should calculate with tip', () => {
    const total = calculateTip(10, .3)

    expect(total).toBe(13)
    // if(total !== 13){
    //     throw new Error('totla tip should be 13, Got ' + total)
    // }
})
