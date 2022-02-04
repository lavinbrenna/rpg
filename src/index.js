import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Game, Player, Enemy} from './js/game.js';

$("#startGame").on('click', function(){
  $("#startGameScreen").hide();
  console.log("click!");
  $("#createPlayerScreen").show();
  $("#characterDescription").hide();

});

$("#classType").on('click', function(){
  let classSelect = $("select#classType option:selected").val();
  if(classSelect === 'rockerBoy'){
    $("#characterDescription, #rockerBoy").show();
    $("#solo, #netrunner, #techie, #media, #cop, #corpo, #fixer, #nomad").hide();
  }else if(classSelect === 'solo'){
    $("#characterDescription, #solo").show();
    $("#rockerBoy, #netrunner, #techie, #media, #cop, #corpo, #fixer, #nomad").hide();
  }else if(classSelect === 'netrunner'){
    $("#characterDescription, #netrunner").show();
    $("#solo, #rockerBoy, #techie, #media, #cop, #corpo, #fixer, #nomad").hide();
  }else if(classSelect === 'techie'){
    $("#characterDescription, #techie").show();
    $("#solo, #netrunner, #rockerBoy, #media, #cop, #corpo, #fixer, #nomad").hide();
  }else if(classSelect === 'media'){
    $("#characterDescription, #media").show();
    $("#solo, #netrunner, #techie, #rockerBoy, #cop, #corpo, #fixer, #nomad").hide();
  }else if(classSelect === 'cop'){
    $("#characterDescription, #cop").show();
    $("#solo, #netrunner, #techie, #media, #rockerBoy, #corpo, #fixer, #nomad").hide();
  }else if(classSelect === 'corpo'){
    $("#characterDescription, #corpo").show();
    $("#solo, #netrunner, #techie, #media, #cop, #rockerBoy, #fixer, #nomad").hide();
  }else if(classSelect === 'fixer'){
    $("#characterDescription, #fixer").show();
    $("#solo, #netrunner, #techie, #media, #cop, #corpo, #rockerBoy, #nomad").hide();
  }else if(classSelect === 'nomad'){
    $("#characterDescription, #nomad").show();
    $("#solo, #netrunner, #techie, #media, #cop, #corpo, #fixer, #rockerBoy").hide();
  }else{
    $("#characterDescription, #rockerBoy, #solo, #netrunner, #techie, #media, #cop, #corpo, #fixer, #nomad").hide();
  }
});

$(".gameStart").on('click', function(){
  let game = new Game();
  let enemy = new Enemy();
  let player = savePlayerInfo();
  game.addPlayer(player);

  enemy.wrongRandomizeEnemy();
  //game.addPlayer(player);
  game.addEnemy(enemy);
  $("#createPlayerScreen").hide();
  $("#gameBox").show();
  $("#playerHp").text(game.players[player.id].health);
  $('#enemyHp').text(game.enemies[game.enemyId].health);
  $('#playersName').text(game.players[player.id].playerName);
  $('#characterClass').text(game.players[player.id].characterType);
  $('#enemyTypeBox').text(game.enemies[game.enemyId].enemyType);
  $('#enemyAttackBox').text(game.enemies[game.enemyId].atkDmg);
  $('#attack').text(game.players[player.id].atkDmg);
  $('#killCount').text(0);
  $("button#basicAttack").on('click', function(){
    game.players[player.id].basicAttack();
    game.playerTurn();
    console.log("basic");
    game.checkEnemy();
    $("#basicAttack").prop("disabled",true);
    $('#enemyTypeBox').text(game.enemies[game.enemyId].enemyType);
    $('#enemyAttackBox').text(game.enemies[game.enemyId].atkDmg);
    $("#playerHp").text(game.players[player.id].health); 
    game.enemyTurn();
    setTimeout(function() {
      $("#basicAttack").prop("disabled",false);
      $("#playerHp").text(game.players[player.id].health);
    }, 2000);
    $('#killCount').text(game.enemyId - 1);
    $('#attack').text(game.players[player.id].atkDmg);
    $('#enemyHp').text(game.enemies[game.enemyId].health);
  });
  $("#block").prop("disabled",true);
  $("#specialAttack").prop("disabled",true);
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
});

function savePlayerInfo(){
  const name = $("input#playerName").val();
  const selectedClass = $("select#classType option:selected").val();
  const intelligence = $("input#inputIntell").val();
  const reflex = $("input#inputRef").val();
  const tech = $("input#inputTech").val();
  const cool = $("input#inputCool").val();
  const luck = $("input#inputLuck").val();
  const attractiveness = $("input#inputAttract").val();
  const emp = $("input#inputEmpathy").val();
  let player = new Player(selectedClass, name, intelligence, reflex, tech, cool,luck, attractiveness, emp );
  console.log(player);
  return player;
}






