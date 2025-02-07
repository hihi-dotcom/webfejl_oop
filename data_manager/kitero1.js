const sum_1 = (a, b) => {// sum arrow, function két bemeneti paraméterrel
    return a + b;
}

console.log(sum_1(3, 5));// kilogoljuk a függvényhívást

const obj = {//üres obj objektum létrehozása
};
obj.calculate_1 = sum_1; //megadom az obj objektum calculate_1 tulajdonságának a sum_1 függvényt

console.log(obj.calculate_1(4, 4));//kilogoltam az obj.calculate_1 függvényhívását a 4, 4 értékkel

obj.calculate_2 = (calculatecb) => {//megadom az obj objektum calculate_2 tulajdonságának az arrow functiont, amelynek egy paramétere van a calculatecb, ami még egy függvény
    const a = 7;//létrehozok egy a változót aminek megadom a 7-et
    const b = 8;//létrehozok egy a változót aminek megadom a 8-at
    return calculatecb(a, b);
};

const result_1 = obj.calculate_2((szam1, szam2) => {return szam1 + szam2;});

console.log(result_1);

const result_2 = obj.calculate_2((szam3, szam4) => {return szam3 - szam4;});

console.log(result_2);

obj.calculate_3 = (szam1, szam2, callback) => {
    const res = callback(szam1, szam2);
    return res;
};

const result_3 = obj.calculate_3(7, 8, (szam1, szam2) => {
    return szam1 * szam2;
});

console.log(result_3);

const thisFunction = () => {
    const a = 10;
    const result_5 = obj.calculate_2((szam3, szam4) => {return (szam3 * a) - szam4;});
    return result_5
};
console.log(thisFunction()); 