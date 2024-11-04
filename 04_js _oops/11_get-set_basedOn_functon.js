 function User(email , password)
 {
   this._email= email;
   this_password = password;

   Object.defineProperty(this , 'sandeep' , {
    get : function(){
        return this._email.toUpperCase();
    },

    set : function(value)
    {
     this._email = value;
    }
   })
 }
 const tea = new User("chaha@123" , 123)
 console.log(tea.sandeep);
 console.log(tea._email);