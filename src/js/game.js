import Player from './player.js';
import Enemy from './enemy.js';

export class Game {
  constructor(){
    this.players = {};
    this.enemies = {};
    this.playerId = 0;
    this.enemyId = 0;
  }

  assignPlayerId (){
    this.playerId +=1;
    return this.playerId;
  }

  assignEnemyId (){
    this.enemyId +=1;
    return this.enemyId;
  }
  addPlayer(player){
    player.id = this.assignPlayerId();
    this.players[player.id] = player;
  }

  generateCharacter(){
    let character = this.randomizeCharacterType();
    let intel = this.d10Roll();
    let reflex = this.d10Roll();
    let tech = this.d10Roll();
    let cool = this.d10Roll();
    let luck = this.d10Roll();
    let attractive = this.d10Roll();
    let empathy = this.d10Roll();
    let total = intel + reflex + tech + cool + luck + attractive + empathy;
    console.log(total);
    while(total > 65){
      intel,reflex, tech, cool, luck, attractive, empathy = this.d10Roll();
      if(total <= 65){
        let player = new Player(character,' ',intel, reflex, tech, cool, luck, attractive, empathy);
        return player;
      }
    }let player = new Player(character,' ',intel, reflex, tech, cool, luck, attractive, empathy);
    return player;
  }
  randomizeCharacterName(){

  }
  randomizeCharacterType(){
    let num =  Math.floor(Math.random()*9);
    let characterClasses = ['Rockerboy', 'Solo','Netrunner', 'Techie', 'Media', 'Cop', 'Corpo','Fixer', 'Nomad'];
    let character = characterClasses[num];
    return character;
  }
  
  d10Roll(){
    let num = Math.floor(Math.random()*10) + 1;
    return num;
  }
  // checkEnemy(){
  //   console.log(this.enemies[this.enemyId].health);
  //   if (this.enemies[this.enemyId].health <= 0){
  //     this.randomItem();
  //     console.log(this.players[this.playerId].inventory);
  //     let enemySpawn = new Enemy ();
  //     this.addEnemy(enemySpawn);
  //     this.wrongRandomizeEnemy();
  //     return enemySpawn;
  //   }
  // }

  randomizeEnemy(){
    let num = Math.floor(Math.random() * 8) + 1;
    if (num == 1){
      let enemy = new Enemy("Merc", 30, 10);
      return enemy;
    } else if (num == 2) {
      let enemy = new Enemy("Arasaka Triggerman", 20, 15);
      return enemy;
    } else if (num == 3) {
      let enemy = new Enemy("Militech Commando", 15, 10);
      return enemy;
    } else if (num == 4) {
      let enemy = new Enemy("Netrunner", 10, 9);
      return enemy;
    } else if (num == 5) {
      let enemy = new Enemy("Street Scrapper", 10, 5);
      return enemy;
    } else if (num == 6) {
      let enemy = new Enemy("Street Samurai", 15, 8);
      return enemy;
    } else if (num == 7) {
      let enemy = new Enemy("Wraith Marauder", 10, 8);
      return enemy;
    } else{
      let enemy = new Enemy ("Mech", 40, 7);
      return enemy;
    }
  }
  addEnemy(enemy){
    enemy.id = this.assignEnemyId();
    this.enemies[enemy.id] = enemy;
  }

  playerTurn(){
    this.enemies[this.enemyId].health -= this.players[this.playerId].atkDmg;
  }
  enemyTurn(){
    this.players[this.playerId].health -= this.enemies[this.enemyId].atkDmg;
  }

//   randomItem(){
//     this.items = ['Bounce Back MK1', 'Augmented Reality Game Box', 'EMP Grenade', 'Steel-Toed Carbon Fiber Glitter Laceless Boots', 'Assault Rifle', 'Wire Scraps', 'Burnt Out Ram', 'Skill Shard: Street Brawler', 'Soy Paste', 'Broseph Ale', 'Holobites Grape Pie', 'Slaughterhouse Veggie Burger', 'Capacity Booster','Health Booster','Oni Mask','Corpo Blazer','Bulletproof Windbreaker','Classic Leather Pants','Satori Katana'];
//     let num = Math.floor(Math.random() * 20) + 1;
//     this.players[this.playerId].inventory.push(this.items[num]);
//     console.log(this.players[this.playerId].inventory);
//   }
}

export {Player, Enemy};

/*

TODO:
switch enemy once first enemy hp goes down to zero, add enemy item to player inventory

TODO: 
create character generator, if user presses generate character, assign random d10 rolls to each attribute. Else start game.

TODO:
Create check enemy method
 randomizeEnemy(){
    let randomEnemies = [
      {"enemyType":"Merc",
        "health": 30,
        "atkDmg": 10
      },
      {
        "enemyType":"Mech",
        "health": 50,
        "atkDmg": 7
      },
      {
        "enemyType":"Arasaka TriggerMan",
        "health": 20,
        "atkDmg": 15
      },
      {
        "enemyType":"Militech Commando",
        "health": 15,
        "atkDmg": 10
      },
      {
        "enemyType":"Netrunner",
        "health": 10,
        "atkDmg": 9
      },
      {
        "enemyType":"Street Scrapper",
        "health": 10,
        "atkDmg": 5
      },
      {
        "enemyType":"Street Samurai",
        "health": 15,
        "atkDmg": 8
      },
      {
        "enemyType":"Wraith Marauder",
        "health": 10,
        "atkDmg": 8
      }
    ];
    let num = Math.floor(Math.random() * 8) + 1;
    console.log(randomEnemies[num]);
    return randomEnemies[num];
  }



*/