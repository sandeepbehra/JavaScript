class User{
    constructor(username)
    {
        this.username = username
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }

     createId()
    {
        return '123';
    }
    static NewcreateId()
    {
        return '321';
    }
}

const hitesh = new User("hitesh");
console.log(hitesh.createId());
//console.log(hitesh.NewcreateId());
console.log(User.NewcreateId());  // static method called by class itself

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone","hjsdhjsd@123");
//console.log(iphone.NewcreateId());
console.log(Teacher.NewcreateId()); // static method called by class itself
