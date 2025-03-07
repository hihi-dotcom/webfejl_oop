/**
 * Felel a form működéséért
 */
class FormController{
    /**
     * @type {FormField[]}
     */
    #formfieldArray;
    /**
     * @type {Manager}
     * 
     */
    #manager;

    /**
     * 
     * @param {Manager} manager 
     * @param {{id: string, label: string}[]} fieldConfiguration 
     */
    constructor(manager, fieldConfiguration){
       const form =  document.createElement("form");
       this.#formfieldArray = [];
       document.body.appendChild(form);
       this.#manager = manager;
       for(const config of fieldConfiguration){
            const formField = new FormField(config.id, config.label);
            this.#formfieldArray.push(formField);
            form.appendChild(formField.getFormField());
        }
        const button = document.createElement('button');
        button.textContent = 'Elküld';
        form.appendChild(button);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
           if(this.#validateAllFields()){
            const value = this.#getValueObject();
            console.log(value);
           }
            //ha valid a formfieldek értéke alapján létrehozzuk a questiont
            //hozzaadjuk a managerhez, majd reseteljuk

            
        });
    }
    /**
     * Validalja a fieldeket
     * 
     * @returns {boolean} igaz,ha a minden mező helyes, egyebkent hamis
     */
    #validateAllFields(){
        let valid = true;
        for(const field of this.#formfieldArray){
            field.error = '';
            if(field.value === ''){
                field.error = 'mezo kitoltese kotelezo';
                valid = false;
            }
        }
        return valid;
    };

    /**
     * 
     * @returns 
     */
    #getValueObject(){
        const result = {};
        for(const field of this.#formfieldArray){
            result[field.id] = field.value;
        }
        return result;
    }
};

class FormField{
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {HTMLabelElement}
     */
    #label;

    /**
     * @type {HTMLInputElement}
     */
    #input;

    /**
     * @type {HTMLSpanElement}
     */
    #errorfield;

    get id(){
        return this.#id;
    };

    /**
     * visszatér az input értékével
     */
    get value(){
        return this.#input.value;
    };

    /**
     * beállítja az error üzenetet
     * @param {string} value a megjeleníteni való üzenet
     */
    set error(value){
        this.#errorfield.textContent = value;
    };

    /**
     * 
     * @param {string} id azonosítja a formfield példányunkat
     * @param {string} labelContent a label szoveg 
     */
    constructor(id, labelContent){
        this.#id = id;
        this.#label = Gomszab.makeLabel(id, labelContent);
        this.#input = Gomszab.makeInput(id);
        this.#errorfield = Gomszab.makeErrorField();

    }
    
    /**
     * visszatér egy divvle, ami tartalmazza  a formFieldben létrehozott HTMLElementeket
     * @returns {HTMLDivElement}
     */
    getFormField(){
        const div = Gomszab.makeDiv([this.#label, this.#input, this.#errorfield]);
        return div;
    }
     
}