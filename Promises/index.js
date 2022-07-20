
const Sophia = new SpaceshipEngine('Sophia', 10, 5)
const Amsterdã = new SpaceshipEngine('Amsterdã', 14, 10)
const Estrela_anã = new SpaceshipEngine('Estrela-anã', 20, 4)

console.log(Amsterdã.checkCurrentFuel(Amsterdã.currentFuel(), Amsterdã.name))
console.log(Sophia.checkCurrentFuel(Sophia.currentFuel(), Sophia.name))
console.log(Estrela_anã.checkCurrentFuel(Estrela_anã.currentFuel(), Estrela_anã.name))