export default class Player{
  constructor(){
    this.health = 100;
    this.inventory = {};
    this.atkDmg = 0;
  }

  basicAttack() {
    this.atkDmg = 10;
    return this.atkDmg;
  }

  specialAttack(){
    this.atkDmg = 30;
    return this.atkDmg;
  }
  block(){
    this.atkDmg = 0;
    return this.atkDmg;
  }

}

//player block method
