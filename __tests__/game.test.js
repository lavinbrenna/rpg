/* eslint-disable no-undef */
import Game from './../src/js/game.js';

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should create an empty game object', () =>{
    expect(game.players).toEqual({});
    expect(game.enemies).toEqual({});
  });
});