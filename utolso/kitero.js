class Person{//definiáljuk a Person osztályt
    
    /**
     * @type {string}
     */
    #name;
    /**
     * @type {string}
    */
    #birthYear;
    /**
     * @type {string}
    */
    #mood; 

    //getter és setter a namenek
    get name(){
        return this.#name;
    };

    set name(value){
        this.#name = value;
    };

    //csak getter kell a birthYearnek
    get birthYear(){
        return this.#birthYear;
    };

    // setter a moodnak
    set mood(value){
        this.#mood = value;
    };

    /**
     * 
     * @param {string} name 
     * @param {string} birthYear 
     * @param {string} mood 
     */
    constructor(name, birthYear, mood){
        this.#name = name;
        this.#birthYear = birthYear;
        this.#mood = mood;
    };
    
};

//definiáljuk a PersonView osztályt
class PersonView{
    /**
     * @type {Person}
     */
    #person;

    /**
     * @type {HTMLSpanElement}
     */
    #span;

    //setter a spanunknak
    set footer(value){
        this.#span.textContent = value;
    };
    /**
     * 
     * @param {Person} person 
     */
    constructor(person){
        this.#person = person;

        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `${person.name}, ${person.birthYear}, `;

        const span = document.createElement("span");
        this.#span = span;
        document.body.appendChild(span);
    };
}

const pers = new Person("Lajos", "1995", "happy");//Példányosítjuk a Person osztályt
const persLatas = new PersonView(pers);//Példányosítjuk a PersonView osztályt

pers.mood = "happy";//beállítjuk a moodot a setterével
console.log(pers);//kilogoljuk a person moodját

const perSLatas = new PersonView(pers);//Példányosítjuk a PersonView osztályt megint
perSLatas.footer = "Lábléc";
