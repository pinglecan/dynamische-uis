let bestellen = "real"
let hoeveel_bier =0
let hoeveel_fris = 0
let hoeveel_wijn = 0
let hoeveel = 0 

const drinken = {wijn:0, bier:0, fris:0}

while (bestellen != 'stop') {

    bestellen = prompt ("Wat wilt u bestellen").toLowerCase()

    if (bestellen == "fris" || bestellen == "bier" || bestellen == "wijn"){
        hoeveel = parseInt(prompt ("Hoeveel wilt u bestellen"))
        drinken[bestellen] += hoeveel
    }else if(bestellen == 'stop'){
        alert('beda nkt voor het bestellen')
    }else{
        alert ("Die bestaat niet. kies uit Fris, Bier of Wijn.")
    }
}

console.dir(drinken)

const itemsFormatted = JSON.stringify(drinken, null, " ");
console.dir(itemsFormatted)
document.getElementById("myDiv").innerHTML = itemsFormatted;
