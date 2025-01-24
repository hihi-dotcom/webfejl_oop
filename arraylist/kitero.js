function fun(param){
    console.log(param.nev);
}

fun({nev: "Cirmi"});

const csirke = fun;

csirke({nev: "CSirek"});


const funA = function(param){
    console.log(param.nev);
};

funA({nev: "GYMre"});

const funB = function(){
    console.log(this.nev);
};

const tojas = funB.bind({nev: `Bálint`});

tojas();

const funC = (param) => {
    console.log(param.nev);
};

const Oobj = {
    funA: (param)=> {console.log(param.nev)},
    funB: (param)=> {console.log(param.eletkor)},
};

const Pers = {
    nev: "Cirmi",
    eletkor:35,
}

Oobj.funA(Pers);
Oobj.funB(Pers);