const User =
{
    _email:"sandeep@.com",
    _password: "sanm12",

    get mail()
    {
        return this._email.toUpperCase();
    },
    set mail(value)
    {
        this._email = value
    }
}
const tea = Object.create(User)
//console.log(tea._mail);
//console.log(tea.email);
console.log(tea._email);
console.log(tea.mail);