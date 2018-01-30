class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
    this.requests   = [];
    this.directionUp = true;
    this.passengers = [];
    this.waitingList = [];
  }

  start() {
    setInterval(() => this.update(), 1000);
  }

  stop(interval) { 
    clearInterval(interval);
  }

  update() { 
    this.log();
    this.floorUp();
    this.floorDown();
  }

  _passengersEnter() { 
    this.waitingList.forEach(function(e, i){
      if(e[i].destinationFloor == this.floor){
        this.passenger.push(this.waitingList[i])
        this.requests.push(this.waitingList[i].destinationFloor)
        console.log(`${this.waitingList[i].name} has enter the elevator`)
        this.waitingList.splice(i, 1);
      }
     })
  }

  _passengersLeave() { 
    this.waitingList.forEach(function(e, i){
      if(e[i].destinationFloor == this.floor){
        this.passenger.push(this.waitingList[i])
        this.requests.push(this.waitingList[i].destinationFloor)
        console.log(`${this.waitingList[i].name} has enter the elevator`)
        this.waitingList.splice(i, 1);
      }
     })
  }

  floorUp() {
    if(this.directionUp && this.floor < this.MAXFLOOR){
      this.floor++;
    } else{
      this.directionUp = false;
    }
   }

  floorDown() { 
    if(!this.directionUp && this.floor > this.MINFLOOR){
      this.floor--;
    } else{
      this.directionUp = true;
    }
   }

  call(person) { 
    this.requests.push(person.originfloor);
    this.waitingList.push(person);
  }

  log() {
    let direction = this.directionUp? "Up" : "Down";

    console.log("Direction: " + direction + " | Floor: " + this.floor);
   }
}

module.exports = Elevator;
