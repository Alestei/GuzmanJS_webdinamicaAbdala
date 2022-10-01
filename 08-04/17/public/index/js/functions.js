const ArrDesc = [
    {
        title: "<b>Letras Repetidas</b>",
        descr: "¡Encuentra la letra repetida!",
        gifURL: "index/TDAH-img/How To Play/howToPlay1.gif",
        game: "juegos/letra_repetida/index.html",
    },
    {
        title: "<b>Frases</b>",
        descr: "¿A que categoria pertenece cada definicion? <br><br> ¡Leé la definicion, e identificá cual es su categoria!",
        gifURL: "index/TDAH-img/How To Play/howToPlay2.gif",
        game: "juegos/frases/index.html",
    },
    {
        title: "<b>¡Diferenciá entre los sinónimos!</b>",
        descr: "¡Encuentra la palabra no relacionada!<br>",
        gifURL: "index/TDAH-img/How To Play/howToPlay4.gif",
        game: "juegos/sinonimos/index.html",
    },
    {
        title: "<b>Ordena las Palabras</b>",
        descr: "¡Ordená las palabras! <br><br> ¡Arrastrándolas a su lugar correcto en la frase!",
        gifURL: "index/TDAH-img/How To Play/howToPlay3.gif",
        game: "juegos/palabras/index.html",
    },
    {
        title: "<b>Determiná la secuencia</b>",
        descr: "¡Organizá las imagenes en orden temporal, de un principio a un fin!",
        gifURL: "index/TDAH-img/How To Play/howToPlay5.gif",
        game: "juegos/secuencia/index.html",
    },
    {
        title: "<b>¡Señala el Animal!</b>",
        descr: "¡Compara la sombra, y selecciona el animal correcto!",
        gifURL: "index/TDAH-img/How To Play/howToPlay6.gif",
        game: "juegos/señala/index.html",
    },
    {
        title: "<b>¡Señalá los símbolos!</b>",
        descr: "Clickeá los elementos que se encuentren en la parte inferior, que no estén en la superior.",
        gifURL: "index/TDAH-img/How To Play/howToPlay7.gif",
        game: "juegos/simbolos/index.html",
    },
    {
        title: "<b>Figuras</b>",
        descr: "",
        gifURL: "index/TDAH-img/How To Play/howToPlay8.gif",
        game: "juegos/figuras/index.html",
    },
    {
        title: "<b>Organizá las fechas</b>",
        descr: "¡Organiza el día, mes con su festividad correspondiente!",
        gifURL: "index/TDAH-img/How To Play/howToPlay9.gif",
        game: "juegos/efemerides/index.html",
    },
    {
        title: "<b>Reconocé el elemento</b>",
        descr: "Dada una oración, debe seleccionar un elemento que corresponda.",
        gifURL: "index/TDAH-img/How To Play/howToPlay10.gif",
        game: "juegos/phrases/index.html",
    },
    {
        title: "<b>Asociá Palabras</b>",
        descr: "Determine la relación entre los objetos.",
        gifURL: "index/TDAH-img/How To Play/howToPlay11.gif",
        game: "juegos/asociar/index.html",
    },
    {
        title: "<b>Operaciones</b>",
        descr: "¡Efectúa las operaciones, de acuerdo a los niveles!",
        gifURL: "index/TDAH-img/How To Play/howToPlay12.gif",
        game: "juegos/SumGame/index.html",
    },
]

function description(it){
    document.getElementById("boxDesc").style.display = "block";
    document.getElementById("boxGames").style.filter = "blur(8px)";
    document.getElementById("IMGTitle").style.filter = "blur(1px)";

    document.getElementById("D_Title").innerHTML = ArrDesc[it.value-1].title;
    document.getElementById("D_Desc").innerHTML = ArrDesc[it.value-1].descr;
    document.getElementById("D_Gif").src = ArrDesc[it.value-1].gifURL;
    document.getElementById("buttoncontrol1").href = ArrDesc[it.value-1].game;
}

function backToR(){
    document.getElementById("boxDesc").style.display = "none";
    document.getElementById("boxGames").style.filter = "blur(0px)";   
    document.getElementById("IMGTitle").style.filter = "blur(0px)";
}

window.onload = () => {
    const DOMsButtons = document.getElementsByTagName("button");
    const DOMIFrame =  document.getElementById('pdf');
    for (const it of DOMsButtons) {
        if (it.id=="buttoncontrol1" || it.id=="buttoncontrol2" ) {
            continue;
        }

        it.addEventListener (
            'click', 
            () => {
                if (it.id == "DClaimer"){
                   if(DOMIFrame.style = "display:none"){
                    DOMIFrame.style = "display:block";
                    document.getElementById('boxGames').remove();
                    document.getElementById('IMGTitle').style = "height: 45px";
                    document.getElementById('frame').innerHTML = document.getElementById('frame').innerHTML + '<button onclick="window.location.reload()">Regresar'
                   }
                   
                }else if (it.id == "DClaimer2"){
                    sAlert2("Participantes", "Estudiantes de 7mo 2da, EEST 2 Año 2022.", "info", "");
                }else{
                  description(it);
                }

            },
        ) 
    }
}