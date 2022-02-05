export default class Player{
  constructor(characterType, playerName, intel, reflex, tech, cool, luck, attractive,empathy ){
    this.health = 100;
    this.atkDmg = 0;
    this.characterType = characterType;
    this.playerName = playerName;
    this.intel = intel;
    this.reflex = reflex;
    this.tech = tech;
    this.cool = cool;
    this.luck = luck;
    this.attractive = attractive;
    this.empathy = empathy;
    this.inventory = {};
  }

  generateCharacter(){
    this.characterType = this.randomizeCharacterType();
    this.intel = this.d10Roll();
    this.reflex = this.d10Roll();
    this.tech = this.d10Roll();
    this.cool = this.d10Roll();
    this.luck = this.d10Roll();
    this.attractive = this.d10Roll();
    this.empathy = this.d10Roll();
  }

  randomizeCharacterType(){
    let num =  Math.floor(Math.random()*9) + 1;
    let character = '';
    if(num === 1){
      character = "Rockerboy";
      return character;
    }else if(num === 2){
      character = "Solo";
      return character;
    }else if(num === 3){
      character = "Netrunner";
      return character;
    }else if(num === 4){
      character = "Techie";
      return character;
    }else if(num === 5){
      character = "Media";
      return character;
    }else if(num === 6){
      character = "Cop";
      return character;
    }else if(num === 7){
      character = "Corpo";
      return character;
    }else if(num === 8){
      character = "Fixer";
      return character;
    }
    else{
      character = "Nomad";
      return character;
    }
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

  randomizeItems(){
    let items = ['Bounce Back MK1', 'Augmented Reality Game Box', 'EMP Grenade', 'Steel-Toed Carbon Fiber Glitter Laceless Boots', 'Assault Rifle', 'Wire Scraps', 'Burnt Out Ram', 'Skill Shard: Street Brawler', 'Soy Paste', 'Broseph Ale', 'Holobites Grape Pie', 'Slaughterhouse Veggie Burger', 'Capacity Booster','Health Booster','Oni Mask','Corpo Blazer','Bulletproof Windbreaker','Classic Leather Pants','Satori Katana'];
    let num = Math.floor(Math.random() * 20)-1;
    this.inventory.push(items[num]);
    items.del[num];
  }
  //   useItem(){
  //     if((this.inventory[] === "Bounce Back MK1")|| (items[num] === "Soy Paste") || (items[num] === "Slaughterhouse Veggie Burger") || (items[num] === "Health Booster")){
  //       this.inventory.push(items[num]);
  //       items.del[num];
  //       this.health += 10;
  //     }else if((items[num] === 'EMP Grenade') || (items[num] === 'Assault Rifle') || (items [num] === 'Skill Shard: Street Brawler')){
  //       this.inventory.push(items[num]);
  //       items.del[num];
  //       this.atkDmg += 5;
  //     }else if(items [num] === 'Satori Katana'){
  //       this.inventory.push(items[num]);
  //       items.del[num];
  //       this.atkDmg += 10;
  //     }
  //     else{
  //       items.del[num];
  //       this.inventory.push(items[num]);
  //     }
  //   }
  // 
}
