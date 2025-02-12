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
         * @param {function(Person):boolean} bemeneti_par 
         */
        filter(bemeneti_par){
            const result_ages = [];//Definiáltam egy üres tömböt,amibe a függvényben történő vizsgálat utáni helyes értékeket teszem 

            for(let i = 0; i < this.#array.length; i++){// végig iterálok a privát tömbünkön egy növekményes ciklussal
                if(bemeneti_par(this.#array[i])){//meghívom a bemeneti paraméter callback függvényemet, a privát tömböm egy elemével
                    result_ages.push(this.#array[i]); //ha az elágazás igaz,akkor a push segítségével belerakjuk a tömbünk atuális elemét a függvény első sorában létrehozott tömbbe
                }
            }
            this.#updateCallback(result_ages);//meghívtuk a privát tulajdonságunkat,(függvényként) amely tartalmazza a definiált callback függvényünket, és megadtuk neki a tömbünket, amely a jó objektumokat tartalmazza
        }

        /**
         * 
         * @param {function (Person, Person):boolean} bemeneti_callback
         * 
         */
        order(bemeneti_callback){//definiáltam egy order függvényt, amelynek egy paramétere van egy függvény, ami callback típusú függvény, aminek kettő Person típusú paramétere van és egy boolean műveletet végez 
            const result_ordering = [];//egy tömböt deklarálok, amit a result_ordering változóba teszek
            for(const people of this.#array){//egy for of ciklussal bejártuk a privát tömbünket
                result_ordering.push(people);// a korábban deklarált tömbbe beleteszem a privát tömböm egyes elemeit(feltöltöm értékekkel)
            }
            for(let i = 0; i < result_ordering.length; i++){//végigiterálok a függvény első sorában létrehozott tömbön egy növekményes ciklussal
                for(let j = i + 1; j < result_ordering.length; j++){//végigiterálok, a tömbön egy növekményes ciklussal csak az i+1. elem említésével
                    if(bemeneti_callback(result_ordering[i], result_ordering[j])){//az elágazásban meghívom, a paraméterben megadott callback függvényt, a tömböm i-edik és i+1-dik elemével
                        const temp_2 = result_ordering[i];//a temp_2 változónak megadom a tömböm i-edik elemét
                        result_ordering[i] = result_ordering[j];//a tömböm i-edik elemének értékül adom a tömböm j. elemét
                        result_ordering[j] = temp_2;//a tömböm j-edik elemének megadom értékül a temp_2 tulajdonságot
                    }
                }
            }

            this.#updateCallback(result_ordering);//meghívtuk ismét az updateCallback privát tulajdonságunkat függvényként, és átadtuk neki paraméterként a függvényben használt tömbünket
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

        const thead = document.createElement(`thead`);//deklaráltam egy thead elemet(HTMLTableSection)
        table.appendChild(thead);//hozzáfűztem a táblázatomhoz
        const tr = document.createElement(`tr`);//létrehoztam egy tr elemet(HTMLElement)
        thead.appendChild(tr);//hozzáfűztem a korábban létrehozott thead elemhez a tr-t
        const th_nev = document.createElement(`th`);//deklaráltam egy th cella elemet(HTMLElement) a névnek
        const th_eletkor = document.createElement(`th`);//deklaráltam egy th cella elemet az életkornak(HTMLElement)
        tr.appendChild(th_nev);//hozzáfűztem a tr sorhoz, a névnek létrehozott th cella elemet
        tr.appendChild(th_eletkor);//hozzáfűztem a sorhoz, az életkornak létrehozott th cella elemet is 
        th_nev.innerHTML = `Név`;//a névnek létrehozott th elem innerHTML tulajdonságának megadtam egy stringet
        th_eletkor.innerHTML = `Életkor`;// az életkornak létrehozott th elem innerHTMl tulajdonságának megadtam egy stringet megint
        th_nev.addEventListener(`click`, (e) => {//a th_nev-nek meghívtam az addeventListenerjét a click eseményre, az addeventlistenerben,lévő kódrészlet csak akkor fut le, ha a click esemény megvalósul
            datamanager.order((person1, person2) => {//meghívom a Data_Manager osztály order függvényét, amelynek a bemeneti paramétere is egy függvény(callback/arrow function), a callback függvénynek 2 paramétere van(2 person típusú), ez a callback függvény, visszatér a két paraméter(Person típusú objektum) név tulajdonságának(String) vizsgálatának eredményével 
                return person1.nev.localeCompare(person2.nev);
            });
        });
        th_eletkor.addEventListener(`click`, (e) => {// a th_eletkornak is meghívtam az addeventListenerjét a click eseményre, itt is csak akkor fut le az addeventlistener-en belüli kódrészlet, ha a click esemény megtörténik
            datamanager.order((ember1, ember2) => {//ismét meghívom a Data_Manager osztályunk order függvényét, amelynek még mindig a paramétere egy callback (függvény/arrow function) amelynek van 2 paramétere és ebben az esetben,visszatérünk a két bemeneti paraméter(Person típusú objektumok) eletkor tulajdonságának vizsgálatának eredményével
                return ember1.eletkor < ember2.eletkor;
            });
        })
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
 
    adat_manager.filter((pers) => {//meghívom az adat_manager példányunk általános filter függvényét, amelynek a bemeneti paramétere is egy függvény(callback) és az arrow functionben(átadott paraméter) vizsgálom, hogy a callbackben paraméterként átadott Person típusú objektum név tulajdonságának és az input_1 értékének összevetésével, annak eredményével térünk vissza
        return pers.nev.includes(input_1.value);
    }); 

});

input_2.addEventListener(`input`, (e) =>{//létrehozok a másodiként létrehozott input elemnek, egy addEventListenert, amely az input eseményre hallgat, ha bekövetkezik
    
    const keresett_szam = Number(input_2.value);//egy változóban eltároljuk, a Number() függvény segítségével átkonvertált második input értékét
    adat_manager.filter((pers) => {//ismét meghívjuk az általános filter függvényt,amelynek a paramétere ismét függvény(callback), és callback függvényünk is vár ugye egy paramétert, ami egy Person típusú tömb, és ennek egy objektumának az eletkor tulajdonságát vizsgáljuk,hogy megegyezik-e a keresett_számunkkal, és visszatérünk ennek a vizsgálatnak az eredményével 
        return pers.eletkor === keresett_szam;
    });
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
