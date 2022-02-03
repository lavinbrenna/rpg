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
    this.enemies[enemy.id].randomItem();
  }
  playerTurn(){
    this.enemies[1].health -= this.players[1].atkDmg;
  }
  enemyTurn(){
    this.players[1].health -= this.enemies[1].atkDmg;
  }


}
export {Player, Enemy};

/*

TODO:
switch enemy once first enemy hp goes down to zero, add enemy item to player inventory

TODO:
create an array of enemies

TODO: 
create character generator, if user presses generate character, assign random d10 rolls to each attribute. Else start game.

*/