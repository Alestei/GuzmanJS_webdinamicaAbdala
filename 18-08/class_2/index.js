class Empleado {
    constructor(name, year, salary, address){
        this.name = name;
        this.year = year;
        this.salary = salary;
        this.address = address;
    }

    printName(){
        return this.name;
    }

    printYear(){
        return this.year;
    }

    printSalary(){
        return this.salary;
    }

    printAddress(){
        return this.address;
    }

}

const E1 = new Empleado("Robert", 1994, "2000 USD", "64C- WallsStreat");
const E2 = new Empleado("Sam", 2000, "3420 USD" ,"68D- WallsStreat");
const E3 = new Empleado("John", 1999, "1250 USD" ,"26B- WallsStreat");


document.getElementById('snd').onclick = function(){

    document.writeln(`
    <center>
        <table >
            <tr>
                <th>Nombre</th>
                <th>Año</th>
                <th>Salario</th>
                <th>Dirección</th>
            </tr>
            
            <tr>
                <td>${E1.printName()}</td>
                <td>${E1.printYear()}</td>
                <td>${E1.printSalary()}</td>
                <td>${E1.printAddress()}</td>
            </tr>
            
            <tr>
                <td>${E2.printName()}</td>
                <td>${E2.printYear()}</td>
                <td>${E2.printSalary()}</td>
                <td>${E2.printAddress()}</td>
            </tr>

            <tr>
                <td>${E3.printName()}</td>
                <td>${E3.printYear()}</td>
                <td>${E3.printSalary()}</td>
                <td>${E3.printAddress()}</td>
            </tr>
    `);
    

// ------
    document.writeln(`
    <center>
        <br>
        <a href="" onclick="window.location.reload()">Retornar</a>
    </center>
    `);
}