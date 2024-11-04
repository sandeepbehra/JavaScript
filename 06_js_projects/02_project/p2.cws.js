//console.log("sandy");
const form = document.querySelector('form')
const s = document.querySelector('#button')
form.addEventListener('click',function(e){
    e.preventDefault();
    const h = parseInt(document.querySelector('#height').value)
    //console.log(h);
    const w = parseInt(document.querySelector('#weight').value)
    //console.log(w);
    const result = document.querySelector('#result')
    if(h==='' || h<=0 || isNaN(h))
    {
        result.innerHTML= 'Please enter Valid Height'
    }
    else if(w==='' || w<=0 || isNaN(w))
    {
        result.innerHTML= 'Please enter Valid weight'
    }
    else
    {
        // console.log(h);
        const r = (w/((h*h)/10000)).toFixed(2)
        result.innerHTML=`<span>${r}</span>`
        

    }


})