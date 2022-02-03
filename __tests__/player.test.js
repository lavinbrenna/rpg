/* eslint-disable no-undef */
import Player from '../src/js/player.js';

describe('Player', () => {

  let player;

  beforeEach(() => {
    player = new Player('Netrunner', 'Case');
  });
  it('should create an empty player object', () =>{
    expect(player.health).toEqual(100);
    expect(player.atkDmg).toEqual(0);
    expect(player.inventory).toEqual([]);
    expect(player.characterType).toEqual('Netrunner');
    expect(player.playerName).toEqual('Case');
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
  it('should return a number between 1 and 10',() =>{
    expect(player.d10Roll()).toBeLessThanOrEqual(10);
    expect(player.d10Roll()).toBeGreaterThan(0);
  });
  it('intel should return number btwn 1 and 10 for character stats', ()=>{
    player.generateCharacter();
    console.log(player);
    expect(player.intel).toBeLessThanOrEqual(10);
    expect(player.intel).toBeGreaterThan(0);
  });
});