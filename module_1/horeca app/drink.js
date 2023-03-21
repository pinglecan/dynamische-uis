let bestellen = "real"
let hoeveel = 0 
let itemsFormatted ="<br>"
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

let prijs_wijn = drinken['wijn'] * 5    
let prijs_bier = drinken['bier'] * 3
let prijs_fris = drinken['fris'] * 2


if(drinken['wijn'] ==0){
    delete drinken.wijn
    delete prijs_wijn
}
if(drinken['bier']== 0){
    delete drinken.bier
    delete prijs_bier
}
if(drinken['fris'] == 0){
    delete drinken.fris 
    delete prijs_fris
}
        
test = Object.keys(drinken)

for (const [key, value] of Object.entries(drinken)) {
    itemsFormatted += `${value} x ${key} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`
    if(key == 'wijn'){
        itemsFormatted += `prijs: €${prijs_wijn}<br>`
        
    }
    else if(key == 'bier'){
        itemsFormatted += `prijs: €${prijs_bier}<br>`
    }
    else if(key == 'fris'){
        itemsFormatted += `prijs: €${prijs_fris}<br>`
    }else{
        console.log('klaar')
    }
}

let totaal = " totaal prijs is:€" + (prijs_bier + prijs_fris + prijs_wijn)



console.log(itemsFormatted)

console.log(test)

document.getElementById("myDiv").innerHTML = itemsFormatted;
document.getElementById("kosten").innerHTML = totaal;
