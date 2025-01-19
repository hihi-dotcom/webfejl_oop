class ArrayList{
    #status;
    #length_of_elements;

    constructor(){
        this.#status = {};
        this.#length_of_elements = 0;
    }

    get Count(){
        return this.#length_of_elements;
    }
}