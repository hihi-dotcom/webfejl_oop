const fv1 = (a, b) => {
    return a + b;
};

const fv2 = (a, b, cb) => {
    const vhivas = cb(a, 2);
    const vhivas2 = cb(b, 4);
    return cb(vhivas,vhivas2);
};

const res1 = fv2(5, 7, (a,b) => {return a + b;});

console.log(res1);

const res2 = fv2(7, 8, fv1);
console.log(res2);

/**
 * 
 * @param {String} operator 
 */
const fv3 = (operator) => {
    if(operator === "+"){
        return (a, b) => {
            return a + b;
        }
    }

    if(operator === "*2"){
        const multi = 2;
        return (a, b) => {
            return multi*(a + b);
        }
    }
};

const fv4 = fv3("+");

console.log(fv4(5, 7));

const fv2_back = fv2(5, 7, fv3('+'));

console.log(fv2_back);

const fv2_backtoback = fv2(5, 7, fv3("*2"));

console.log(fv2_backtoback);