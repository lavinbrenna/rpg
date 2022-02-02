export default class Enemy{
  constructor(){
    this.health = 50;
    this.atkDmg = 7;
    this.inventory = {};
  }

  attack() {
    return "attack";
  }

  block(){
    return "block";
  }
}


//enemy block method

