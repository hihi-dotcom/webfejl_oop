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


function Person() {
    this.name = `Géza`;
};


function getName(Person){
    console.log(Person.name);
};

function Student(school) {
    this.name = `Géza`;
    this.school = school;
};
Object.setPrototypeOf(Person, Student);

const student = new Student(`Bolyai`);
getName(student);