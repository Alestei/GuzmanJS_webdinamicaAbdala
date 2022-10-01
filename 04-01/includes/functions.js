var filerefjs = document.createElement("script");
filerefjs.setAttribute("type", "text/javascript");
filerefjs.setAttribute("src", "frameworks/Sortable.js");

//----------------------------------------------

let oraciones = [
  "Necesitamos ir a comprar un kilo de pan",
  "El turno del medico me llega por correo",
  "Nos vamos de viaje al pueblo este fin de semana",
  "Mañana viene el plomero a arreglar el baño",
  
  "Tres tristes tigres comian trigo en un trigal",
  "UNO DOS TRES CUATRO CINCO SEIS SIETE OCHO NUEVE DIEZ",
  "1 2 3 4 5 6 7 8 9 10"
];
let phID = Math.floor(Math.random() * oraciones.length);

//----------------------------------------------
let fraseOG = oraciones[phID]; fraseOG = fraseOG.split(" ");
let frase = oraciones[phID]; frase = frase.split(" ");

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    };
 
  shuffleArray(frase);
//----------------------------------------------


window.onload = function () {
  document.getElementById("button").onclick = function () {checkWin(); };
//----------------------------------------------
  const dFrag = document.createDocumentFragment();
    for (let x in frase) {
            const div = document.createElement("div");
            div.id = frase[x];
            div.className = "block";
            div.innerHTML = "<h2>" + frase[x].toUpperCase();
            dFrag.appendChild(div);
    }
    document.getElementById("words").appendChild(dFrag);
//----------------------------------------------


//----------------------------------------------
  let orden = frase;
  let el = document.getElementById("words");

  let sortable = Sortable.create(el, {
    dataIdAttr: "id",
    animation: 150,
    forceFallback: true,

    store: {
      set: function (sortable) {
        orden = sortable.toArray();
        console.clear();
        console.log(orden);
        console.log(fraseOG);
      },
    },
  });

  document.getElementById("buttonH").onclick = function () {
      console.log("Reproduciendo Orden en Voz.");
      let speech = new SpeechSynthesisUtterance();
      speech.lang = ''
      speech.text = orden.join("");
      window.speechSynthesis.speak(speech);
      
      
   };

//----------------------------------------------
  function checkWin() {
    let WL = 0;
    for (var i = 0; i < document.querySelectorAll("#words .block").length; i++) {
        if (orden[i] == fraseOG[i]) {
            WL++;
        }
    }

    if (WL == frase.length) {finish(true,"¡HAS GANADO!"); } else {finish(false,"¡HAS PERDIDO!"); }
  }
};
//----------------------------------------------

function finish(F,M) {
  document.getElementById("words").remove();
  document.getElementById("button").remove();
  document.getElementById("buttonH").remove();
  let winText = document.createElement("div");

  if(F == true){winText.innerHTML = ` <center><h3 class="animate-charcter">`+ M +  ` </h3> <center><br><button class="styledButton"  onClick="document.location.reload(true)">Jugar otra partida</button>`;}
  if(F == false){winText.innerHTML = ` <center><h3 class="animate-charcter2">`+ M +  ` </h3> <center><br><button class="styledButton"  onClick="document.location.reload(true)">Jugar otra partida</button>`;}

  document.getElementById("med").appendChild(winText);
}
