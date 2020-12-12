function getSum(numA, numB) {
    return numA + numB
}
function getMul(numA, numB) {
    return numA*numB;
}

let result, expected;

function text(message, callback) {
    try{
        callback();
        console.log('pass', message)
    }catch(error){
        console.error(error);
        console.log('fail', message)
    }
}

function expect(actual) {
    return {
        toEqual: function (expected) {
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }else{

            }
        },
        toBeEqual: function(expected) {
            if(typeof actual !== typeof expected) {
                throw new Error(`${typeof actual} is not equal to ${typeof expected}`)
            }
        }
    }
}

function textAdd() {
    result = getSum(4,1)
    expected = 6 ;
    expect(result).toEqual(expected);
}

function textMultiply() {
    result = getMul(4,1)
    expected = 6 ;
    expect(result).toEqual(expected);
}

text("add 10 + 10 to be equal 20", () => {
    expect(getSum(10,10)).toEqual(20);
});
text("add 10 + 10 to be equal 20", () => {
    expect(getSum(10,"10")).toEqual(20);
});
text("add 10 + 50 to be equal 20", () => {
    expect(getSum(10,40)).toEqual(60);
});

text('mul 2 and 3 to be equal 6', () => {
    expect(getMul(2,3)).toEqual(6);
})
text('mul 2 and 3 to be equal 6', () => {
    expect(getMul(2,"3")).toEqual(6);
})
text('mul 2 and 3 to be equal 6', () => {
    expect(getMul(2,"3")).toBeEqual(6);
})