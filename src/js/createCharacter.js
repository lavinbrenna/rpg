import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Game, Player } from "./game.js";

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

$("form#createPlayerForm").on('submit', function (event) {
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
    $("#scold").text("Hey scumbag, you tryna' pull one over on me? You want some jobs or not?");
  } else if ((isNaN(playerIntelligence) || isNaN(playerReflex) || isNaN(playerTech) || isNaN(playerCool) ||
      isNaN(playerLuck) || isNaN(playerAttractiveness) || isNaN(playerEmp)) || (name === "") || (selectedClass === "default")) {
    $("#scold").text(" I ain't got time for games kid. Don't come cryin' to me if you wake up on some Ripper Doc's table gettin' yer mods yanked out.");
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