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

        this.#length_of_elements++;
    };
    Clear(){
        this.#status = {};
        this.#length_of_elements = 0;
    };
};

const tomblista = new ArrayList();

const elsoobj = {name: "Paradicsom"};
const masodikobj = {sorszam: 2};
tomblista.Add(elsoobj);
tomblista.Add(masodikobj);
console.log(tomblista);
console.log(tomblista[2]);
