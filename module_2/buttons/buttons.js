function changeImage(nummers){
    button = document.getElementById('button'+nummers)
    container = document.getElementById('container')
    container.style.backgroundImage = "url(images/bg"+nummers+".jpg)"
    plaatje = document.getElementById('plaatje')
    plaatje.src = "images/"+nummers+".jpg"
    button.innerHTML = parseInt(button.innerHTML) + 1
    button.disabled = true;
    for(let i = 1; i !=4; i++){
        console.log(i)
        document.getElementById('button' + i ).disabled = false;
    }
    button.disabled = true;
}