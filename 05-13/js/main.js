function constructPiece(_id,arr,hidden){
    
    if(hidden == false){
        for(let x in arr){
            const div = document.createElement("div");
            div.id = "T_"+x; 
            div.innerHTML = '<p style="font-size:2vw" id="btn_'+ x +'"  class="btn" onclick="selectCharacter(event)">' + arr[x] + '</p>';
            document.getElementById(_id).appendChild(div);
        }
    }

    if(hidden == true){
        for(let x in arr){
            const div = document.createElement("div");
            div.id = "T_"+x; 
            div.innerHTML = '<p style="font-size:2vw" id="btn_'+ x +'"  class="btn" onclick="selectCharacter(event)">?</p>';
            document.getElementById(_id).appendChild(div);
        }
    }
}

newOrder = shuffledElem; 
constructPiece("mbox",shuffledElem,false);

const interval = setInterval(timer, 1000);

let a = 6;
function timer() {

  if(a>1){
    a= a-1;
    document.getElementById("txt").innerHTML = '<h1>'+a;
    
  }else{
    document.getElementById("txt").innerHTML = 'Organice los elementos como estaban anteriormente.'
    document.getElementById("mbox").innerHTML = "";
    shuffleArray(newOrder); 
    constructPiece("mbox",newOrder,true);
    clearInterval(interval);
   

  }
}






//////

let arr = []; let cc = 0;
function selectCharacter(event){
    let btn = document.getElementById(event.target.id); 
    
    if(btn.style.backgroundColor == "green"){
         cc -= 1;
        btn.innerText = btn.innerText.slice(0,1);
        btn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        const index = arr.indexOf(btn.innerHTML); 
        if (index >= 0) {
            delete arr[index]; 
        }
       // console.log(arr);
    }else{
    

         cc +=1;
         btn.style.backgroundColor = "green";
         btn.innerText = newOrder[btn.id.slice(4,6)];
        
         
         
    }

    if( cc > 2){
        alert("YCCMTTT"); cc = 0;
        btn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }

    if(btn.style.backgroundColor == "green"){
       arr.push(btn.innerText);  
       console.log(arr);
    }
    

   
  
    
}

document.getElementById('enviar').onclick = function(){
     
     SQA = splitSQ.filter(item => !arr.includes(item)); //si esta vacio, o tiene un elemento menos perdiste.

     if(SQA.length == splitSQ.length && arr.length>0){
         sAlert("¡Felicitaciones!","¡Lo lograste! sigue así.","","");
       //  window.location.reload();
     }else{
         sAlert("","¡No te rindas! sigue intentándolo.","","El éxito no se da de la noche a la mañana, ¡no te desanimes!");
         //window.location.reload();
     }
     
     console.log(splitSQ," - ",SQA);
}

