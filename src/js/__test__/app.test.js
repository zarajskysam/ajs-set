import Character from '../character';
import Team from '../app';

test('Team Error', () => {
  expect(() => {
    const char = new Character('Ivan', 'Bowman');
    const newTeam = new Team();
    newTeam.add(char);
    newTeam.add(char);
  }).toThrow('Этот персонаж уже выбран в команде');
});

test('Team add', () => {
  const char = new Character('Ivan', 'Bowman');
  const newTeam = new Team();
  newTeam.add(char);
  const tr = true;
  expect(newTeam.members.has(char)).toBe(tr);
});

test('Team addAll', () => {
  const char = new Character('Ivan', 'Bowman');
  const char2 = new Character('Misha', 'Undead');
  const newTeam = new Team();
  newTeam.addAll(char, char2);
  const tr = true;
  expect(newTeam.members.has(char) && newTeam.members.has(char2)).toBe(tr);
});

test('Team toArray', () => {
  const char = new Character('Ivan', 'Bowman');
  const char2 = new Character('Ivan', 'Undead');
  const char3 = new Character('Misha', 'Undead');
  const newTeam = new Team();
  newTeam.addAll(char, char2, char3);
  const result = newTeam.toArray();
  const arr = [
    {
      name: 'Ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
    },
    {
      name: 'Ivan', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
    },
    {
      name: 'Misha', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
    },
  ];
  expect(result).toEqual(arr);
});
