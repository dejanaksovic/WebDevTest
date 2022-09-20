//VAZNO//

//ukoliko zelite da dodate jos item-a u htmlu radi testiranja, ili kroz js, dodati tim elementima klase
//.content kao i klase .red/ .blue/ .orange/ .green u zavisnosti od boje

let items = document.querySelectorAll(".content");//svi clanovi, trebali bi da budu slike da sam koristio slike, ali ista klasa isto sve
let korpa = document.querySelector(".korpa");//korpa :D
let buttons = document.querySelectorAll("button") //imamo 3 : 0:filt, 1: prikazi korpu, 2: dodaj u korpu selektovan, 3:obrisi korpu
let selected;
let itemAdd=null
let redItems= document.querySelectorAll(".Red")//crveni 
let blueItems= document.querySelectorAll(".Blue")//plavi
let orangeItems= document.querySelectorAll(".Orange")//narandzasti
let greenItems= document.querySelectorAll(".Green")//zeleni

let inputs = document.querySelectorAll("input")

//svaki item kada kliknemo postaje selektovani, a ostali ne
items.forEach((item, index, arr)=> {
    item.addEventListener("click", e=>{
        itemAdd= document.createElement('div')
        itemAdd.style.backgroundColor = items[index].style.backgroundColor;
        itemAdd.textContent =item.textContent;  
        itemAdd.style.border= item.style.border;
        itemAdd.style.fontSize = "1.5rem"
        items.forEach(item=> {
            item.style.border= "1px solid black"
        })
        item.style.border= "10px solid green"
    })
})

//dodavanje selektovanog itema u korpu
buttons[2].addEventListener("click", e=>{
    //ukoliko ne postoji item koji dodajemo
    try{
    korpa.append(itemAdd)
    alert(`Item ${itemAdd.textContent} dodat u korpu`)
    }
    catch(err){
    alert("Please elect an item to add")
    }
})


//selektovanje
buttons[0].addEventListener("click", e=>{
    //ukoliko bar nesto selektano prvo makni sve
    if(inputs[0].checked || inputs[1].checked || inputs[2].checked || inputs[3].checked){
        items.forEach(item=> item.style.setProperty("display", "none"))
        
    }

    //crveni itemi select
    if(inputs[0].checked){
        redItems.forEach(item => item.style.setProperty("display", "block"))
    }

   //plavi itemi select 
    if(inputs[1].checked){
        blueItems.forEach(item => item.style.setProperty("display", "block"))
    }


    //zeleni select
    if(inputs[2].checked){
        greenItems.forEach(item => item.style.setProperty("display", "block"))
    }

    if(inputs[3].checked){
        orangeItems.forEach(item => item.style.setProperty("display", "block"))
    }
})

//korpa nesta je dolazi klikom na prikazi korpu
buttons[1].addEventListener("click", e=>{
    korpa.classList.toggle("noneDisplay")

})

buttons[3].addEventListener("click", e=>{
    korpa.innerHTML= ''
    console.log(korpa)
})