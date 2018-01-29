class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
    this.requests   = [];
    this.directionUp = true;
  }

  start() {
    var intervalID= setInterval(() => this.update(), 1000);
  }

  stop(ID) { 
    clearInterval(intervalID);
  }

  update() { 
    this.log();
    this.floorUp();
    this.floorDown();
  }

  _passengersEnter() { }

  _passengersLeave() { }

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

  call() { }

  log() {
    let direction = this.directionUp? "Up" : "Down";

    console.log("Direction: " + direction + "| Floor: " + this.floor);
   }
}

module.exports = Elevator;
