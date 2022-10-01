let elem = [
    'A B C D E F G',
    'H I J K L M N'



]

const RN = (arr) => {return Math.floor(Math.random() * arr.length);}

const duplicateItems = (arr, numberOfRepetitions) =>
arr.flatMap(i => Array.from({ length: numberOfRepetitions }).fill(i));

const shuffleArray = (array) => {
    let x = 0;  
        do{
            
        for (let i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            x++;
        }

        }while(x<array.length)
        
};

let shuffledElem = elem[RN(elem)]; shuffledElem = shuffledElem.split(" ");
shuffledElem = duplicateItems(shuffledElem, 2);

shuffleArray(shuffledElem);
let newOrder = [];