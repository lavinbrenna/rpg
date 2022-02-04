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
  checkEnemy(){
    console.log(this.enemies[this.enemyId].health);
    if (this.enemies[this.enemyId].health <= 0){
      let enemySpawn = new Enemy ();
      this.addEnemy(enemySpawn);
      this.wrongRandomizeEnemy();
      return enemySpawn;
    }
  }
  wrongRandomizeEnemy(){
    let num = Math.floor(Math.random() * 8) + 1;
    if (num == 1){
      this.enemies[this.enemyId].enemyType = "Merc",
      this.enemies[this.enemyId].health = 30,
      this.enemies[this.enemyId].atkDmg = 10;
    } else if (num == 2) {
      this.enemies[this.enemyId].enemyType = "Arasaka TriggerMan",
      this.enemies[this.enemyId].health = 20;
      this.enemies[this.enemyId].atkDmg = 15;
    } else if (num == 3) {
      this.enemies[this.enemyId].enemyType = "Militech Commando",
      this.enemies[this.enemyId].health = 15;
      this.enemies[this.enemyId].atkDmg = 10;
    } else if (num == 4) {
      this.enemies[this.enemyId].enemyType = "Netrunner",
      this.enemies[this.enemyId].health = 10;
      this.enemies[this.enemyId].atkDmg = 9;
    } else if (num == 5) {
      this.enemies[this.enemyId].enemyType = "Street Scrapper",
      this.enemies[this.enemyId].health = 10;
      this.enemies[this.enemyId].atkDmg = 5;
    } else if (num == 6) {
      this.enemies[this.enemyId].enemyType = "Street Samurai",
      this.enemies[this.enemyId].health = 15;
      this.enemies[this.enemyId].atkDmg = 8;
    } else if (num == 7) {
      this.enemies[this.enemyId].enemyType = "Wraith Marauder",
      this.enemies[this.enemyId].health = 10;
      this.enemies[this.enemyId].atkDmg = 8;
    } else if (num == 8) {
      this.enemies[this.enemyId].enemyType = "Mech",
      this.enemies[this.enemyId].health = 50;
      this.enemies[this.enemyId].atkDmg = 7;
    } else {
      return;
    }
  }
  addEnemy(enemy){
    enemy.id = this.assignEnemyId();
    this.enemies[enemy.id] = enemy;
    // this.enemies[enemy.id].randomItem();
  }
  playerTurn(){
    this.enemies[this.enemyId].health -= this.players[this.playerId].atkDmg;
  }
  enemyTurn(){
    this.players[this.playerId].health -= this.enemies[this.enemyId].atkDmg;
  }
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