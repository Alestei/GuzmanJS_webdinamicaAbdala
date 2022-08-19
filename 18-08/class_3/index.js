class Empleado {
    constructor(APNO, SUE, ANT, IDI, HIG, PR, KMP, FU, ESIND, ADI){
        this.APNO = APNO;
        this.SUE = SUE;
        this.ANT = ANT;
        this.IDI = IDI;
        this.HIG = HIG;
        this.PR = PR;
        this.KMP = KMP;
        this.FU = FU;
        this.ESIND = ESIND;
        this.ADI = ADI;
    }

    getSueldoBruto(){
        let porcAntiguedad = 0;
        let porcIdioma = 0;
        let porcTitulo = this.SUE*12/100;
        let porcPresentismo = 0;
            if(this.PR == "Si"){ porcPresentismo = this.SUE*2/100;}else{porcPresentismo=0;}
            
        let porcFuncion = 0;
        if(this.ADI == undefined){ this.ADI = 0;}
        if(this.FU == 1){porcFuncion = this.SUE*20/100;}
        if(this.FU == 2){porcFuncion = this.SUE*10/100;}

        for(let x in this.IDI){
            porcIdioma+=this.SUE*8/100;
        }

        for(let x = 0; x < this.ANT; x++){
            porcAntiguedad+=this.SUE*1/100;
        }
         return porcAntiguedad + porcIdioma + porcTitulo + porcPresentismo + porcFuncion + this.ADI;
    }
    
    getRetenciones(){
        let porcJubilacion = this.SUE * 11/100;
        let porcObraSocial = this.SUE * 3/100;
        let porcSindicato = this.SUE * 1/100;

        return porcJubilacion + porcObraSocial + porcSindicato;
    }
}

document.getElementById('setUser').onclick = function(){
    switch(parseInt(document.getElementById('Usuario').value)){
        case 1:{
            document.getElementById('NA').value = "Casas Kevin";
            document.getElementById('Categoria').value = "107836.17"
            document.getElementById('ANT').value = 20;
            document.getElementById('IDI').checked = "true";
            document.getElementById('HCG').value = 1;
            document.getElementById('Presentismo').value = "Si";
            document.getElementById('KM').value = 350;
            document.getElementById('Funcion').value = 1;
            document.getElementById('SIND').value = "Si";
            document.getElementById('ADI').value = 0;
            break;
        }
        case 2:{
            document.getElementById('NA').value = "Artigas Juan Luis";
            document.getElementById('Categoria').value = "102245.81"
            document.getElementById('ANT').value = 2;
            document.getElementById('IDI').checked = "true";
            document.getElementById('HCG').value = 0;
            document.getElementById('Presentismo').value = "Si";
            document.getElementById('KM').value = 100;
            document.getElementById('Funcion').value = 0;
            document.getElementById('SIND').value = "No";
            document.getElementById('ADI').value = 7500;
            break;
        }
        case 3:{
            document.getElementById('NA').value = "Alvarado Lucas";
            document.getElementById('Categoria').value = "92590.80"
            document.getElementById('ANT').value = 5;
            document.getElementById('IDI').checked = "true";
            document.getElementById('HCG').value = 2;
            document.getElementById('Presentismo').value = "Si";
            document.getElementById('KM').value = 250;
            document.getElementById('Funcion').value = 2;
            document.getElementById('SIND').value = "No";
            document.getElementById('ADI').value = 0;
            break;
        }
    }
}

document.getElementById('snd').onclick = function(){
  //  alert(document.getElementById('IDI').value)
  const EMP = new Empleado
  (
      document.getElementById('NA').value,
      parseFloat(document.getElementById('Categoria').value),
      document.getElementById('ANT').value,
      document.getElementById('IDI').value,
      document.getElementById('HCG').value,
      document.getElementById('Presentismo').value,
      document.getElementById('KM').value,
      document.getElementById('Funcion').value,
      document.getElementById('SIND').value,
      document.getElementById('ADI').value
  )
   
    
    document.writeln(`
            <center>
                ${'<p>' + Object.values(EMP) + '</p>' }
                ${'<h6>Sueldo Bruto</h6>' + EMP.getSueldoBruto()}
                ${'<h6>Retenciones</h6>' + EMP.getRetenciones()}
                ${'<h6>Sueldo Neto</h6>' + (EMP.getSueldoBruto()-EMP.getRetenciones())}
            </center>
    `);
//  alert(EMP.getSueldoBruto() - EMP.getRetenciones());
  //alert(parseFloat(document.getElementById('Categoria').value))

// ------
    document.writeln(`
    <center>
        <br>
        <a href="" onclick="window.location.reload()">Retornar</a>
    </center>
    `);
}