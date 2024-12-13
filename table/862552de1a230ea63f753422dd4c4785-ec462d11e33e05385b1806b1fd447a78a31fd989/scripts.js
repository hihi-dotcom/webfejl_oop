const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
];

class Person{
    
    constructor(person){
        this.firstname1 = person.firstname1;
        this.firstname2 = person.firstname2;
        this.lastname = person.lastname;
    }

render(parentElement){
    const sor1 = document.createElement(`tr`);
    parentElement.appendChild(sor1);
    



    const elem3  = document.createElement(`td`);
    sor1.appendChild(elem3);
    elem3.innerHTML  = this.lastname;
    
    const elem1  = document.createElement(`td`);
    sor1.appendChild(elem1);
    elem1.innerHTML  = this.firstname1;

    if(this.firstname2 !== undefined){
        const elem2  = document.createElement(`td`);
        sor1.appendChild(elem2);
        elem2.innerHTML  = this.firstname2;
       
    }
    else if(this.firstname2 === undefined){
        elem1.colSpan = 2;
    }

}
};

function init(){
  const ttestid = document.getElementById(`tbodyId`);
    for(const person of array){
        const EmberObj = new Person(person);
        EmberObj.render(ttestid);
    }
};

init();