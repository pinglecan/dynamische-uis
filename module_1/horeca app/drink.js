let bestellen = "real"
let hoeveel_bier =0
let hoeveel_fris = 0
let hoeveel_wijn = 0
let hoeveel = 0 



while (bestellen != 'stop') {

    bestellen = prompt ("Wat wilt u bestellen").toLowerCase()

    if (bestellen == "fris" ||bestellen == "bier" || bestellen == "wijn"){

        hoeveel = parseInt(prompt ("Hoeveel wilt u bestellen"))
        if (bestellen == "fris"){
            hoeveel_fris = hoeveel_fris + hoeveel
            document.write("fris: x" + hoeveel_fris)
            document.write("<br>")
        }else if(bestellen == "bier"){
            hoeveel_bier = hoeveel_bier + hoeveel
            document.write("bier: x" + hoeveel_bier)
            document.write("<br>")
        }else if(bestellen == "wijn"){
            hoeveel_wijn = hoeveel_wijn + hoeveel
            document.write("wijn: x" + hoeveel_wijn)
            document.write("<br>")
        }





    }else if(bestellen == 'stop'){
        alert('bedankt voor het bestellen')
    }else{
        alert ("Die bestaat niet. kies uit Fris, Bier of Wijn.")
    }
}

console.log(hoeveel_bier)
