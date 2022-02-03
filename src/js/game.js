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
  addEnemy(enemy){
    enemy.id = this.assignEnemyId();
    this.enemies[enemy.id] = enemy;
    // this.enemies[enemy.id].randomItem();
  }
  playerTurn(){
    this.enemies[1].health -= this.players[1].atkDmg;
  }
  enemyTurn(){
    this.players[1].health -= this.enemies[1].atkDmg;
  }
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

}
export {Player, Enemy};

/*

TODO:
switch enemy once first enemy hp goes down to zero, add enemy item to player inventory


TODO: 
create character generator, if user presses generate character, assign random d10 rolls to each attribute. Else start game.

TODO:
Create check enemy method
*/