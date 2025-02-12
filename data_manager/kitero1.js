/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns 
 */
const sum_1 = (a, b) => {//A sum_1 változóban eltároltunk egy névnélküli arrow functiont két bemeneti paraméterrel(Number majd visszatérünk, a számok összegével
    return a + b;
}

console.log(sum_1(3, 5));// kilogoljuk a függvényhívást 3 és 5 számokkal, visszatérés: 8

const obj = {//üres objektum létrehozása obj névvel
};
obj.calculate_1 = sum_1; //megadom az obj objektum calculate_1 tulajdonságának a sum_1 függvényt, így a calculate_1 egy függvény lesz ugyanolyan, mint a sum_1

console.log(obj.calculate_1(4, 4));//kilogoltam az obj.calculate_1 függvényhívását 4 és 4 értékkel, visszatérés: 8 ugyanúgy

/**
 * 
 * @param {callback} calculatecb 
 */
obj.calculate_2 = (calculatecb) => {//megadom az obj objektum calculate_2 tulajdonságának a névnélküli arrow functiont, amelynek egy paramétere van a calculatecb, ami még egy callback függvény
    const a = 7;//létrehozok egy a változót aminek megadom a 7-et
    const b = 8;//létrehozok egy a változót aminek megadom a 8-at
    return calculatecb(a, b); //visszatérünk, a paraméter callback függvény hívásával és megadjuk, a két létrehozott számot paraméterként
};

const result_1 = obj.calculate_2((szam1, szam2) => {return szam1 + szam2;}); //a result_1 változóban eltároljuk az obj.calculate_2 függvényhívását, ennek a függvénynek egy paramétere van, ami egy függvény(névnélküli/arrow function), aminek ismételten két paramétere van(a két értéket át adtuk már a calculate_2-ben átadunk) és ez a névnélküli függvény visszatér a két bemeneti paraméter összegével

console.log(result_1);//kilogoljuk a result_1 változót, eredmény: 15

const result_2 = obj.calculate_2((szam3, szam4) => {return szam3 - szam4;});//a result_2 változóban eltároljuk ismételten az obj.calculate_2 függvényhívását, ami ismét egy függvény(callback),aminek két paramétert adtunk még a calculate_2ben(7, 8) és most ezeknek a paramétereknek a különbségét adjuk vissza ebben a callback függvényben  

console.log(result_2); //kilogoljuk a result_2 változót,eredmény: -1
/**
 * 
 * @param {Number} szam1 
 * @param {Number} szam2 
 * @param {callback} callback 
 * @returns 
 */
obj.calculate_3 = (szam1, szam2, callback) => {//a korábban obj objektum calculate_3 tulajdonságának értékül adok egy névnélküli/arrow functiont(függvényt), amelynek három paramétere van 2 szám és egy függvény(callback)
    const res = callback(szam1, szam2);// a res változónak értékül adom a harmadik paraméter(callback függvény) hívását, az előző kettő szám paraméter megadásával 
    return res;//majd visszatérünk a res változóval
};

const result_3 = obj.calculate_3(7, 8, (szam1, szam2) => {//a result_3 változóban eltárolom az obj.calculate_3 függvényhívását aminek,ugye 3 paramétere van (szám: 7, szám:8, callback függvény/arrow function) a harmadik paraméterben, az első két paraméter szorzatával térünk vissza, eredmény: 56
    return szam1 * szam2;
});

console.log(result_3);//kilogoljuk a result_3 változót, eredmény:56 megint

const thisFunction = () => {//a thisFunction változónak értékül adunk egy névnélküli/arrow functiont,így a thisFunction nevű változónk már egy függvény lesz
    const a = 10;//deklarálom az a nevű változót, aminek megadom a 10 értéket
    const result_5 = obj.calculate_2((szam3, szam4) => {return (szam3 * a) - szam4;});//a result_5 változónak megadom az obj.calculate_2 függvényhívását, ugye ennek a függvénynek, is egy paramétere van(callback függvény), ami a calculate_2 függvényben átadott két szám paraméterrel rendelkezik, illetve az a változónkkal, amit az előbb deklaráltam,majd a végén a visszatérésünk az a és az első szám szorzatából kivonva a második szám. eredmény: 62
    return result_5 //visszatérünk, a result_5 változónkkal
};
console.log(thisFunction()); //kilogoljuk a thisFunctiont, eredmény: 62