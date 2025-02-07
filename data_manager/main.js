/**
 * @typedef {{nev: String, eletkor: Number}} Person //megadtuk egy Person objektum típusának definicióját 
 * @callback UpdateCallback //a callback segítségével definiáltunk egy callback függvényt is, aminek megadtuk a nevét(átadható más függvényeknek)
 * @param {Person[]} persons //a Data_Manager osztályunk első privát tulajdonságának(#array) típusa Person array lett(tehát Personokat tárolunk el benne)
 * @returns {void}//ez pedig a callback függvényünk visszatérési értéke: void
 */

class Data_Manager{
    /**
     * @type {Person[]}//megadtuk neki a Person típust
     */
    #array //a Data_Manager osztályunk első privát tulajdonsága

    /**
     * @type {UpdateCallback}//megadtuk neki a JSDoc-ban definiált callback függvényt nevét típusként
     */
    #updateCallback  //a Data_Manager osztályunk második privát tulajdonsága

    /**
     * 
     * @param {Person[]} param1 
     */
    constructor(param1 = []){ //a konstruktorban megadutnk opcionális paraméterként egy tömböt, aminek paraméterként, megadtuk, hogy ez a tömb  Person típusú objektumokat tároljon
        this.#array = param1; //az elsőként létrehozott #array privát tulajdonságunknak megadtuk az opcionális bemeneti paramétert értékként
        this.#updateCallback = () => {
            //a másodikként létrehozott privát tulajdonságunknak(updateCallback) megadtunk egy üres arrow functiont, hogyha esetleg nem lenne besetelve, ne essen szét az appunk.
        };
       
    };
    /**
     * 
     * @param {UpdateCallback} parameter 
     */
    setUpdateCallback(parameter){ //definiáltuk a setUpdateCallback függvényt, amelynek egy paramétere van, aminek a típusa a korábban definiált callback típusunk(UpdateCallback)
        this.#updateCallback = parameter; // megadtuk a most létrehozott függvény paraméterét értékként a második privát tulajdonságunknak(updateCallback)
        this.#updateCallback(this.#array);//az updateCallback privát tulajdonságunkat, pedig itt függvényként használtuk, aminek paraméterként, átadtuk a tömb privát tulajdonságunk, ha módosult természetesen
    }

    /**
     * 
     * @param {Person} Person 
     */
    add(Person){//létrehoztam egy add függvényt, amelynek egy paramétere van(Person), és a típusa is egy Person(korábban definiáltuk)
        this.#array.push(Person);//hozzáadjuk a tömb privát paraméterünkhöz, a push-al a bemeneti paraméterünket, ami a Person(Person típusú) 

        this.#updateCallback(this.#array);//meghívtuk a privát tulajdonságunkat,(függvényként) amely tartalmazza a definiált callback függvényünket, és megadtuk neki a privát tömbünket
    }

/**
 * 
 * @param {Number} bemeneti_eletkor 
 */
    filterAge(bemeneti_eletkor){//definiáltam a filterAge függvényt, amelynek egy paramétere van a bemeneti_eletkor,(Number)
        const result_ages = [];//Definiáltam egy üres tömböt,amibe a függvényben történő vizsgálat utáni helyes értékeket teszem 

        for(let i = 0; i < this.#array.length; i++){// végig iterálok a privát tömbünkön egy növekményes ciklussal
            if(this.#array[i].eletkor === bemeneti_eletkor){//Vizgálom, hogy a tömbünk aktuális elemének életkor tulajdonsága megegyezik-e a bemeneti paraméterrel
                result_ages.push(this.#array[i]); //ha megegyezik, a push segítségével belerakjuk a tömbünk atuális elemét a függvény első sorában létrehozott tömbbe
            }
        }
        this.#updateCallback(result_ages);//meghívtuk a privát tulajdonságunkat,(függvényként) amely tartalmazza a definiált callback függvényünket, és megadtuk neki a tömbünket, amely a jó objektumokat tartalmazza
    }

    /**
     * 
     * @param {String} bemeneti_nev 
    */
        filterName(bemeneti_nev){//Létrehoztam a filterName függvényt, amelynek egy bemeneti paramétere van(String)
            const result_names = [];//Ismét létrehoztam egy tömböt, amelybe majd a cikluson belül történő vizsgálat helyes eredményei kerülnek bele
                for(let i = 0; i < this.#array.length; i++){//végig iterálok a tömb tulajdonságunkon egy növekményes ciklus segítségével
                    if(this.#array[i].nev.includes(bemeneti_nev)){// az elágazásban vizsgáljuk, hogy a tömbünk aktuális elemének nev tulajdonsága tartalmazza e a bemeneti paraméterünk valamely karakterét, vagy az egészét a String.includes függvény segítségével
                        result_names.push(this.#array[i]); //ha igen akkor a tömbünk aktuális elemét a push segítségével belerakjuk a filterName függvény első sorában létrehozott result_names tömbünkbe
                    }
           
                }
        
            this.#updateCallback(result_names);//meghívtuk a privát tulajdonságunkat,(függvényként) amely tartalmazza a definiált callback függvényünket, és megadtuk neki a tömbünket, amely a jó objektumokat tartalmazza
        }

        /**
         * @param {function(Person):boolean} bemeneti_par 
         */
        filter(bemeneti_par){
            const result_ages = [];//Definiáltam egy üres tömböt,amibe a függvényben történő vizsgálat utáni helyes értékeket teszem 

            for(let i = 0; i < this.#array.length; i++){// végig iterálok a privát tömbünkön egy növekményes ciklussal
                if(bemeneti_par(this.#array[i])){//Vizgálom, hogy a tömbünk aktuális elemének életkor tulajdonsága megegyezik-e a bemeneti paraméterrel
                    result_ages.push(this.#array[i]); //ha megegyezik, a push segítségével belerakjuk a tömbünk atuális elemét a függvény első sorában létrehozott tömbbe
                }
            }
            this.#updateCallback(result_ages);//meghívtuk a privát tulajdonságunkat,(függvényként) amely tartalmazza a definiált callback függvényünket, és megadtuk neki a tömbünket, amely a jó objektumokat tartalmazza
        }

        orderByName(){
            const result_ = [];
            for(const ember of this.#array){
                result_.push(ember);
            }
            for(let i = 0; i < result_.length; i++){
                for(let j = i + 1; j < result_.length; j++){
                    if(result_[i].nev < result_[j].nev){
                        const temp = result_[i];
                        result_[i] = result_[j];
                        result_[j] = temp;
                    }
                }
            }
        }
}
class Data_Table{//definiáltam a Data_Table osztályt
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody;//deklaráltam egy tbody nevű privát változót, amelynek megadtam a típusát(HTMLTableSectionElement)
    /**
     * 
     * @param {Data_Manager} datamanager 
     */
    constructor(datamanager){//létrehoztam a Data_Table osztály konstruktorát, amelynek egy paraméterje van a datamanager amelynek típusa megegyezik az előző osztályunkéval
        const table = document.createElement(`table`); //Létrehoztam egy table HTMLElementet
        document.body.appendChild(table);//Hozzáfűztem a HTML oldalamhoz a table HTMLElementet

        const tbody = document.createElement(`tbody`); //Létrehozok egy tbody HTMLElementet
        table.appendChild(tbody);//Hozzáfűzöm a most létrehozott tbody elemet a table HTMLElementhez
        this.#tbody = tbody;// a létrehozott tbody privát tulajdonságomnak értékül adom, a  most létrehozott tbody HTMLElementet

        datamanager.setUpdateCallback((emberek) => {//meghívtuk a bemeneti paraméterünk setUpdateCallback függvényét, amelynek paraméterként megadtunk egy üres arrow függvényt, amelynek megadtuk paraméterként az emberek tömböt, amely Person típusú objektumokat tárol 
            this.#renderTable(emberek); //meghívtuk a renderTable privát függvényt, amelynek megadtuk paraméterként az emberek tömböt, amely az arrow function paraméterei közül érkezett(Person)
        });
    }

    /**
     * 
     * @param {Person} emberes_tomb 
     */

    #renderTable(emberes_tomb){//deklaráltam a renderTable privát függvényt, amelynek egy paramétere van amely a Person típusú objektumokat tároló emberes_tomb
        this.#tbody.innerHTML = ``; //a deklarált privát tulajdonság(HTMLELement) innerHTML függvényének megadom értékül az üres stringet
        for(const ember of emberes_tomb){//végigiterálok a paraméterként kapott tömbön egy for of ciklussal
            const row = document.createElement(`tr`); //létrehozok egy tr elemet(HTMLELement)
            this.#tbody.appendChild(row);//hozzáfűzöm a tbody privát tulajdonsághoz, a most létrehozott tr elemet

            const cella1 = document.createElement(`td`);//Létrehozok egy td elemet(HTMLElement)
            row.appendChild(cella1);//Hozzáfűzöm a tr elemhez a most létrehozott td cellát
            cella1.innerHTML = ember.nev;//a most létrehozott td elem innerHTML tulajdonságának értékül adom az aktuális elem nev tulajdonságát

            const cella2 = document.createElement(`td`);//létrehozok megint egy td elemet(HTMLElement)
            row.appendChild(cella2);//Hozzáfűzöm a második létrehozott td elemet a sorhoz, ami a tr-t jelenti
            cella2.innerHTML = ember.eletkor;// a cella (td) innerHTML tulajdonságának értékül adom az aktuális elem eletkor tulajdonságát

        }
    }
};

const adat_manager = new Data_Manager([{nev: `Feri`, eletkor: 17},
    {nev: `Géza`, eletkor: 17},
    {nev: `Józsi`, eletkor: 16}]);//Példányosítottam a Data_Manager osztályt, amelynek megadtam paraméterként egy névnélküli tömböt, amely Person objektumokat tartalmaz,hármat.


const adat_table = new Data_Table(adat_manager); //Példányosítottam a Data_Table osztályunkat, amelynek paraméterül megadom a korábban példányosított Data_Manager osztályt tartalmazó változó nevét

//+
const nev_label = document.createElement(`label`);//Létrehozok egy labelt(HTMLElement)
nev_label.innerText = `Név: `;// A label elem Innertext tulajdonságának értékül stringet adok 
document.body.appendChild(nev_label);//hozzáfűzöm a HTML fájlhoz, a létrehozott labelt


//11. pont
const input_1 = document.createElement(`input`);//létrehozok egy input elemet(HTMLElement)
document.body.appendChild(input_1);//hozzáfűzöm a HTML dokumentumhoz az input elemet
const kor_label = document.createElement(`label`);//létrehozok egy label elemet megint(HTMLElement)
kor_label.innerText = `Kor: `; //a label innerText tulajdonságának megadom a stringet
document.body.appendChild(kor_label);//a most létrehozott label elemet, hozzáfűzöm a HTML dokumentumhoz
const input_2 = document.createElement(`input`);//létrehozok még egy input elemet(HTMLElement)
document.body.appendChild(input_2);// a második input elemet hozzáfűzzük a HTML dokumentumhoz





input_1.addEventListener(`input`, (e) =>{//létrehozok az elsőként létrehozott input elemnek, egy addEventListenert, amely az input eseményre hallgat, ha bekövetkezik
 
    adat_manager.filter(input_1.value); //meghívjuk a Data_Manager osztályunk példányának a filterName függvényét, amelynek paraméterként átadom az első input értékét

});

input_2.addEventListener(`input`, (e) =>{//létrehozok a másodiként létrehozott input elemnek, egy addEventListenert, amely az input eseményre hallgat, ha bekövetkezik
    
    const keresett_szam = Number(input_2.value);//egy változóban eltároljuk, a Number() függvény segítségével átkonvertált második input értékét
    adat_manager.filter((pers) => {
        return pers.eletkor === keresett_szam;
    });//meghívjuk a Data_Manager osztályunk példányának a filterName függvényét, amelynek paraméterként átadom a változót, amelyben a második input átkonvertált értékét tároltam
});

const input_3 = document.createElement(`input`);

document.body.appendChild(input_3);
input_3.type = `file`;

input_3.addEventListener(`change`, (e) => {
   const our_file =  e.target.files[0];
   const fileolvaso = new FileReader();
   fileolvaso.readAsText(our_file);

   fileolvaso.onload = (e) => {
      const filecontent = fileolvaso.result;
      console.log(filecontent);
       const splitted_names = filecontent.split('\n');
       console.log(splitted_names);

       for(const ember of splitted_names){
         const lespilttelt_tomb = ember.split(';');
         const pers = {
            nev: lespilttelt_tomb[0],
            eletkor: Number(lespilttelt_tomb[1])
         };
         adat_manager.add(pers);
       };
       
   };

})
