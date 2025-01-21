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

        this.#status[index] = element;

        Object.defineProperty(this, index, {
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
}