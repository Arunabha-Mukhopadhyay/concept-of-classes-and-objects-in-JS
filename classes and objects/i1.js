// const student={
//   fullName:"Arunabha Mukhopadhyay",
//   age:15,
//   printAge: function(){
//     console.log("age= ",this.age)
//   }
// }


const employee={
  clacTax() {
    console.log("tax rate is 10%");
  },
};

const karanArjun={
  salary:500000,
  clacTax() {
    // console.log("tax rate is 20%");
  },
};
karanArjun.__proto__=employee;