function general(){
    let frase = document.getElementById('frase').value;
    frase = frase.toUpperCase(); 
    verifyVocals(frase);
  
}

function verifyVocals(frase){
    console.log(frase);
    let k = 0; let flag = false; let vC = 0; 
    const vocal = ["A", "E", "I", "O", "U"];

    for(let i of frase){ 
        if(vocal.includes(i)){
            vC++;
            
        }
    }
    alert("La cantidad de vocales es " + vC);
   
}