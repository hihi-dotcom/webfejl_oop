/**
 * @typedef {{nev: String, eletkor: Number}} Person
 * @callback UpdateCallback
 * @param {Person[]} persons 
 * @returns {void}
 */

class Data_Manager{
    /**
     * @type {Person[]}
     */
    #array 

    /**
     * @type {UpdateCallback}
     */
    #updateCallback

    /**
     * 
     * @param {Person[]} param1 
     */
    constructor(param1 = []){
        this.#array = param1;
        this.#updateCallback = () => {

        };
       
    };
    /**
     * 
     * @param {UpdateCallback} parameter 
     */
    setUpdateCallback(parameter){
        this.#updateCallback = parameter;
        this.#updateCallback(this.#array);
    }

    /**
     * 
     * @param {Person} Person 
     */
    add(Person){
        this.#array.push(Person);

        this.#updateCallback(this.#array);
    }

/**
 * 
 * @param {Number} bemeneti_eletkor 
 */
    filterAge(bemeneti_eletkor){
        const result_ages = [];

        for(let i = 0; i < this.#array.length; i++){
            if(this.#array[i].eletkor === bemeneti_eletkor){
                result_ages.push(this.#array[i]);
            }
        }
        this.#updateCallback(result_ages);
    }

    /**
     * 
     * @param {String} bemeneti_nev 
    */
        filterName(bemeneti_nev){
            const result_names = [];
                for(let i = 0; i < this.#array.length; i++){
                    if(this.#array[i].nev.includes(bemeneti_nev)){
                        result_names.push(this.#array[i]);
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

//11. pont
const input_1 = document.createElement(`input`);
document.body.appendChild(input_1);

const input_2 = document.createElement(`input`);
document.body.appendChild(input_2);


input_1.addEventListener(`input`, (e) =>{
 
    adat_manager.filterName(input_1.value);

});

input_2.addEventListener(`input`, (e) =>{
    
    const keresett_szam = Number(input_2.value);
    adat_manager.filterAge(keresett_szam);
});