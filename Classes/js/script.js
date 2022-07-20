//sistema de monitoramento de uma nave espacial

//assim que inicia pede os dados da nave (nome, quantidade de tripulantes, tipo)

//se for de batalha pede-se o numero de armas e se de transporte o numero de lugares

//inicia com velocidade = 0

//menu : acelerar | trocar de nave | imprimir e sair

//taxa de desaceleração fixa em 17%

//acelerar: deve pedir aceleração e aumenta 83% ( velocidade atual + (aceleração * (1 - taxa de desaceleração)))

//trocar de nave: todos os dados são solicitados novamente e é iniciada com 0 dnv

//imprimir: nome && quantidade de tripulantes e velocidade atual

class Apps {
  constructor() {
    this.spaceship = null
  }

  askForSpaceshipKind() {
    const spaceshipKind = prompt(
      'Tipos de nave:\n' + '1 - Nave de Batalha\n' + '2 - Nave de Transporte\n'
    )
    return spaceshipKind
  }

  enrollSpaceship() {
    const spaceshipName = prompt('Qual o nome da nave ?')
    const crewQuantity = prompt('Qual a quantidade de tripulantes ?')
    const spaceshipKind = this.askForSpaceshipKind()

    if (spaceshipKind == '1') {
      const weaponsQuantity = prompt('Quantas armas a nave possui ?')
      this.spaceship = new battleSpaceship(
        spaceshipName,
        crewQuantity,
        weaponsQuantity
      )
    } else if (spaceshipKind == '2') {
      const sitsQuantity = prompt('Quantos assentos a nave possui ?')
      this.spaceship = new transportSpaceship(
        spaceshipName,
        crewQuantity,
        sitsQuantity
      )
    }
    this.showMenu()
  }

  showMenu() {
    let chosenOption

    while (chosenOption != '1' && chosenOption != '2' && chosenOption != '3') {
      chosenOption = prompt(
        '1 - Acelerar \n' + '2 - Trocar de Nave \n' + '3 - Imprimir e Sair \n'
      )
      switch (chosenOption) {
        case '1':
          this.spaceshipAccelerate()
          break
        case '2':
          this.enrollSpaceship()
          break
        case '3':
          this.printAndExit()
          break
      }
    }
  }

  spaceshipAccelerate() {
    const accelerationQuantity = prompt('Acelerar quanto ?')
    this.spaceship.speedUp(Number(accelerationQuantity))
    this.showMenu()
  }

  printAndExit() {
    alert(
      'Nome: ' +
        this.spaceship.name +
        '\n' +
        'Quantidade de tripulantes: ' +
        this.spaceship.crewQuantity +
        '\n' +
        'Velocidade da Nave: ' +
        this.spaceship.currentVelocity
    )
  }
}
