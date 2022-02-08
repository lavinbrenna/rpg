export default class Enemy{
  constructor(enemyType, health, atkDmg){
    this.enemyType = enemyType;
    this.health = health;
    this.atkDmg = atkDmg;
  }

  attack() {
    return "attack";
  }

  block(){
    return "block";
  }

}