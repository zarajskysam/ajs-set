import Character from '../character';

test.each([
  ['less than 2 symbols', 'i', 'Имя должно быть не менее десяти и не более двух символов'],
  ['more than 10 symbols', 'iasdsafgsdfgdfghfghfgjghjkgh', 'Имя должно быть не менее десяти и не более двух символов'],
])(
  ('throw Error for %s'),
  (level, amount, expected) => {
    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const char = new Character(amount, 'Bowman');
    }).toThrow(expected);
  },
);


test('class Errr', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const char = new Character('Vita', 'Zombieqw');
  }).toThrow('Некорректное название класса');
});

test.each([
  ['Bowman type correct', 'Bowman', {
    name: 'Nimba', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Daemon type correct', 'Daemon', {
    name: 'Nimba', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  }],
  ['Magician type correct', 'Magician', {
    name: 'Nimba', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  }],
  ['Swordsman type correct', 'Swordsman', {
    name: 'Nimba', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Undead type correct', 'Undead', {
    name: 'Nimba', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Zombie type correct', 'Zombie', {
    name: 'Nimba', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  }],
])(
  ('%s'),
  (level, amount, expected) => {
    const char = new Character('Nimba', amount);
    expect(char).toEqual(expected);
  },
);

test('levelUp', () => {
  const char = new Character('Nimba', 'Bowman');
  char.levelUp();
  const expected = {
    name: 'Nimba', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
  };
  expect(char).toEqual(expected);
});

test('levelUp Error', () => {
  expect(() => {
    const test = new Character('Vita', 'Zombie');
    test.health = 0;
    test.levelUp();
  }).toThrow('Нельзя повысить уровень мертвого персонажа');
});

test('damage', () => {
  const char = new Character('Nimba', 'Bowman');
  char.damage(20);
  const expected = {
    // eslint-disable-next-line no-irregular-whitespace
    name: 'Nimba', type: 'Bowman', health: 85, level: 1, attack: 25, defence: 25,
  };
  expect(char).toEqual(expected);
});
