class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

const person1 = new Person("Alice", "25");
console.log(person1.introduce());

class Counter {
  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    if (this.count === 0) {
      return;
    }
    this.count--;
  }
  clear() {
    this.count = 0;
  }
  getValue() {
    return this.count;
  }
}

const c1 = new Counter();

c1.increment();
console.log(c1.getValue());
c1.increment();
console.log(c1.getValue());
c1.increment();
console.log(c1.getValue());
c1.increment();
console.log(c1.getValue());
c1.increment();
console.log(c1.getValue());
// c1.decrement();
// console.log(c1.getValue());
// c1.decrement();
// console.log(c1.getValue());
// c1.decrement();
// console.log(c1.getValue());
// c1.decrement();
// c1.clear();
// console.log(c1.getValue());
// c1.decrement();
// console.log(c1.getValue());
// c1.decrement();
// console.log(c1.getValue());
// c1.decrement();
// console.log(c1.getValue());

const c2 = new Counter();
console.log("C2 VALUE: ", c2.getValue());

class BankAccount {
  constructor(firstName, lastName, balance = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    console.log(`Current balance: $${this.balance}`);
  }
}

const account = new BankAccount("Jason", "Luna", 100);

account.deposit(50);
account.getBalance(); // Current balance: $150

account.withdraw(30);
account.getBalance(); // Current balance: $120

account.withdraw(200); // Insufficient funds
account.getBalance(); // Current balance: $120

class Character {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  attackTarget(target) {
    if (this.isAlive()) {
      target.takeDamage(this.attack);
      console.log(
        `${this.name} attacks ${target.name} for ${this.attack} damage.`
      );
    }
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
    console.log(
      `${this.name} takes ${amount} damage. Health is now ${this.health}.`
    );
    if (!this.isAlive() && !this.hasDied) {
      this.onDeath();
      this.hasDied = true;
    }
  }

  isAlive() {
    return this.health > 0;
  }
  onDeath() {
    console.log(`${this.name} cries out in pain and dies `);
  }
}

class Warrior extends Character {
  constructor(name, health, attack, defense) {
    super(name, health, attack);
    this.defense = defense;
  }

  takeDamage(amount) {
    const reducedDamage = Math.max(amount - this.defense, 0);
    this.health -= reducedDamage;
    if (this.health < 0) this.health = 0;
    console.log(
      `${this.name} blocks ${this.defense} damage and takes ${reducedDamage}. Health is now ${this.health}.`
    );
  }

  shieldBlock() {
    console.log(`${this.name} uses Shield Block to reduce incoming damage.`);
  }
}

class Mage extends Character {
  constructor(name, health, attack, magicPower) {
    super(name, health, attack);
    this.magicPower = magicPower;
  }

  castSpell(target) {
    const damage = this.attack + this.magicPower;
    if (this.isAlive()) {
      target.takeDamage(damage);
      console.log(
        `${this.name} casts a spell on ${target.name} for ${damage} damage.`
      );
    }
  }

  heal() {
    const healAmount = this.magicPower;
    this.health += healAmount;
    console.log(
      `${this.name} heals for ${healAmount}. Health is now ${this.health}.`
    );
  }
}

// Example usage
const warrior = new Warrior("Red Warrior", 100, 15, 5);
const mage = new Mage("Yellow Wizard", 80, 10, 20);

warrior.attackTarget(mage);
mage.castSpell(warrior);
warrior.shieldBlock();
mage.heal();
warrior.attackTarget(mage);
warrior.attackTarget(mage);
warrior.attackTarget(mage);
warrior.attackTarget(mage);
warrior.attackTarget(mage);
warrior.attackTarget(mage);

console.log(warrior.isAlive());
console.log(mage.isAlive());
