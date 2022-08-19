class Rectangulo {
    constructor(lado1, lado2){
        this.lado1=lado1;
        this.lado2=lado2;
    }

    calcularArea(){
        return this.lado1 * this.lado2;
    }


}




document.getElementById('snd').onclick = function(){
    const R1A = document.getElementById('r1a').value;
    const R1B = document.getElementById('r1b').value;

    const R2A = document.getElementById('r2a').value;
    const R2B = document.getElementById('r2b').value;

    const R1 = new Rectangulo(R1A, R1B)
    const R2 = new Rectangulo(R2A, R2B)

     document.writeln(`
        <center>
            <h4>Rectangulo 1</h4>
                <p>${R1.calcularArea()}</p>
            <h4>Rectangulo 2</h4>
                <p>${R2.calcularArea()}</p>
        </center>
    `);


    document.writeln(`
    <center>
        <br>
        <a href="" onclick="window.location.reload()">Retornar</a>
    </center>
    `);
}