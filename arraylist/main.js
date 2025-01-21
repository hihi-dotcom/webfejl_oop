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

        Object.defineProperty(this, lengths, {
            get: function(){
                return this.#status[index];
            }, 
            set: function(ertek){
                this.#status[index] = ertek;
            },
            enumerable: true,
        })

        this.#length_of_elements++;
    }

    Clear(){
        this.#status = {};
        this.#length_of_elements = 0;
       /* for(const kulcs in this){
            delete this[kulcs];
        }*/
    }
}

const tomblista = new ArrayList();

const elem1 = {name: `Paradicsom`};
const elem2 = {name: `Uborka`};

tomblista.Add(elem1);
tomblista.Add(elem2);

tomblista.Clear();

