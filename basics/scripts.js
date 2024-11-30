function Player(nickname){
    this.nickname = nickname;
    this.playedMatch = 0;
};

Player.prototype.play = function(){
    this.playedMatch++;
    console.log(this.nickname `played` + this.playedMatch `matches`);
};

const player = new Player(`Haaland`);

Player.prototype.getTierLevel = function(){

    if(this.playedMatch)
};