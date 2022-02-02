/* eslint-disable no-undef */
import Player from '../src/js/player.js';

describe('Player', () => {

  let player;

  beforeEach(() => {
    player = new Player();
  });
  test('should create an empty player object', () =>{
    expect(player.health).toEqual(100);
    expect(player.atkDmg).toEqual(20);
    expect(player.inventory).toEqual({});
  });
});