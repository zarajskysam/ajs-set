export default class Character {
  constructor(name, type) {
    if (name.length > 2 && name.length < 10) {
      this.name = name;
    } else { throw new Error('Имя должно быть не менее десяти и не более двух символов'); }
    if (type !== 'Bowman' && type !== 'Swordsman' && type !== 'Magician' && type !== 'Daemon' && type !== 'Undead' && type !== 'Zombie') {
      throw new Error('Некорректное название класса');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
    if (this.type === 'Bowman' || this.type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (this.type === 'Swordsman' || this.type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (this.type === 'Magician' || this.type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }

  levelUp() {
    if (this.health <= 0) throw new Error('Нельзя повысить уровень мертвого персонажа');
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
