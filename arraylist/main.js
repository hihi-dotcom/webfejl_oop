class ArrayList{
    #length_of_elements;
    #status;
    
    constructor(){
        this.#status = {};
        this.#length_of_elements = 0;
    }

    get Count(){
        return this.#length_of_elements;
    }

    Add(element){
        const lengths = this.#length_of_elements;
        this.#status[lengths] = element; 
        Object.defineProperty(this, lengths,  {
            get: function(){
                return this.#status[lengths];
            },
            set: function(uj_ertek){
                this.#status[lengths] = uj_ertek;
            },
            
            enumerable: true,
            configurable: true
        });
        this.#length_of_elements++;
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
