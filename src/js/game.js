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


Stretch goals -

add player block method, if this.players[1].block === true, enemy.atkDmg = 0

add enemy block method if this.enemies[1].block === true player.atkDmg = 0

add interval timer to enemy attack methods

add random dice roll which will choose between predetermined enemy attack/blocks

add ability options for player so they have multiple attack types

add initiative roll for player/enemy turn order

*/