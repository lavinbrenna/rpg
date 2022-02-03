/* eslint-disable no-undef */
import Enemy from '../src/js/enemy.js';

describe('Enemy', () => {

  let enemy;

  beforeEach(() => {
    enemy = new Enemy();
  });
  it('should create an empty player object', () =>{
    expect(enemy.enemyType).toEqual('Merc');
    expect(enemy.health).toEqual(30);
    expect(enemy.atkDmg).toEqual(10);
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

/* basic enemy classes (pulled from a cyberpunk wiki):
merc (maybe balanced)
robot / mech(maybe sensitive to magic)
triggerman /assassin (maybe harder hitting but less hp)
blazer (magic user?)
netrunner -- tell me more
thug / street scrapper (steals inventory on some low proc?)
STREET SAMURAI?! HOW FREAKING COOL. BEST AT EVERYTHING.
juggernaut (immune to certain kinds of attacks, huge hp, ryan would toats be this one)
*/