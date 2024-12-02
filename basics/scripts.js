class Player {
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

/**
 * 
 * @param {Object} Player 
 */
function printTierLevel(Player){

 console.log(Player.nickname + ` is in the ` + Player.getTierLevel() + ` tier.`);
};

const player = new Player(`Dzsudzsi`);
player.play();
printTierLevel(player);


function Person(name) {
    this.name = name;
};

Person.prototype.getName = function(){
    console.log(this.name);
}
const ember = new Person("Géza");
function Student(name,school) {
   Person.call(this, name);
    this.school = school;   
};
Object.setPrototypeOf(Student.prototype, Person.prototype);
const tanulo = new Student("Géza","Bolyai");
console.log(tanulo.name, tanulo.school);
ember.getName();