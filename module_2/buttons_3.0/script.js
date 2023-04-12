const colors = ['red','purple','orange','pink','blue','']

function changeCol (button){
    let buttoncolor = button.style.backgroundColor
    let colorinaray = colors.indexOf(buttoncolor)
    if (colorinaray + 1 === colors.length){
        button.remove()
    }else{
        button.style.backgroundColor = colors[colorinaray + 1]
    }
    

}

for(let x = 1; x <30 + 1 ; x++){
    const button = document.createElement('button')

    button.innerText = x

    button.setAttribute('id',x)

    button.setAttribute('onClick','changeCol(this)')
    document.body.appendChild(button)
}

      



