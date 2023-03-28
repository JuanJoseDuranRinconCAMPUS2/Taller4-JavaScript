console.log("%c¡Ejercicio 1 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("A través del siguiente taller, construir un menú en una función alert que gestione las siguientes opciones de menú referentes a manejo de los arrays, objetos, funciones y otras operaciones en JavaScript entre dichos temas.");

let ciclo = true;
let datos12 = "";
let array45 = [];
let objetos34 = {};
let arrayIterada = [];


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
        \t 15. Sumar Elementos de un Array
        \t 16. Restar Elementos de un Array
        \t 17. Sacar Elemento Mayor de un Array
        \t 18. Sacar Elemento Menor de un Array
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
          
        case "5":
         
            break;
        case "6":
        
        case "7":
         
            break;
        case "8":
       
            break;
        case "9":
        
            break;
        case "10":
          
            break;
        case "11":
      
            break;
        case "12":
      
            break;
        case "13":
            break;
        case "14":

            break;
        case "15":
            
            break;
        case "0":
            let ciclo = false;
            break;
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
    return objetos34
    
};

function mostrarObjeto(){
    console.log(creacionDeObjetos());
};

function creacionDeArray(){
    cantidad = parseInt(prompt("Cuantos Datos vas a ingresar en el array  "))
    for (let i = 0; i < cantidad; i++) {
        datos = prompt("Ingresa los datos del array  ")
        array45.push(datos);
    };
    return objetos34
    
};