let knop1 = 0
let knop2 = 0
let knop3 = 0




function changeImage(nummers){
    container = document.getElementById('container')
    container.style.backgroundImage = "url(images/bg"+nummers+".jpg)"
    plaatje = document.getElementById('plaatje')
    plaatje.src = "images/"+nummers+".jpg"
    

}