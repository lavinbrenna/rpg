/* eslint-disable no-undef */
import Enemy from '../src/js/enemy.js';

describe('Enemy', () => {

  let enemy;

  beforeEach(() => {
    enemy = new Enemy(50, 7);
  });
  it('should create an empty player object', () =>{
    expect(enemy.health).toEqual(50);
    expect(enemy.atkDmg).toEqual(7);
  });
  it('should return attack', () => {
    expect(enemy.attack()).toEqual("attack");
  });
  it('should return block', () =>{
    expect(enemy.block()).toEqual("block");
  });
  it('should return random item to enemy inventory', () =>{
    enemy.randomItem();
    expect.anything();
  });
});