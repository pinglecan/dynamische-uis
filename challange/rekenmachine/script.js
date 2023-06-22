let count = 0
function rekenen(button_id){

    current_number = Number(button_id.id)
    document.getElementById('display').value += current_number
}

function plus(type){
    
    if( type === '+' && count === 0 ){
        number_1 = current_number
        current_number = 0
        document.getElementById('display').value += ' + '
        count = 1
    }else if(type === '=' && count === 1 ){
        console.log('huh')
        document.getElementById('display').value += ' = ' + (number_1 + current_number)
        
    }else if(type === '-' && count === 0){
        number_1 = current_number
        current_number = 0
        document.getElementById('display').value += ' - '
        count = 2
    }else{
        document.getElementById('display').value += ' = ' + (number_1 - current_number)
    }

}




for(let x = 0; x <10 ; x++){
    const button = document.createElement('button')

    button.innerText = x

    button.setAttribute('id',x)

    button.setAttribute('onClick','rekenen(this)')
    document.getElementById('numbers').appendChild(button)
}