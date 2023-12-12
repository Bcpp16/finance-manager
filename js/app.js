//DECLARACION DE ARRAYS
let listaIngresos = [];
let listaGastos = [];

// MENU OPCIONES 
function opcionesMenu() {
    return +prompt("¿Qué desea realizar?\n\n INGRESOS \n 1 - Agregar ingreso \n 2 - Mostrar todos los ingresos \n 3 - Calcular total de ingresos \n\n GASTOS \n 4 - Agregar gasto \n 5 - Mostrar todos los gastos \n 6 - Calcular total de gastos \n\n ==== \n 7 - Comparar gastos e ingresos");
}



// FUNCIONES INGRESOS

const agregarIngreso = () =>{
    let nuevoIngreso = +prompt("Agrega nuevo ingreso: ");
    if (!isNaN(nuevoIngreso)) {
       listaIngresos.push(nuevoIngreso);
       alert("✅ Se ha registrado correctamente!");
   } else {
       alert("❌ Debe ingresar un valor numérico");
   }
}


const totalIngresos = () => {
    let total = 0;
    for (let i = 0; i < listaIngresos.length; i++) {
        total += listaIngresos[i];
    }
    alert("Tienes un total de ingresos: " + total);
}

const mostrarIngresos = () =>  {
    if (listaIngresos.length === 0) {
        alert("🙃 No hay ingresos registrados.");
    } else {
        alert("Lista de ingresos:\n" + listaIngresos.join("\n"));
    }
}

// FUNCIONES GASTOS

const agregarGasto = () =>  {
    let nuevoGasto = +prompt("Ingresa un nuevo valor de pasivo:");
    if (!isNaN(nuevoGasto)) {
        listaGastos.push(nuevoGasto);
        alert("✅ Se ha registrado correctamente!");
    } else {
        alert("❌ Debe ingresar un valor numérico");
    }
}


const totalGastos = () => {
    let total = 0;
    for (let i = 0; i < listaGastos.length; i++) {
        total += listaGastos[i];
    }
    alert("Tienes un total de gastos: " + total);
}

const mostrarGastos = () =>  {
    if (listaGastos.length === 0) {
        alert("🙃 No hay ingresos registrados.");
    } else {
        alert("Lista de tus gastos:\n" + listaGastos.join("\n"));
    }
}



// FUNCIONES COMPARAR ACTIVOS vs PASIVOS 

function comparacionPasivosActivos(totalGastos, totalIngresos) {
    if (totalGastos > totalIngresos) {
        return "Tus gastos superan tus ingresos. ¡Ten cuidado! 🫤";
    } else if (totalIngresos > totalGastos) {
        return "Tus ingresos superan tus gastos. ¡Sigue así! 💪";
    } else {
        return "Tus ingresos y gastos están equilibrados, pero asegúrate de revisar tus gastos detenidamente.👍";
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

        case 7:
            // Calcular los totales antes de pasarlos a la función
            const totalGastos = calcularTotal(listaGastos);
            const totalIngresos = calcularTotal(listaIngresos);
            const mensajeComparacion = comparacionPasivosActivos(totalGastos, totalIngresos);
            alert(mensajeComparacion);
            break;
    
           
        default:
            alert("Ingresaste un valor inválido");
    }

    const deseaContinuar = confirm("¿Desea realizar otra operación?");
    if (!deseaContinuar) {
        alert("Hasta pronto!👋")
        break;
    }
}

// Función para calcular el total de una lista de valores
function calcularTotal(lista) {
    return lista.reduce((total, valor) => total + valor, 0);
}