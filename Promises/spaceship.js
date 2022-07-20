class Spaceship {
  constructor(name, fullChargeCapacity, currentCharge){
    this.name = name
    this.fullChargeCapacity = fullChargeCapacity
    this.currentCharge = currentCharge
  }

  currentFuel(){
    this.currentCharge = this.currentCharge * 100 / this.fullChargeCapacity
    return this.currentCharge
  }
}

class SpaceshipEngine extends Spaceship{

  turnOnEngine(){
    this.checkCurrentFuel().then(currentCharge => console.log(`(${name}%)
     partida autorizada: carga atual em ${currentCharge}`)).catch(currentCharge => {
      console.log(`partida não autorizada: carga em apenas ${currentCharge}%`)
     })
  }

  checkCurrentFuel(currentCharge, name){
    return new Promise(function(resolve,reject){
      if(currentCharge >= 30){
        console.log(`(${name}) Partida autorizada. Carga em ${currentCharge}`)
        resolve(currentCharge)    
      } else {
        console.log(`(${name}) Partida não autorizada. Carga em ${currentCharge}`)
        reject(`(${name}) Partida não autorizada. Carga em ${currentCharge}`)
      }
    })
  }
}
