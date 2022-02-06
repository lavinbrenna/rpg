import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import {Game} from './game.js';


$("#randomize").on('click', function () {
  $("#playerSelectScreen").hide();
  $("#randomizePlayerScreen,").show();
  $("#randomizePlayerScreen, #randomCharacterDescription, #randoStats").show();
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
  $("#randomCharacterDescription").show();
  $(`#${player.characterType.toLowerCase()}`).show();
});