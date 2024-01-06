// class person{
//   constructor(){
//     console.log("enter parent constructor")
//     this.species="homo sapiens"
//   }
//   eat(){
//     console.log("eat")
//   }
//   // work(){
//   //   console.log("do nothing")
//   // }
// }

// class engineer extends person{
//   constructor(branch){
//     console.log("enter child constructor")
//     super(); // to invoke parent class constructor
//     this.branch=branch;
//     console.log("exit child constructor")
//   }
//   work(){
//     console.log("solve problems, building websites")
//   }
// }
// let enggObj=new engineer("computer engg.");




class person{
    constructor(name){
      this.species="homo sapiens"
      this.name=name
    }
    eat(){
      console.log("eat")
    }
    // work(){
    //   console.log("do nothing")
    // }
  }


class engineer extends person{
  constructor(name){
    super(name); // to invoke parent class constructor
  }
  work(){
    super.eat();
    console.log("solve problems, building websites")
  }
}
let enggObj=new engineer("arunabha");