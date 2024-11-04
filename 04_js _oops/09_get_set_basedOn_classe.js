class User {
    constructor(email , password)
    {
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value)

    {
        this._efmail = value
    }
}
const  hitesh = new User("asas@132" , "123")
console.log(hitesh.email);
console.log(hitesh._email);