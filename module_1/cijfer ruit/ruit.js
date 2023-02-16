let alert = prompt("geef een getal: ")

const listnum = []




for(let i = 0; i< alert; i++) {
    for(let z = 0; z < i+1; z++){
        document.write(z+ 1 + "-" )
    }
    document.write("<br>")
}

for(i = alert; i > 0; i--) {
    for(let z = 1; z < i; z++){
        if(z < i+1){
            document.write(z+ "-") 
        } else{
            document.write(z)
        }
    }
    
    document.write("<br>")
}
