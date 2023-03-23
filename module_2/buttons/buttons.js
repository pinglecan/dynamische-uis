let knop1 = 0
let knop2 = 0
let knop3 = 0

function changeImage(nummers){
    container = document.getElementById('container')
    container.style.backgroundImage = "url(images/bg"+nummers+".jpg)"
    plaatje = document.getElementById('plaatje')
    plaatje.src = "images/"+nummers+".jpg"
    if (nummers == 1){
        knop1 += 1
        document.getElementById('button1').innerHTML = knop1
    }else if(nummers == 2){
        knop2 += 1
        document.getElementById('button2').innerHTML = knop2
    }else if(nummers == 3){
        knop3 += 1
        document.getElementById('button3').innerHTML = knop3
    }
    console.dir(knop1)
    console.dir(knop2)
    console.dir(knop3)
}

