//DATA
let name = ""
let numbers = []
let uNumbers = []

let ncount = 4
let round = 1;
let points = 0;
let gamedata = document.cookie = `name=${name};nCount=3;round=1;points=0`

// GAME HEART FUNCTIONS
function randomizer(query){
    if(query == "numbers")     {return Math.floor(Math.random() * (9 - 0) + 0); }
    if(query == "points")      {return Math.floor(Math.random() * (5 - 3) + 3 )}
//  if(query == "numberCount") {return Math.floor(Math.random() * (9 - 3) + 3); }
}

function cookieReader(cookie, query){
    let CSP = cookie.split(';');

    for(let x in CSP){
        let c = CSP[x];
 
        if (c.indexOf(query) == 0) {
          return c.substring(query.length+1, c.length);
        }
    }

}



//NumberPad - npad
function NPConstruct(){
    for(let x = 0; x <= 9; x++){
        const div = document.createElement("div");
        div.id = "T_"+x; 
        div.innerHTML = '<p style="font-size:2vw" id="btn_'+ x +'"  class="btn" onclick="selectCharacter(event)">' + x + '</p>';
        document.getElementById('npad').appendChild(div);
    }
    document.getElementById('npad').style = '';
}


function zamasEverything(){
    document.getElementById('uSelect').innerHTML = ' ';
    document.getElementById('npad').innerHTML = ' ';
    document.getElementById('validate').style = 'display:none';
    document.getElementById('clean').style = 'display:none';
    numbers.length = 0;
    uNumbers.length = 0;
}

function checkArrayFRN(arr){
    let iR = true;
    while(iR == true){
       if(arr.length != 1 || arr.length != 0){
            for(let x in arr){
                if(arr[x] == arr[x-1]){
                    arr[x] = randomizer("numbers");
                    console.log(arr)
                }else{
                    iR = false;
                   // console.log(arr)
                }
            
            }
        }
   
    }
}