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


addPlayer(player){
  player.id = this.assignPlayerId();
  this.players[player.id] = player;
}



*/

// addPlayer(){
//   let player = new Player;
//   this.players.firstPlayer = player;
// }

/*
TODO:
switch enemy once first enemy hp goes down to zero

TODO:
fix enemy turn timeout method

TODO:
style game

TODO:
create an array of enemies that are a mix of human and aliens, determine line of questioning.

*/