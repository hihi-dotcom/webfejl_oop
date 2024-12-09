/*class Player {
    constructor(nickname) {
        this.nickname = nickname;
        this.playedMatch = 0;
    }
};


Player.prototype.play = function(){
    this.playedMatch++;
    console.log(this.nickname  + ` played ` + this.playedMatch  +  ` matches.`);
};


Player.prototype.getTierLevel = function(){

    if(this.playedMatch <= 3){
        return `A`;
    }
    else if(this.playedMatch <= 6){
        return `B`;
    }
    else{
        return `C`;
    }
};
*/
/**
 * 
 * @param {Object} Player 
 */
/*
function printTierLevel(Player){

 console.log(Player.nickname + ` is in the ` + Player.getTierLevel() + ` tier.`);
};

const player = new Player(`Dzsudzsi`);
player.play();
printTierLevel(player);

*/
/*
function Person(name) {
    this.name = name;


};
function Student(name,school) {
   Person.call(this, name);
    this.school = school;   
};
Object.setPrototypeOf(Student.prototype, Person.prototype);
const tanulo = new Student("Géza","Bolyai");
console.log(tanulo.name, tanulo.school);
*/
/*
class Person{
    constructor(name){
        this.name = name;
    }
}

class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school;
    }
}

const classmate = new Student(`Géza`, `Bolyai`);
console.log(classmate.name, classmate.school);
*/

class Animal{
    constructor(name, voice){
        this.name = name;
        this.voice = voice;
    };

    hang(){
        console.log(`A/Az ` + this.name +` ilyen hangot ad ki: ` + this.voice);
    };
};

class Bird extends Animal{
    constructor(name, voice){
        super(name, voice);
    };

    fly(){
        console.log(`A/Az ` + this.name + ` éppen repül.`);
    };
};

class Mammal extends Animal{
    constructor(name, voice){
        super(name, voice);
    };
  

    walk(){
        console.log(`A/Az ` + this.name + ` épp sétál.`);
    };
}

const allat = new Bird(`Búbos Banka`, 'csiripel');
 
const emlos = new Mammal(`Elefánt`, `orrhangokat`);


allat.fly();
allat.hang();
emlos.walk();
emlos.hang();