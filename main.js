console.log("%c¡Ejercicio 1 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("A través del siguiente taller, construir un menú en una función alert que gestione las siguientes opciones de menú referentes a manejo de los arrays, objetos, funciones y otras operaciones en JavaScript entre dichos temas.");

let eleccion = Number;
let datos12 = "";
let array45 = [];
let objetos34 = {};
let arrayNumber = [];
let arrayIterada = [];

while(eleccion != 0){
    eleccion = prompt(
        `
         -----MENU-----
        \t 1. Lectura de Datos
        \t 2. Crear Objeto
        \t 3. Mostrar Objeto
        \t 4. Crear Array
        \t 5. Mostrar Array
        \t 6. Elimine Primer Elemento del Array
        \t 7. Elimine Ultimo Elemento del Array
        \t 8. Eliminar Cualquier Elemento del Array
        \t 9. Agregar Elemento al Comienzo del Array
        \t 10. Agregar Elemento al Final del Array
        \t 11. Crear Array con Objetos
        \t 12. Iterar Array con Objetos con FOR
        \t 13. Iterar Array con Objetos con ForEach
        \t 14. Iterrar Array con Objetos con Map y Crear Copia
        \t 15. Crear una Array de numeros
        \t 16. Sumar Elementos de un Array
        \t 17. Restar Elementos de un Array
        \t 18. Sacar Elemento Mayor de un Array
        \t 19. Sacar Elemento Menor de un Array
        \t 0. Salir
        `
    );

    switch (eleccion) {
        case "1":
            leerData();
            break;
        case "2":
            creacionDeObjetos();
            break;
        case "3":
            mostrarObjeto();
            break;
        case "4":
            creacionDeArray();
            break;
        case "5":
            mostrarArray();            
            break;
        case "6":
            eliminarPrimerDato();
            break;
        case "7":
            eliminarUltimoDato();  
            break;
        case "8":
            eliminarDatoSeleccionado();
            break;
        case "9":
            agregarDatoInicio();
            break;
        case "10":
            agregarDatoFinal();
            break;
        case "11":
            crearArrayConObjetos();
            break;
        case "12":
            iterarFor();
            break;
        case "13":
            iterarForEach();
            break;
        case "14":
            iterarMAP();
            break;
        case "15":
            creacionDeArrayNumber();
            break;
        case "16":
            sumaDelArrayNumber();
            break;
        case "17":
            restaDelArrayNumber();
        break;
        case "18":
            maximoDelArrayNumber();
        break;
        case "19":
            minimoDelArrayNumber();            
        break;
        case "0":
    
            break;
    };
};

function leerData(){
    cantidad = parseInt(prompt("Cuantos Datos vas a ingresar  "))
    for (let i = 0; i < cantidad; i++) {
        datos12 = prompt("Ingresa la informacion aqui  ")
        console.log(datos12);
    }
};

function creacionDeObjetos(){
    cantidad = parseInt(prompt("Cuantos Datos vas a ingresar  "))
    for (let i = 0; i < cantidad; i++) {
        const llave = prompt("ingresa una llave  :");
        const valor = prompt("ingresa un valor  :");
        objetos34[llave] = valor;
    };
};

function mostrarObjeto(){
    console.log(JSON.stringify(objetos34));
};

function creacionDeArray(){
    cantidad = parseInt(prompt("Cuantos Datos vas a ingresar en el array  "))
    for (let i = 0; i < cantidad; i++) {
        valores = prompt("Ingresa los datos del array  ")
        array45.push(valores);
    };
    return
};

function mostrarArray(){
    console.log(JSON.stringify(array45));
};

function eliminarPrimerDato(){
    array45.shift();
    console.log(array45);
};

function eliminarUltimoDato(){
    array45.pop();
    console.log(array45);
};

function eliminarDatoSeleccionado(){
    seleccion = parseInt(prompt(`Ingresa la ubicacion de dato que quiera borrar \t ${array45} `));
    array45.splice(seleccion, 1);
    console.log(array45);
};

function agregarDatoInicio(){
    inicio = prompt("Ingresa el dato que quieres poner al inicio de la array");
    array45.unshift(inicio);
    console.log(array45);
};

function agregarDatoFinal(){
    final = prompt("Ingresa el dato que quieres poner al final de la array");
    array45.push(final);
    console.log(array45);
};

function crearArrayConObjetos(){
    cantidad = parseInt(prompt("Cuantos Datos vas a ingresar  "))
    for (let i = 0; i < cantidad; i++) {
        const llave = prompt("ingresa una llave  :");
        const valor = prompt("ingresa un valor  :");
        arrayIterada.push({ Nombre: llave, Atributo: valor});
    };
    console.log(arrayIterada);
};


function iterarFor(){
    for (let i = 0; i < arrayIterada.length; i++) {
        console.log(` La llave ${arrayIterada[i].Nombre} cuenta con el valor ${arrayIterada[i].Atributo} `);
      }
};

function iterarForEach(){
    arrayIterada.forEach(function (Array) {
        console.log(`La llave ${Array.Nombre} cuenta con el valor ${Array.Atributo}`);
      });
}; 

function iterarMAP(){
    const arrayIteradaCopia = arrayIterada.map(function (cornucopia) {
        return { nombreResp: cornucopia.Nombre, valorResp: cornucopia.Atributo };
      });
      
      console.log(` copia creada con exito, imprimiendo copia \n ${arrayIteradaCopia}`);
};

function creacionDeArrayNumber(){
    cantidad = parseInt(prompt("Cuantos Datos vas a ingresar en el array  "))
    for (let i = 0; i < cantidad; i++) {
        valores = parseInt(prompt(`Ingresa el numero ${i+1}  :`));
        arrayNumber.push(valores);
    };

    console.log(arrayNumber);
    return
};
function sumaDelArrayNumber(){
    console.log(arrayNumber);
    const suma = arrayNumber.reduce(function (operacion, numero) {
        return operacion + numero;
      });
      
    console.log(` la suma total es igual a ${suma}`);
};

function restaDelArrayNumber(){
    console.log(arrayNumber);
    const resta = arrayNumber.reduce(function (operacion, numero) {
        return operacion - numero;
      });
      
    console.log(` la resta total es igual a ${resta}`);
};

function maximoDelArrayNumber(){
    console.log(arrayNumber);
    const maximo = Math.max(...arrayNumber) 
      
    console.log(` el numero mayor es ${maximo}`);
};

function minimoDelArrayNumber(){
    console.log(arrayNumber);
    const minimo = Math.min(...arrayNumber) 
      
    console.log(` el numero minimo es ${minimo}`);
}