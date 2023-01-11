// commonjs
const clone = require('./clone');
// 还有一种imporf from

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};

console.log(clone(target));