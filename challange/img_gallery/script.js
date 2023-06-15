const Images = ["aiko","Audrey","Beli","Celeste","Jessie","Kyanna","kyu","Lola","Momo","Nikki","Tiffany","Venus"];
let position = 0

function turn_img(positioning){
    if (positioning === 'back' && position > 0){
        position--
        console.log(position)
    }   else if(positioning === 'back'){
        position = Images.length - 1
    }   else if(positioning === 'forward' && position < Images.length - 1){
        position++
        console.log(position)
    }   else if (positioning === 'forward'){
        position = 0
    }else{
        console.log('you messed up somewhere')
    }
    
    
    
    document.getElementById("imgs").src = 'img/'+ Images[position] +'.webp'
}

