let bestellen = "real"
let hoeveel_bier =0
let hoeveel_fris = 0
let hoeveel_wijn = 0
let hoeveel = 0 

const drinken = []

while (bestellen != 'stop') {

    bestellen = prompt ("Wat wilt u bestellen").toLowerCase()

    if (bestellen == "fris" || bestellen == "bier" || bestellen == "wijn"){

        hoeveel = parseInt(prompt ("Hoeveel wilt u bestellen"))
        if (bestellen == "fris"){
            hoeveel_fris = hoeveel_fris += Number(hoeveel)
            drinken.push("fris: x" + hoeveel_fris)
        }else if(bestellen == "bier"){
            hoeveel_bier = hoeveel_bier += Number(hoeveel)
            drinken.push("bier: x" + hoeveel_bier)
        }else if(bestellen == "wijn"){
            hoeveel_wijn = hoeveel_wijn += Number(hoeveel)
            drinken.push("wijn: x" + hoeveel_wijn)
        }





    }else if(bestellen == 'stop'){
        alert('bedankt voor het bestellen')
    }else{
        alert ("Die bestaat niet. kies uit Fris, Bier of Wijn.")
    }
}

console.log(hoeveel_bier)

document.write(drinken)