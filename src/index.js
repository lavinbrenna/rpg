import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Game, Player} from './js/game.js';

$("#startGame").on('click', function () {
  $("#startGameScreen").hide();
  console.log("click!");
  $("#playerSelectScreen").show();
});

$("#create").on('click', function(){
  $("#playerSelectScreen").hide();
  $("#createPlayerScreen").show();
});

$("#classType").on('change', function () {
  let classSelect = $("select#classType option:selected").val();
  if (classSelect === 'rockerboy') {
    $("#characterDescription, #rockerboy").show();
    $("#solo, #netrunner, #techie, #media, #cop, #corpo, #fixer, #nomad").hide();
  } else if (classSelect === 'solo') {
    $("#characterDescription, #solo").show();
    $("#rockerboy, #netrunner, #techie, #media, #cop, #corpo, #fixer, #nomad").hide();
  } else if (classSelect === 'netrunner') {
    $("#characterDescription, #netrunner").show();
    $("#solo, #rockerboy, #techie, #media, #cop, #corpo, #fixer, #nomad").hide();
  } else if (classSelect === 'techie') {
    $("#characterDescription, #techie").show();
    $("#solo, #netrunner, #rockerboy, #media, #cop, #corpo, #fixer, #nomad").hide();
  } else if (classSelect === 'media') {
    $("#characterDescription, #media").show();
    $("#solo, #netrunner, #techie, #rockerboy, #cop, #corpo, #fixer, #nomad").hide();
  } else if (classSelect === 'cop') {
    $("#characterDescription, #cop").show();
    $("#solo, #netrunner, #techie, #media, #rockerboy, #corpo, #fixer, #nomad").hide();
  } else if (classSelect === 'corpo') {
    $("#characterDescription, #corpo").show();
    $("#solo, #netrunner, #techie, #media, #cop, #rockerboy, #fixer, #nomad").hide();
  } else if (classSelect === 'fixer') {
    $("#characterDescription, #fixer").show();
    $("#solo, #netrunner, #techie, #media, #cop, #corpo, #rockerboy, #nomad").hide();
  } else if (classSelect === 'nomad') {
    $("#characterDescription, #nomad").show();
    $("#solo, #netrunner, #techie, #media, #cop, #corpo, #fixer, #rockerboy").hide();
  } else {
    $("#characterDescription, #rockerboy, #solo, #netrunner, #techie, #media, #cop, #corpo, #fixer, #nomad").hide();
  }
});

$("#createStart").on('click', function (event) {
  event.preventDefault();
  const name = $("input#playerName").val();
  const selectedClass = $("select#classType option:selected").val();
  const playerIntelligence = parseInt($("input#inputIntell").val());
  const playerReflex = parseInt($("input#inputRef").val());
  const playerTech = parseInt($("input#inputTech").val());
  const playerCool = parseInt($("input#inputCool").val());
  const playerLuck = parseInt($("input#inputLuck").val());
  const playerAttractiveness = parseInt($("input#inputAttractive").val());
  const playerEmp = parseInt($("input#inputEmpathy").val());
  if ((playerIntelligence + playerReflex + playerTech + playerCool + playerLuck + playerAttractiveness + playerEmp) > 65) {
    alert("Hey scumbag, you tryna' pull one over on me? You want some jobs or not?");
  } else if ((isNaN(playerIntelligence) || isNaN(playerReflex) || isNaN(playerTech) || isNaN(playerCool) ||
      isNaN(playerLuck) || isNaN(playerAttractiveness) || isNaN(playerEmp)) || (name === "") || (selectedClass === "default")) {
    alert(" I ain't got time for games kid. Don't come cryin' to me if you wake up on some Ripper Doc's table gettin' yer mods yanked out.");
  } else {
    let player = new Player(selectedClass, name, playerIntelligence, playerReflex, playerTech, playerCool, playerLuck, playerAttractiveness, playerEmp);
    $("#createPlayerScreen").hide();
    $("#gameBox").show();
    let game = new Game();
    let enemy = game.randomizeEnemy();
    game.addPlayer(player);
    game.addEnemy(enemy);
    console.log(player);
  }
});

$("#randomize, #again").on('click', function(){
  $("#playerSelectScreen").hide();
  $("#randomizePlayerScreen, #randomCD, #randoStats").show();
  let game = new Game();
  let player = game.generateCharacter();
  console.log(player);
  $("#randoName").text(player.playerName);
  $("#randoClass").text(player.characterType);
  $("#randIntel").text(player.intel);
  $("#randReflex").text(player.reflex);
  $("#randTech").text(player.tech);
  $("#randCool").text(player.cool);
  $("#randLuck").text(player.luck);
  $("#randAttract").text(player.attractive);
  $("#randEmpathy").text(player.empathy);
  if(player.characterType.toLowerCase() === "rockerboy" ){
    $("#randCD, #randrockerboy").show();
    $("#randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "solo"){
    $("#randCD,#randsolo").show();
    $("#randrockerboy, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "netrunner"){
    $("#randCD, #randnetrunner").show();
    $("#randsolo, #randrockerboy, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "techie"){
    $("#randCD, #randtechie").show();
    $("#randsolo, #randnetrunner, #randrockerboy, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "media"){
    $("#randCD, #randmedia").show();
    $("#randsolo, #randnetrunner, #randtechie, #randrockerboy, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "cop"){
    $("#randCD,#randcop").show();
    $("#randrockerboy,#randsolo, #randnetrunner, #randtechie, #randmedia, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "corpo"){
    $("#randCD, #randcorpo").show();
    $("#randrockerboy, #randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "fixer"){
    $("#randCD, #randfixer").show();
    $("#randrockerboy, #randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "nomad"){
    $("#randCD, #randnomad").show();
    $("#randrockerboy,#randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer").hide();
  }else{
    $("#randCD, #randrockerboy,#randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }
});






// /*
// // $(".gameStart").on('click', function(){
// //   let game = new Game();
// //   let enemy = game.randomizeEnemy();
// //   let player = savePlayerInfo();
// //   game.addPlayer(player);
// // });

// //   enemy.wrongRandomizeEnemy();
// //   //game.addPlayer(player);
// //   game.addEnemy(enemy);
// //   $("#createPlayerScreen").hide();
// //   $("#gameBox").show();
// // $("#playerHp").text(game.players[player.id].health);
// // $('#enemyHp').text(game.enemies[game.enemyId].health);
// // $('#playersName').text(game.players[player.id].playerName);
// // $('#characterClass').text(game.players[player.id].characterType);
// // $('#enemyTypeBox').text(game.enemies[game.enemyId].enemyType);
// // $('#enemyAttackBox').text(game.enemies[game.enemyId].atkDmg);
// // $('#attack').text(game.players[player.id].atkDmg);
// // $('#playerInventory').text(game.players[player.id].inventory);
// // $('#killCount').text(0);
// // $("button#basicAttack").on('click', function(){
// //   game.players[player.id].basicAttack();
// //   game.playerTurn();
// //   console.log("basic");
// //   game.checkEnemy();
// //   $("#basicAttack").prop("disabled",true);
// //   $('#enemyTypeBox').text(game.enemies[game.enemyId].enemyType);
// //   $('#enemyAttackBox').text(game.enemies[game.enemyId].atkDmg);
// //   $("#playerHp").text(game.players[player.id].health); 
// //   game.enemyTurn();
// //   setTimeout(function() {
// //     $("#basicAttack").prop("disabled",false);
// //     $("#playerHp").text(game.players[player.id].health);
// //   }, 2000);
// //   $('#killCount').text(game.enemyId - 1);
// //   $('#attack').text(game.players[player.id].atkDmg);
// //   $('#enemyHp').text(game.enemies[game.enemyId].health);
// //   });
// //   $("#block").prop("disabled",true);
// //   $("#specialAttack").prop("disabled",true);
// //   $("button#specialAttack").on('click',function(){
// //     game.players[player.id].specialAttack();
// //     game.playerTurn();
// //     console.log("special");
// //     $("#playerHp").text(game.players[player.id].health); 
// //     game.enemyTurn();
// //     setTimeout(function() {
// //       $("#playerHp").text(game.players[player.id].health); // yay this sorta works
// //     }, 5000);
// //     $('#attack').text(game.players[player.id].atkDmg);
// //     $('#enemyHp').text(game.enemies[enemy.id].health);
// //   });
// //   $("button#block").on('click',function(){
// //     game.players[player.id].block();
// //     game.playerTurn();
// //     console.log("block");
// //     $("#playerHp").text(game.players[player.id].health); 
// //     game.enemyTurn();
// //     setTimeout(function() {
// //       $("#playerHp").text(game.players[player.id].health); // yay this sorta works
// //     }, 5000);
// //     $('#attack').text(game.players[player.id].atkDmg);
// //     $('#enemyHp').text(game.enemies[enemy.id].health);
// //   });
// // });
// */