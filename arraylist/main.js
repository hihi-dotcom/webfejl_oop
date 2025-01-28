class ArrayList{
    #length_of_elements;
    #status;
    #tombtabla;
    
    constructor(bemenet){
        this.#status = {};
        this.#length_of_elements = 0;
       this.#tombtabla = bemenet;
    }
    get Count(){
        return this.#length_of_elements;
    }

    Add(element){
        const lengths = this.#length_of_elements;
        this.#status[lengths] = element; 
        Object.defineProperty(this, lengths,  {
            get:() => {
                return this.#status[lengths];
            },
            set:(uj_ertek) => {
                this.#status[lengths] = uj_ertek;
            },
            
            enumerable: true,
            configurable: true
        });
        this.#length_of_elements++;

        if( this.#tombtabla !== undefined){
            this.#tombtabla.AddPersonRow(element);
        }
    };
    Clear(){
        this.#status = {};
        this.#length_of_elements = 0;

        for(const kulcsok in this){
            delete this[kulcsok];
        }
    };
    
    Contains(vizsg){
        for(let i = 0; i < this.Count; i++){
            if(this.#status[i] == vizsg){
                return true;
            }
        }
        return false;
    };
};

const tomblista = new ArrayList();

const elsoobj = {name: "Paradicsom"};
const masodikobj = {sorszam: 2};
const harmadikobj = {name: "Uborka"};
const negyedikobj = {sorszam: 88};

elsoobj.name = "Lajos";

masodikobj.sorszam = 99;
tomblista.Add(elsoobj);
tomblista.Add(masodikobj);
tomblista.Add(harmadikobj);
tomblista.Add(negyedikobj);

console.log(tomblista.Contains(elsoobj));
console.log(tomblista.Contains(masodikobj));

tomblista.Clear();


console.log(tomblista);


class ArrayHTMLElement extends HTMLElement{
    #tbody
    constructor(){
        super();
    }
    connectedCallback(){
        const tablazat = document.createElement('table');
        this.appendChild(tablazat);

        const tablazatfej = document.createElement('thead');
        tablazat.appendChild(tablazatfej);

       this.#tbody = document.createElement('tbody');
        tablazat.appendChild(this.#tbody);
    }
    /**
     * 
     * @param {{nev: String, eletkor:Number}} param1 
     */
    AddPersonRow(param1){
        const tablazatsor = document.createElement('tr');
        this.#tbody.appendChild(tablazatsor);

        const nev1 = document.createElement('td');
        nev1.innerHTML = param1.nev;
        tablazatsor.appendChild(nev1);

        const eletkor1 = document.createElement('td');
        eletkor1.innerHTML = param1.eletkor;
        tablazatsor.appendChild(eletkor1);


    }
};
customElements.define("array-table", ArrayHTMLElement);

const tombhtml = new ArrayHTMLElement();
document.body.appendChild(tombhtml);
tombhtml.AddPersonRow({nev: "Szikora Bálint", eletkor: 18});


const ujtomblista = new ArrayList(tombhtml);//Ismét példányosítottam az ArrayList osztályomat, most ugyanakkor megadtam paraméterként a korábban léterhozott tombhtml példányt paraméterként
ujtomblista.Add({nev: `Czirják Ádám`, eletkor: 17});//Meghívtam az új ArrayList példányom Add függvényét, aminek megadtam paraméterül azt az objektumot, aminek van nev és eletkor tulajdonsága kitöltve

const nyomkodo_gomb = document.createElement(`button`); //létrehoztam egy gombot (HTMlElement)
document.body.appendChild(nyomkodo_gomb);//Hozzáfűztem a HTML fájlomhoz
nyomkodo_gomb.innerHTML = `Hozzáadás`;//A gomb innerHTMLjének megadtam a stringet

nyomkodo_gomb.addEventListener('click', (e) => {//definiálok egy eseménykezelőt a gombhoz, amely a click eseményre hallgat
    
    ujtomblista.Add({nev: `Lajos`, eletkor: 28});//Megint meghívom a második példányára az ArrayListnek az Add függvényt, amelynek megadok ismét egy objektumot paraméterként
})