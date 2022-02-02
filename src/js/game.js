import Player from './player.js';
import Enemy from './enemy.js';

export class Game {
  constructor(){
    this.players = {};
    this.enemies = {};
    this.playerId = 0;
    this.enemyId = 0;
  }
  createPlayer(){
    let player = new Player();
    console.log(player);
    return player;
  }
  assignPlayerId (){
    this.playerId +=1;
    return this.playerId;
  }
  createEnemy(){
    let enemy = new Enemy();
    return enemy;
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