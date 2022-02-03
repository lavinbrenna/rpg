export default class Enemy{
  constructor(){
    this.wrongRandomizeEnemy();
    //this.inventory = [];
  }

  attack() {
    return "attack";
  }

  block(){
    return "block";
  }

  // randomItem(){
  //   this.items = ['Bounce Back MK1', 'Augmented Reality Game Box', 'EMP Grenade', 'Steel-Toed Carbon Fiber Glitter Laceless Boots', 'Assault Rifle', 'Wire Scraps', 'Burnt Out Ram', 'Skill Shard: Street Brawler', 'Soy Paste', 'Broseph Ale', 'Holobites Grape Pie', 'Slaughterhouse Veggie Burger', 'Capacity Booster','Health Booster','Oni Mask','Corpo Blazer','Bulletproof Windbreaker','Classic Leather Pants','Satori Katana'];
  //   let num = Math.floor(Math.random() * 20)-1;
  //   this.inventory.push(this.items[num]);
  //   return this.items[num];
  // }

  d20Roll(){
    let num = Math.floor(Math.random()*20) + 1;
    return num;
  }
  d10Roll(){
    let num = Math.floor(Math.random()*10) + 1;
    return num;
  }
  wrongRandomizeEnemy(){
    let num = Math.floor(Math.random() * 8) + 1;
    if (num == 1){
      this.enemyType = "Merc",
      this.health = 30,
      this.atkDmg = 10;
    } else if (num == 2) {
      this.enemyType = "Arasaka TriggerMan",
      this.health = 20;
      this.atkDmg = 15;
    } else if (num == 3) {
      this.enemyType = "Militech Commando",
      this.health = 15;
      this.atkDmg = 10;
    } else if (num == 4) {
      this.enemyType = "Netrunner",
      this.health = 10;
      this.atkDmg = 9;
    } else if (num == 5) {
      this.enemyType = "Street Scrapper",
      this.health = 10;
      this.atkDmg = 5;
    } else if (num == 6) {
      this.enemyType = "Street Samurai",
      this.health = 15;
      this.atkDmg = 8;
    } else if (num == 7) {
      this.enemyType = "Wraith Marauder",
      this.health = 10;
      this.atkDmg = 8;
    } else if (num == 7) {
      this.enemyType = "Mech",
      this.health = 50;
      this.atkDmg = 7;
    } else {
      return;
    }
  }
}