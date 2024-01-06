// class toyotaCar{
//   start() {
//     console.log("start")
//   }
//   stop(){
//     console.log("stop")
//   }

//   setBrand(brand){
//     this.brand=brand;
//   }
// }

// let fortuner=new toyotaCar()
// fortuner.setBrand("fortuner");
// let inova=new toyotaCar()
// inova.setBrand("inova")



class toyotaCar{
  constructor(brand,milage){
    console.log("creating new object");
    this.brand="fortuner";
    this.milage=10
  }
  start() {
    console.log("start")
  }
  stop(){
    console.log("stop")
  }
}

let fortuner=new toyotaCar("fortuner",10)
console.log(fortuner)
let inova=new toyotaCar("inova",14)
console.log(inova)