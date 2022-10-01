
function analizarCadena(){
    let verbo = document.getElementById('verbo').value;
    let conj; let posEsp = 0;
    //
    for(var i = 0; i<verbo.length; i++){
        if(verbo.charAt(i) == ' '){
            conj = verbo.charAt(i+1);
            posEsp = i; 
        }

    }
    conj = conj.toUpperCase();
    verbo = verbo.substring(0,posEsp);
    document.write("<center><h3>Conjugados</h3></center>");
    
    if(conj == "A"){YoPresente(verbo);}
    if(conj == "P"){YoPreterito(verbo);}
    if(conj == "F"){YoFuturo(verbo);}


}



//---------------------------------
function YoPresente(verbo){
   document.write("<h4>Conj. Presente</h4>");
   let verboTrunc = verbo.substring(0, verbo.length-2);
   
   document.write("<br>Yo " + verboTrunc + "o");    
 
    TuPresente(verbo);
}

function TuPresente(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Tú " + verboTrunc + "as");    
    }else if(lastL == "er"){
        document.write("<br>Tú " + verboTrunc + "es");
    }else if(lastL == "ir"){
        document.write("<br>Tú " + verboTrunc + "es");
    }
   
     
     ElPresente(verbo);
 }
 
 function ElPresente(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>El " + verboTrunc + "a");
        
    }else if(lastL == "er"){
        document.write("<br>El " + verboTrunc + "e");
    }else if(lastL == "ir"){
        document.write("<br>El " + verboTrunc + "e");
    }
    NosotrosPresente(verbo);
 
 }

  
 function NosotrosPresente(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Nosotros " + verboTrunc + "amos");
        
    }else if(lastL == "er"){
        document.write("<br>Nosotros " + verboTrunc + "emos");
    }else if(lastL == "ir"){
        document.write("<br>Nosotros " + verboTrunc + "imos");
    }
   VosotrosPresente(verbo);

 }

 function VosotrosPresente(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Vosotros " + verboTrunc + "aís");
        
    }else if(lastL == "er"){
        document.write("<br>Vosotros " + verboTrunc + "eís");
    }else if(lastL == "ir"){
        document.write("<br>Vosotros " + verboTrunc + "ís");
    }
   
    EllosPresente(verbo);
 }


 function EllosPresente(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Ellos " + verboTrunc + "an");
        
    }else if(lastL == "er"){
        document.write("<br>Ellos " + verboTrunc + "en");
    }else if(lastL == "ir"){
        document.write("<br>Ellos " + verboTrunc + "en");
    }
   
    document.write("<hr>")
 }

//---------------------------------
//---------------------------------
function YoPreterito(verbo){
    document.write("<h4>Conj. Preterito</h4>");
   let verboTrunc = verbo.substring(0, verbo.length-2);
   let lastL = verbo.substring(verbo.length-2, verbo.length);
   if(lastL == "ar"){
    document.write("<br>Yo " + verboTrunc + "é");
    }else if(lastL == "er"){
    document.write("<br>Yo " + verboTrunc + "í");
    }else if(lastL == "ir"){
    document.write("<br>Yo " + verboTrunc + "í");
    }

    TuPreterito(verbo);
}

function TuPreterito(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Tú " + verboTrunc + "aste");    
    }else if(lastL == "er"){
        document.write("<br>Tú " + verboTrunc + "iste");
    }else if(lastL == "ir"){
        document.write("<br>Tú " + verboTrunc + "iste");
    }
   
     
     ElPreterito(verbo);
 }
 
 function ElPreterito(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>El " + verboTrunc + "ó");
        
    }else if(lastL == "er"){
        document.write("<br>El " + verboTrunc + "ió");
    }else if(lastL == "ir"){
        document.write("<br>El " + verboTrunc + "ó");
    }
    NosotrosPreterito(verbo);
 
 }

  
 function NosotrosPreterito(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Nosotros " + verboTrunc + "abamos");
        
    }else if(lastL == "er"){
        document.write("<br>Nosotros " + verboTrunc + "iamos");
    }else if(lastL == "ir"){
        document.write("<br>Nosotros " + verboTrunc + "iamos");
    }
   VosotrosPreterito(verbo);

 }

 function VosotrosPreterito(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Vosotros " + verboTrunc + "asteis");
        
    }else if(lastL == "er"){
        document.write("<br>Vosotros " + verboTrunc + "asteis");
    }else if(lastL == "ir"){
        document.write("<br>Vosotros " + verboTrunc + "asteis");
    }
   
    EllosPreterito(verbo);
 }


 function EllosPreterito(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Ellos " + verboTrunc + "aban");
        
    }else if(lastL == "er"){
        document.write("<br>Ellos " + verboTrunc + "ían");
    }else if(lastL == "ir"){
        document.write("<br>Ellos " + verboTrunc + "ían");
    }
   
    document.write("<hr>")
 }

//---------------------------------
//---------------------------------
function YoFuturo(verbo){
    document.write("<h4>Conj. Futuro</h4>");
   let verboTrunc = verbo.substring(0, verbo.length-2);
   let lastL = verbo.substring(verbo.length-2, verbo.length);
   if(lastL == "ar"){
    document.write("<br>Yo " + verboTrunc + "aré");
    }else if(lastL == "er"){
    document.write("<br>Yo " + verboTrunc + "eré");
    }else if(lastL == "ir"){
    document.write("<br>Yo " + verboTrunc + "iré");
    }

    TuFuturo(verbo);
}

function TuFuturo(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Tú " + verboTrunc + "arás");    
    }else if(lastL == "er"){
        document.write("<br>Tú " + verboTrunc + "erás");
    }else if(lastL == "ir"){
        document.write("<br>Tú " + verboTrunc + "irás");
    }
   
     
     ElFuturo(verbo);
 }
 
 function ElFuturo(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>El " + verboTrunc + "ará");
        
    }else if(lastL == "er"){
        document.write("<br>El " + verboTrunc + "erá");
    }else if(lastL == "ir"){
        document.write("<br>El " + verboTrunc + "irá");
    }
    NosotrosFuturo(verbo);
 
 }

  
 function NosotrosFuturo(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Nosotros " + verboTrunc + "aremos");
        
    }else if(lastL == "er"){
        document.write("<br>Nosotros " + verboTrunc + "eremos");
    }else if(lastL == "ir"){
        document.write("<br>Nosotros " + verboTrunc + "iremos");
    }
   VosotrosFuturo(verbo);

 }

 function VosotrosFuturo(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Vosotros " + verboTrunc + "areís");
        
    }else if(lastL == "er"){
        document.write("<br>Vosotros " + verboTrunc + "eís");
    }else if(lastL == "ir"){
        document.write("<br>Vosotros " + verboTrunc + "eís");
    }
   
    EllosFuturo(verbo);
 }


 function EllosFuturo(verbo){
    let verboTrunc = verbo.substring(0, verbo.length-2);
    let lastL = verbo.substring(verbo.length-2, verbo.length);

    if(lastL == "ar"){
        document.write("<br>Ellos " + verboTrunc + "arán");
        
    }else if(lastL == "er"){
        document.write("<br>Ellos " + verboTrunc + "erán");
    }else if(lastL == "ir"){
        document.write("<br>Ellos " + verboTrunc + "irán");
    }
   
    document.write("<hr>")
 }

//---------------------------------

