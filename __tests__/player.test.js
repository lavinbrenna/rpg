/* eslint-disable no-undef */
import Player from '../src/js/player.js';

describe('Player', () => {

  let player;

  beforeEach(() => {
    player = new Player();
  });
  it('should create an empty player object', () =>{
    expect(player.health).toEqual(100);
    expect(player.atkDmg).toEqual(0);
    expect(player.inventory).toEqual({});
  });
  it('should return basic attack', () => {
    expect(player.basicAttack()).toEqual(10);
  });
  it('should return special attack', ()=>{
    expect(player.specialAttack()).toEqual(30);
  });
  it('should return block', () =>{
    expect(player.block()).toEqual(0);
  });
});