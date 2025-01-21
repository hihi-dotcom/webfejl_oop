/*const ures_obj = {}
ures_obj["nev"] = "Jancsi";
ures_obj[0] = "Jancsi";
console.log(ures_obj);
*/
let tmp = {};
Object.defineProperty(tmp, "nev", {value: "Ferenc", writable: true});

tmp.nev = "Ádám";
console.log(tmp);