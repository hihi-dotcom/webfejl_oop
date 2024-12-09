
class Factory{
    constructor(companions){
        this.companions = []
    };
 // TODO 1, 2, 3, 4, 9, 10
addCompanion(companion){// deklarálom az addCompanion függvényt, ami egy companiont vár bemeneti paraméterként
    this.companions.push(companion); //és ezt a companiont felpusholjuk a fentebb létrehozott tömbbe.
    createRow(mano);
    const mano1 = new Companion(Factory.generalId(), )
}
generalId(){
    return this.companions.length; // az új elem idje mindig a tömb hossza lesz.
};
}

class Companion{
 // TODO 5
    constructor(id, keresztnev, vezeteknev, reszleg, produktumlista){
        this.id = id,
        this.keresztnev = keresztnev,
        this.vezeteknev = vezeteknev,
        this.reszleg = reszleg;
        this.produktumlista = []
    };

    LastandFirstNameBack(){//minden paramétert lát ezért nem kell bemeneti paraméter
        return this.keresztnev + ` ` + this.vezeteknev;
    };

    addProduktum(produktum){
        this.produktumlista.push(produktum);//a bemeneti paraméterként kapott produktumot felpusholjuk a produktumlistába ami a Companion osztályunkban van
    };
}