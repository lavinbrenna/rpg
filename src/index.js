import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Game, Player, Enemy} from './js/game.js';

let game = new Game();
let player = new Player();
let enemy = new Enemy();

game.addPlayer(player);
game.addEnemy(enemy);
//game.startGame();


$("button#basicAttack").on('click', function(){
  game.players[player.id].basicAttack();
  game.playerTurn();
  console.log("basic");
  $("#playerHp").text(game.players[player.id].health); 
  game.enemyTurn();
  setTimeout(function() {
    $("#playerHp").text(game.players[player.id].health); // yay this sorta works
  }, 5000);
  $('#attack').text(game.players[player.id].atkDmg);
  $('#enemyHp').text(game.enemies[enemy.id].health);
// setTimeout((game.enemyTurn) => {
//   c
// }, 500);
});

$("button#specialAttack").on('click',function(){
  game.players[player.id].specialAttack();
  game.playerTurn();
  console.log("special");
  $("#playerHp").text(game.players[player.id].health); 
  game.enemyTurn();
  setTimeout(function() {
    $("#playerHp").text(game.players[player.id].health); // yay this sorta works
  }, 5000);
  $('#attack').text(game.players[player.id].atkDmg);
  $('#enemyHp').text(game.enemies[enemy.id].health);
});
$("button#block").on('click',function(){
  game.players[player.id].block();
  game.playerTurn();
  console.log("block");
  $("#playerHp").text(game.players[player.id].health); 
  game.enemyTurn();
  setTimeout(function() {
    $("#playerHp").text(game.players[player.id].health); // yay this sorta works
  }, 5000);
  $('#attack').text(game.players[player.id].atkDmg);
  $('#enemyHp').text(game.enemies[enemy.id].health);
});

