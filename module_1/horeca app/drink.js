let bestellen = "real"
let hoeveel = 0 
//prijs van de producten    fris = 2 bier = 3 wijn = 5
const drinken = {wijn:0, bier:0, fris:0}

while (bestellen != 'stop') {

    bestellen = prompt ("Wat wilt u bestellen").toLowerCase()

    if (bestellen == "fris" || bestellen == "bier" || bestellen == "wijn"){
        hoeveel = parseInt(prompt ("Hoeveel wilt u bestellen"))
        drinken[bestellen] += hoeveel
    }else if(bestellen == 'stop'){
        alert('bedankt voor het bestellen')
    }else{
        alert ("Die bestaat niet. kies uit Fris, Bier of Wijn.")
    }
}

console.dir(drinken)

let prijs_wijn = bestellen[wijn] * 5    
let prijs_bier = bestellen[bier] * 3
let prijs_fris = bestellen[fris] * 2

let kosten = prijs_bier + "" + prijs_fris + "" + prijs_wijn


const itemsFormatted = JSON.stringify(drinken, null, " ");
console.dir(itemsFormatted)
document.getElementById("myDiv").innerHTML = itemsFormatted;
document.getElementById("kosten").innerHTML = kosten;
