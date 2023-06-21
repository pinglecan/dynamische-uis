jouwnaam = prompt('wat is je naam?')
let teller = 0


var button = document.createElement("button");
button.innerHTML = "Click me";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
    document.getElementById('welkom').innerHTML = 'welkom ' + jouwnaam
    teller += 1
    if(teller == 2){
        console.log('ballz')
        button.remove()
    }
});     