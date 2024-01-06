let DATA ="secret information";

class user{
  constructor(name,email){
    this.name=name;
    this.email=email;
  }
  viewData(){
    console.log("data",DATA);
  }
}

class admin extends user{
  constructor(name,email){
    super(name,email);
  }
  editData(){
    DATA="new edited";
  }
}

student1=new user("arunabha","haggu@email.com");
student2=new user("shubh","adja@email.com")

teacher1=new user("adsbk","bjbsd@email.com");

let admin1=new admin("admin","dk@email.com");