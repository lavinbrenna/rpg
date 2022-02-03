export default class Player{
  constructor(characterType, playerName){
    this.health = 100;
    this.atkDmg = 0;
    this.characterType = characterType;
    this.playerName = playerName;
    // this.intel = intel;
    // this.reflex = reflex;
    // this.tech = tech;
    // this.cool = cool;
    // this.luck = luck;
    // this.attractive = attractive;
    // this.empathy = empathy;
    this.inventory = [];
  }

  generateCharacter(){
    this.intel = this.d10Roll();
    this.reflex = this.d10Roll();
    this.tech = this.d10Roll();
    this.cool = this.d10Roll();
    this.luck = this.d10Roll();
    this.attractive = this.d10Roll();
    this.empathy = this.d10Roll();
  }


  d10Roll(){
    let num = Math.floor(Math.random()*10) + 1;
    return num;
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
