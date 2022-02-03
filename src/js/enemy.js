export default class Enemy{
  constructor(health, atkDmg){
    this.health = health;
    this.atkDmg = atkDmg;
    this.inventory = [];
  }

  attack() {
    return "attack";
  }

  block(){
    return "block";
  }

  randomItem(){
    this.items = ['Bounce Back MK1', 'Augmented Reality Game Box', 'EMP Grenade', 'Steel-Toed Carbon Fiber Glitter Laceless Boots', 'Assault Rifle', 'Wire Scraps', 'Burnt Out Ram', 'Skill Shard: Street Brawler', 'Soy Paste', 'Broseph Ale', 'Holobites Grape Pie', 'Slaughterhouse Veggie Burger', 'Capacity Booster','Health Booster','Oni Mask','Corpo Blazer','Bulletproof Windbreaker','Classic Leather Pants','Satori Katana'];
    let num = Math.floor(Math.random() * 20)-1;
    this.inventory.push(this.items[num]);
    return this.items[num];
  }

}
/* basic enemy classes (pulled from a cyberpunk wiki):
merc (maybe balanced)
robot / mech(maybe sensitive to magic)
triggerman /assassin (maybe harder hitting but less hp)
blazer (magic user?)
netrunner -- tell me more
thug / street scrapper (steals inventory on some low proc?)
STREET SAMURAI?! HOW FREAKING COOL. BEST AT EVERYTHING.
juggernaut (immune to certain kinds of attacks, huge hp, ryan would toats be this one)
*/