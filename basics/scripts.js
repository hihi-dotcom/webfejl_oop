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


function Person(name, school) {
    this.name = name;
    this.school = school;

};



function Student(name,school) {
  
    Person.call(this, name, school)
};

function getName(Student
){
    console.log(Student.name + Student.school);
};


const ember = new Person(`Géza `, `BME`);

getName(ember);
Object.setPrototypeOf(Student.prototype, Person.prototype);

