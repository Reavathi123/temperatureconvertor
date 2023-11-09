const { Button } = require("bootstrap")

let celciusInput=document.querySelector('#celcius > input')
let fahrenhietInput=document.querySelector('#fahrenhiet> input')
let Kelvin=document.querySelector('#Kelvin > input')
let btn=document.querySelector('.button button')

function  roundNumber(number){
    return Math.round(number*100 )/100
}

celciusInput,addEventListener('input' ,function(){
 letcTemp=parseFloat(celciusInput.value)
 letfTemp=(cTemp*(9/5))+32
 letKTemp=cTemp+273.15
 fahrenhietInput.value=roundNumber(fTemp)
 KelvinInput.value=roundNumber(KTemp)
})
fahrenhietInput,addEventListener('input' ,function(){
    letfTemp=parseFloat(fahrenhietInput.value)
    letcTemp=(fTemp-32)*(5/9)
    letKTemp=(fTemp-32)*(5/9)+273.15
    celciusInput.value=roundNumber(cTemp)
    KelvinInput.value=roundNumber(KTemp)
   })

KelviInput,addEventListener('input' ,function(){
    letKTemp=parseFloat(KelvinInput.value)
    letcTemp=KTemp-273.15

    letfTemp=(kTemp-273.15)*(9/5)+32
    celciusInput.value=roundNumber(cTemp)
    fahrenhietInput.value=roundNumber(KTemp)
   })

   btn.addEventListener('click', ()=>{
    celciusInput.value=""
    fahrenhietInput.value=""
    KelvinInput.value=""
   })