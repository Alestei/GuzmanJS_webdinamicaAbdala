
//-----------------------------------------------------------------
let count = 0;
let phID = Math.floor(Math.random() * opcionesTXT.length);

let opcionesS = opcionesTXT[phID]; opcionesS = opcionesS.split(" "); 
let opcionesI = opciones[phID]; opcionesI = opcionesI.split(" "); 

//-----------------------------------------------------------------
let originalOrder = opcionesTXT[phID]; originalOrder = originalOrder.split(" ");
let SI = false;  

if(opcionesS[0] == "|"){
    SI = true;
}

 const shuffleArray = (array, array2) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        //console.log("i->",i,"J ->" ,j, array[i], array[j]);
        [array[i], array[j]] = [array[j], array[i]];
        [array2[i], array2[j]] = [array2[j], array2[i]];

    }
};
 
shuffleArray(opcionesS, opcionesI);

window.onload = function(){

    const dFrag = document.createDocumentFragment();
    for (let x in opcionesI) {
            const div = document.createElement("div");
            div.id = opcionesS[x];
            div.className = "insideRecOP";
            dFrag.appendChild(div);
    }

    document.getElementById("rec").appendChild(dFrag);
    
    for(let x in opcionesI){
        const img = document.createElement("img");
        img.className = "recOption";
        img.src = opcionesI[x];
        document.getElementById(opcionesS[x]).appendChild(img);
    }

    if(SI == false){
    for(let x in opcionesI){
        const div = document.createElement("div");
        div.id = "text"+x;
        div.innerHTML = '<center><h2 style="font-size:2vw">' + opcionesS[x];
        document.getElementById(opcionesS[x]).appendChild(div);

    }
}

//-----------------------------------------------------------------

    for (let x in opcionesI) {
        const div = document.createElement("div");
        div.id = "x"+x;
        div.className = "insideRecOP2";
        dFrag.appendChild(div);
    }

    document.getElementById("rec2").appendChild(dFrag);

    for(let x in opcionesI){
        const img = document.createElement("img");
        img.className = "recOption";
        img.src = 'style/arrow.png';
        document.getElementById("x"+x).appendChild(img);
    }

    
    for(let x in opcionesI){
        
        const div = document.createElement("div");
        div.innerHTML = '<center><h2>' + ++count; 
        document.getElementById("x"+x).appendChild(div);

    }
     
//-----------------------------------------------------------------
    let Uorder = opcionesS; 
    let el = document.getElementById("rec");
    Sortable.create(el, {
        dataIdAttr: "id",
        animation: 150,
        forceFallback: true,
       
    
        store: {
          set: function (sortable) {
               Uorder = sortable.toArray();
                console.log(Uorder, "-", originalOrder);
               
          },
        },
      });
      document.getElementById('button').onclick = function(){
          tryCombination();
      }
//-----------------------------------------------------------------

    function tryCombination(){
        let CC = 0; 
        for(let i = 0; i < document.querySelectorAll("#rec .insideRecOP").length; ++i){
           if(Uorder[i] == originalOrder[i]){
                ++CC;
           }
        }
    
      
       
        if(CC == originalOrder.length){
            final("¡Has ganado!");
        }else{
            final("Suerte la proxima");
        }

     
    }


    function final(M){
        let finalText = document.createElement("div");
        document.getElementById("rec").remove();
        document.getElementById("rec2").remove();
        document.getElementById("button").remove();
        document.getElementById("title").remove();
        finalText.innerHTML = `
        <center><h3 class="animate-charcter">`+ M +  ` </h3> 
        <br><br><br><br><br><br><br>
        <button class="styledButton"  onClick="document.location.reload(true)">Jugar otra partida</button>
        `;

        document.getElementById("WT").appendChild(finalText);
    }
}