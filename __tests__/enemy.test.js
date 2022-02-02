/* eslint-disable no-undef */
import Enemy from '../src/js/enemy.js';

describe('Enemy', () => {

  let enemy;

  beforeEach(() => {
    enemy = new Enemy();
  });
  it('should create an empty player object', () =>{
    expect(enemy.health).toEqual(50);
    expect(enemy.atkDmg).toEqual(7);
    expect(enemy.inventory).toEqual({});
  });
  // it('should return 20', () => {
  //   expect(player.attackValue()).toEqual(20);
  // });
});