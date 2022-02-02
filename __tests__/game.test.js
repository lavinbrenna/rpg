/* eslint-disable no-undef */
import {Game, Player, Enemy} from './../src/js/game.js';

describe('Game', () => {

  let enemy, game, player;

  beforeEach(() => {
    enemy = new Enemy();
    game = new Game();
    player = new Player();
  });

  it('should create an empty game object', () =>{
    expect(game.players).toEqual({});
    expect(game.enemies).toEqual({});
  });
  it('should create player in game object', () =>{
    expect(game.createPlayer()).toEqual(player);
  });
  it('should create enemy in game object', () =>{
    expect(game.createEnemy()).toEqual(enemy);
  });
  it('should assign playerId, playerId = 1', () =>{
    expect(game.assignPlayerId()).toEqual(1);
  });
  it('should assign enemyId, enemyId = 1', () =>{
    expect(game.assignEnemyId()).toEqual(1);
  });
  it('should add player to players', () =>{
    game.addPlayer(player);
    expect(game.players[1]).toEqual(player);
  });
  it('should add enemy to enemies', () =>{
    game.addEnemy(enemy);
    expect(game.enemies[1]).toEqual(enemy);
  });
});