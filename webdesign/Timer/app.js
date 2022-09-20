let timerM= 0
let timerS= 0
let a;
let buttons= document.querySelectorAll("button")

let div = document.querySelector("div")
div.textContent= `${timerM}:${timerS}`

const AddToTimer = () =>{
    if(timerS+1==60){
        timerM= (timerM+1%60)
    }

    timerS= (timerS+1)%60
    div.textContent= `${timerM}:${timerS}`   
    console.log(timerS)
}

//uzimamo button klase start i dajemo timer
document.querySelector(".start").addEventListener("click", e=>{
    a= setInterval(AddToTimer, 1000)
})

//button klase stop zaustavlja tajmer ali ne resetuje vrenost
document.querySelector(".stop").addEventListener("click", e=>{
    clearInterval(a)
})

//button klase reset resetuje 
//ukoliko hocemo posle reseta da stavimo da staje timer samo treba da odradimo 
// "clearInterval(a)" na kraju reset eventa, nisam uradio jer nisam razumeo da li treba ili ne ;D
document.querySelector(".reset").addEventListener("click", e=> {
    timerM=0;
    timerS=0;
    div.textContent= `${timerM}:${timerS}`   
})

