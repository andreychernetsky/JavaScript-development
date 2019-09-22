const Animal = function(name,species,sound) {
  this.name = name;
  this.species = species;
  this.sound = sound;
};

Animal.prototype.speak = function() {
  return this.species + ' ' + this.name + ' says ' + this.sound + '!';
};
const cat = new Animal('wizard','cat','meow');

console.log(cat.toString());

