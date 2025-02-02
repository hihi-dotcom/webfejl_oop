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

        this.#updateCallback(this.#array);
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
        this.#updateCallback(result_ages);
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
        
            this.#updateCallback(result_names);
        }


}

class Data_Table{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody;
    /**
     * 
     * @param {Data_Manager} datamanager 
     */
    constructor(datamanager){
        const table = document.createElement(`table`);
        document.body.appendChild(table);

        const tbody = document.createElement(`tbody`);
        table.appendChild(tbody);
        this.#tbody = tbody;

        datamanager.setUpdateCallback((emberek) => {
            this.#renderTable(emberek);
        });
    }

    /**
     * 
     * @param {Person} emberes_tomb 
     */

    #renderTable(emberes_tomb){
        this.#tbody.innerHTML = ``;
        for(const ember of emberes_tomb){
            const row = document.createElement(`tr`);
            this.#tbody.appendChild(row);

            const cella1 = document.createElement(`td`);
            row.appendChild(cella1);
            cella1.innerHTML = ember.nev;

            const cella2 = document.createElement(`td`);
            row.appendChild(cella2);
            cella2.innerHTML = ember.eletkor;

        }
    }
};

const adat_manager = new Data_Manager([{nev: `Feri`, eletkor: 17},
    {nev: `Géza`, eletkor: 17},
    {nev: `Józsi`, eletkor: 16}]);


const adat_table = new Data_Table(adat_manager);

//+
const nev_label = document.createElement(`label`);
nev_label.innerText = `Név: `;
document.body.appendChild(nev_label);


//11. pont
const input_1 = document.createElement(`input`);
document.body.appendChild(input_1);
const breaking_html = document.createElement(`br`);
document.body.appendChild(breaking_html);

const kor_label = document.createElement(`label`);
kor_label.innerText = `Kor: `;
document.body.appendChild(kor_label);
const input_2 = document.createElement(`input`);
document.body.appendChild(input_2);



input_1.addEventListener(`input`, (e) =>{
 
    adat_manager.filterName(input_1.value);

});

input_2.addEventListener(`input`, (e) =>{
    
    const keresett_szam = Number(input_2.value);
    adat_manager.filterAge(keresett_szam);
});