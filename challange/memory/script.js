function shuffle(array) {
    let currentIndex = array.length,    randomIndex;

    //while thre are elements to shuffle
    while (currentIndex != 0) {

        //Pick a remaining element
        randomIndex =Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //and swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function turn_image(img){
    console.log(img)
    let name = img.id.replace("_row_", "")
    console.log(name.replace(/.$/,""))
    img.src = 'img/' + name.replace(/.$/,"") + '.webp'
    names.push(name.replace(/.$/,""))
    if (names.length === 2){
      img_checker(names)
      names = []
    }

}

function img_checker(list){
  if( list[0] === list[1]){
    console.log()
  }
}



//////////////////////////////////////////////////////////////////////////////////////

const Images = ["aiko","Audrey","Beli","Celeste","Jessie","Kyanna","kyu","Lola","Momo","Nikki","Tiffany","Venus"];
let names = [];


for (let x = 1; x < 3; x++){
    let row = `row_${x}`
    images = shuffle(Images)
    
    for (let i = 0; i < Images.length; i++){
        let create_image = document.createElement('img');
        create_image.setAttribute('onclick','turn_image(this)')
        create_image.src = 'img/background.png' ;
        create_image.id = String(images[i]) +'_'+ row
        document.getElementById(row).appendChild(create_image); 

    }

}
