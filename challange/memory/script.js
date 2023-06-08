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
//////////////////////////////////////////////////////////////////////////////////////

Images = ["img/aiko.webp"];





// for (let i = 0; i < Images; i++){
create_image = document.createElement('img');
create_image.src = 'img/cola.jpg';
document.getElementById('row_1').appendChild(create_image);


