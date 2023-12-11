//DECLARACION DE ARRAYS
let listaIngresos = [];
let listaGastos = [];

// MENU OPCIONES 
function opcionesMenu() {
    return +prompt("¿Qué desea realizar?\n\n INGRESOS \n 1 - Agregar ingreso \n 2 - Mostrar todos los ingresos \n 3 - Calcular total de ingresos \n\n GASTOS \n 4 - Agregar gasto \n 5 - Mostrar todos los gastos \n 6 - Calcular total de gastos ");
}



// FUNCIONES INGRESOS

function agregarIngreso() {
    let nuevoIngreso = +prompt("Ingresa un nuevo valor de activo:");
    if (!isNaN(nuevoIngreso)) {
        listaIngresos.push(nuevoIngreso);
        alert("Se ha registrado correctamente!");
    } else {
        alert("Debe ingresar un valor numérico");
    }
}


function totalIngresos() {
    let total = 0;
    for (let i = 0; i < listaIngresos.length; i++) {
        total += listaIngresos[i];
    }
    alert("Tienes un total de ingresos: " + total);
}

function mostrarIngresos() {
    if (listaIngresos.length === 0) {
        alert("No hay ingresos registrados.");
    } else {
        alert("Lista de ingresos:\n" + listaIngresos.join("\n"));
    }
}



// FUNCIONES GASTOS

function agregarGasto() {
    let nuevoGasto = +prompt("Ingresa un nuevo valor de pasivo:");
    if (!isNaN(nuevoGasto)) {
        listaGastos.push(nuevoGasto);
        alert("Se ha registrado correctamente!");
    } else {
        alert("Debe ingresar un valor numérico");
    }
}


function totalGastos() {
    let total = 0;
    for (let i = 0; i < listaGastos.length; i++) {
        total += listaGastos[i];
    }
    alert("Tienes un total de gastos: " + total);
}

function mostrarGastos() {
    if (listaGastos.length === 0) {
        alert("No hay ingresos registrados.");
    } else {
        alert("Lista de tus gastos:\n" + listaGastos.join("\n"));
    }
}



// ELECCION DE MENU OPCIONES 

while (true) {
    const eleccion = opcionesMenu();
    switch (eleccion) {
        case 1:
            agregarIngreso();
            break;
        case 2:
            mostrarIngresos();
            break;
        case 3:
            totalIngresos();
            break;
        case 4:
            agregarGasto();
            break;
        case 5:
            mostrarGastos();
            break;
        case 6:
            totalGastos();
            break;

        default:
            alert("Ingresaste un valor inválido");
    }

    const deseaContinuar = confirm("¿Desea realizar otra operación?");
    if (!deseaContinuar) {
        alert("Hasta pronto!")
        break;
    }
}
