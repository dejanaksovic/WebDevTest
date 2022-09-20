let num;

const checkSavrsen= (toCheck) =>{
    let init = 0;
    init= toCheck;
    let delilac = 2;
    let delioci = [];

    while(delilac <= toCheck/2){
        if(toCheck%delilac==0){
            delioci.push(delilac);
        }

        delilac++;
    }

    let zbir=1;

    for(let i=0; i<delioci.length;i++){
        zbir+=delioci[i]
    }

   if(zbir == init){
    return true;
   } 

   return false
}

const checkbrojDobar= (toCheck) =>{
    let init = 0;
    init= toCheck;
    let delilac = 2;
    let delioci = [];

    while(delilac <= toCheck/2){
        if(toCheck%delilac==0){
            delioci.push(delilac);
        }

        delilac++;
    }

    let zbir= 1

    console.log(delioci)

    for(let i=0; i<delioci.length; i++){
        for(let j=0; j<delioci.length; j++){
            if(delioci[i] == delioci[j]){
                zbir-=delioci[j]
            }
            else{
                zbir+=delioci[j]
            }
            console.log(zbir)
        }
        if(init==zbir)
            return true;
    }
    return false;
}

document.querySelector("button").addEventListener("click", e=>{
    let input= document.querySelector("input").value

    //odlicuio sam se za metodu sa tri stinga, prvi ce imati vrednost savrsen, ako je broj savrsen
    //drigi ce imati vrednost dobar ako je dobar, u suprotnom prazni
    //i treci obican ako je obican, odnosno ako postane jedan od prethodna dva prazan 
    let perfektan="";
    let dobar="";
    let obican="obican"

    if(checkSavrsen(input)){
        perfektan= "Savrsen"
        obican=""
        
    }

    if(checkbrojDobar(input)){
        dobar="Dobar"
        obican=""
    }

    //prikazujem sva tri stiringa
    alert(`Vas broje je ${perfektan}${dobar}${obican}`)
})