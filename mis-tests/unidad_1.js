const preguntas = [

    {
        pregunta: "¿Qué es una red de ordenadores?",
        opciones: [
            "Un conjunto de ordenadores conectados para compartir recursos e información",
            "Un único ordenador conectado a Internet",
            "Un programa para navegar por Internet",
            "Un sistema operativo"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Cuáles son algunos elementos necesarios para que exista una comunicación?",
        opciones: [
            "Emisor, receptor, mensaje, canal y protocolo",
            "Solo emisor y receptor",
            "Solo un ordenador",
            "Un router y un switch"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué es un protocolo de comunicación?",
        opciones: [
            "Un conjunto de reglas que permite la comunicación",
            "Un tipo de cable",
            "Un ordenador",
            "Una dirección IP"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Cuál es un medio de transmisión guiado?",
        opciones: [
            "Cable",
            "Radio",
            "Wi-Fi",
            "Ondas de radio"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Cuál es un medio de transmisión no guiado?",
        opciones: [
            "Fibra óptica",
            "Cable coaxial",
            "Ondas de radio",
            "Cable de cobre"
        ],
        correcta: 2
    },


    {
        pregunta: "¿Qué significa que una red sea escalable?",
        opciones: [
            "Que puede crecer sin afectar demasiado a su funcionamiento",
            "Que solo puede tener pocos dispositivos",
            "Que funciona únicamente de forma inalámbrica",
            "Que no necesita protocolos"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué caracteriza a una transmisión simplex?",
        opciones: [
            "La información circula en ambos sentidos simultáneamente",
            "La información circula en un único sentido",
            "La información circula alternativamente",
            "No existe comunicación"
        ],
        correcta: 1
    },


    {
        pregunta: "¿Qué caracteriza a una transmisión semidúplex?",
        opciones: [
            "La comunicación solo ocurre en un sentido",
            "La comunicación ocurre en ambos sentidos al mismo tiempo",
            "La comunicación ocurre en ambos sentidos, pero no simultáneamente",
            "No existe receptor"
        ],
        correcta: 2
    },


    {
        pregunta: "¿Qué caracteriza a una transmisión dúplex?",
        opciones: [
            "La comunicación ocurre en ambos sentidos simultáneamente",
            "La comunicación ocurre únicamente en un sentido",
            "No existe canal",
            "Solo existe un receptor"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué ocurre en la conmutación de circuitos?",
        opciones: [
            "Se establece un camino dedicado durante la comunicación",
            "Los datos siempre se envían por caminos diferentes",
            "No existe comunicación",
            "Solo se utilizan redes inalámbricas"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué ocurre en la conmutación de paquetes?",
        opciones: [
            "La información se divide en paquetes que pueden viajar por la red",
            "Se reserva siempre un circuito físico completo",
            "Solo se utiliza un cable",
            "La información no se divide"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué significa P2P?",
        opciones: [
            "Peer to Peer",
            "Point to Point Router",
            "Packet to Protocol",
            "Private to Private"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué caracteriza a una red P2P?",
        opciones: [
            "Los dispositivos pueden actuar como clientes y servidores",
            "Solo existe un servidor",
            "No se pueden compartir recursos",
            "Solo funciona con routers"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué significa PAN?",
        opciones: [
            "Personal Area Network",
            "Public Area Network",
            "Private Access Network",
            "Packet Area Network"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué significa LAN?",
        opciones: [
            "Local Area Network",
            "Large Area Network",
            "Local Access Node",
            "Linked Area Network"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué significa MAN?",
        opciones: [
            "Metropolitan Area Network",
            "Main Area Network",
            "Medium Access Network",
            "Metropolitan Access Node"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué significa WAN?",
        opciones: [
            "Wide Area Network",
            "Wireless Area Network",
            "Web Access Network",
            "Wide Access Node"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué es la topología de una red?",
        opciones: [
            "La forma en la que están organizados los dispositivos y conexiones",
            "El sistema operativo de los ordenadores",
            "La dirección IP de los equipos",
            "El protocolo utilizado"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué describe una topología física?",
        opciones: [
            "La disposición física de los dispositivos y cables",
            "El funcionamiento de los protocolos",
            "Las direcciones IP",
            "Los programas instalados"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué caracteriza a una topología en bus?",
        opciones: [
            "Todos los dispositivos comparten un cable principal",
            "Todos los dispositivos tienen conexiones con todos",
            "Existe un dispositivo central",
            "Los dispositivos forman un círculo"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué característica tiene una topología en anillo?",
        opciones: [
            "Los dispositivos están conectados formando un círculo",
            "Existe un dispositivo central",
            "Todos los dispositivos usan un único cable lineal",
            "Todos están conectados con todos"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué ventaja puede ofrecer un doble anillo?",
        opciones: [
            "Mayor redundancia y tolerancia a fallos",
            "Menor número de conexiones",
            "Eliminación de todos los dispositivos",
            "Ausencia total de cables"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué caracteriza a una topología en estrella?",
        opciones: [
            "Los dispositivos están conectados a un dispositivo central",
            "Los dispositivos forman un círculo",
            "Todos los dispositivos están conectados entre sí",
            "Existe un único cable principal"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué caracteriza a una topología en malla?",
        opciones: [
            "Los dispositivos tienen múltiples conexiones entre ellos",
            "Existe un único dispositivo central",
            "Solo existe un cable principal",
            "Los dispositivos forman necesariamente un círculo"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Cuántas capas tiene el modelo OSI?",
        opciones: [
            "4",
            "5",
            "7",
            "8"
        ],
        correcta: 2
    },


    {
        pregunta: "¿Qué significa OSI?",
        opciones: [
            "Open Systems Interconnection",
            "Operating System Internet",
            "Open Security Interface",
            "Online Systems Internet"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué función tiene la capa de Aplicación del modelo OSI?",
        opciones: [
            "Proporciona servicios de red a las aplicaciones",
            "Transmite bits por el medio físico",
            "Gestiona direcciones MAC",
            "Realiza el encaminamiento"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué función tiene la capa de Presentación?",
        opciones: [
            "Formato, cifrado y compresión de los datos",
            "Encaminamiento de paquetes",
            "Control de cables",
            "Asignación de direcciones MAC"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué función tiene la capa de Transporte?",
        opciones: [
            "Controla la entrega de datos entre procesos",
            "Solo transmite bits",
            "Gestiona únicamente cables",
            "Solo trabaja con direcciones MAC"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué función tiene la capa de Red?",
        opciones: [
            "Realiza el direccionamiento lógico y el encaminamiento",
            "Controla el medio físico",
            "Gestiona archivos",
            "Realiza únicamente cifrado"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué dirección utiliza la capa de Enlace para identificar físicamente los dispositivos?",
        opciones: [
            "Dirección MAC",
            "Dirección IP",
            "Puerto",
            "URL"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué dispositivo trabaja principalmente con direcciones MAC?",
        opciones: [
            "Switch",
            "Router",
            "Servidor DNS",
            "Módem"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué dispositivo se utiliza para realizar el encaminamiento entre redes?",
        opciones: [
            "Router",
            "Switch",
            "Hub",
            "Tarjeta gráfica"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Cómo se llama la unidad de datos de la capa de Enlace?",
        opciones: [
            "Trama",
            "Paquete",
            "Segmento",
            "Bit"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué es la encapsulación?",
        opciones: [
            "Proceso de añadir información de control de las capas a los datos",
            "Eliminar todos los datos",
            "Apagar una conexión",
            "Cambiar una dirección IP"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué es el payload?",
        opciones: [
            "La información útil que se transporta",
            "La dirección MAC",
            "El cable utilizado",
            "El protocolo de red"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué es la desencapsulación?",
        opciones: [
            "Proceso inverso a la encapsulación al recibir los datos",
            "Crear una nueva red",
            "Asignar una dirección IP",
            "Crear un cable"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Qué es la multiplexación?",
        opciones: [
            "Permite gestionar varias comunicaciones utilizando un mismo medio",
            "Eliminar paquetes",
            "Apagar un dispositivo",
            "Crear una dirección MAC"
        ],
        correcta: 0
    },


    {
        pregunta: "¿Para qué sirve el identificador o clave de multiplexación?",
        opciones: [
            "Para identificar a qué comunicación pertenece la información",
            "Para apagar el router",
            "Para cambiar el cable",
            "Para eliminar la información"
        ],
        correcta: 0
    }

];


// ==================================================
// VARIABLES
// ==================================================

let preguntasTest = [];

let preguntaActual = 0;

let puntos = 0;

let respuestaSeleccionada = false;

let modoAleatorio = false;

let tiempo = 0;

let intervalo = null;


// ==================================================
// ELEMENTOS HTML
// ==================================================

const seleccionModo =
    document.getElementById("seleccionModo");

const test =
    document.getElementById("test");

const resultado =
    document.getElementById("resultado");


const modoNormal =
    document.getElementById("modoNormal");

const modoAleatorioBoton =
    document.getElementById("modoAleatorio");


const numeroPregunta =
    document.getElementById("numeroPregunta");

const contador =
    document.getElementById("contador");

const puntuacion =
    document.getElementById("puntuacion");

const barraProgreso =
    document.getElementById("barra-progreso");


const pregunta =
    document.getElementById("pregunta");

const opciones =
    document.getElementById("opciones");


const botonSiguiente =
    document.getElementById("botonSiguiente");

const botonReiniciar =
    document.getElementById("botonReiniciar");


const nota =
    document.getElementById("nota");

const mensajeResultado =
    document.getElementById("mensajeResultado");

const tiempoFinal =
    document.getElementById("tiempoFinal");


// ==================================================
// MEZCLAR PREGUNTAS
// ==================================================

function mezclarPreguntas(array) {

    let copia = [...array];


    for (let i = copia.length - 1; i > 0; i--) {

        let posicion =
            Math.floor(Math.random() * (i + 1));


        let temporal = copia[i];


        copia[i] =
            copia[posicion];


        copia[posicion] =
            temporal;

    }


    return copia;
}


// ==================================================
// INICIAR TEST
// ==================================================

function iniciarTest(aleatorio) {

    modoAleatorio = aleatorio;


    preguntaActual = 0;

    puntos = 0;


    // Reiniciar contador

    tiempo = 0;


    clearInterval(intervalo);


    contador.textContent =
        "⏱️ 00:00";


    // Elegir orden

    if (modoAleatorio) {

        preguntasTest =
            mezclarPreguntas(preguntas);

    } else {

        preguntasTest =
            [...preguntas];

    }


    // Mostrar test

    seleccionModo.classList.add("oculto");

    resultado.classList.add("oculto");

    test.classList.remove("oculto");


    puntuacion.textContent =
        "Puntos: 0";


    // Iniciar contador

    intervalo = setInterval(function () {

        tiempo++;


        let minutos =
            Math.floor(tiempo / 60);


        let segundos =
            tiempo % 60;


        let minutosTexto =
            minutos.toString().padStart(2, "0");


        let segundosTexto =
            segundos.toString().padStart(2, "0");


        contador.textContent =
            `⏱️ ${minutosTexto}:${segundosTexto}`;


    }, 1000);


    mostrarPregunta();

}


// ==================================================
// MOSTRAR PREGUNTA
// ==================================================

function mostrarPregunta() {

    respuestaSeleccionada = false;


    botonSiguiente.disabled = true;


    let preguntaActualObjeto =
        preguntasTest[preguntaActual];


    numeroPregunta.textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntasTest.length}`;


    pregunta.textContent =
        preguntaActualObjeto.pregunta;


    opciones.innerHTML = "";


    preguntaActualObjeto.opciones.forEach(
        (opcion, indice) => {

            const boton =
                document.createElement("button");


            boton.classList.add("opcion");


            boton.textContent =
                opcion;


            boton.addEventListener(
                "click",
                function () {

                    seleccionarRespuesta(
                        indice,
                        boton
                    );

                }
            );


            opciones.appendChild(boton);

        }
    );


    let progreso =
        ((preguntaActual + 1)
        / preguntasTest.length) * 100;


    barraProgreso.style.width =
        progreso + "%";

}


// ==================================================
// SELECCIONAR RESPUESTA
// ==================================================

function seleccionarRespuesta(
    indice,
    botonSeleccionado
) {

    if (respuestaSeleccionada) {

        return;

    }


    respuestaSeleccionada = true;


    let preguntaActualObjeto =
        preguntasTest[preguntaActual];


    const botones =
        document.querySelectorAll(".opcion");


    botones.forEach(
        (boton, posicion) => {

            if (
                posicion ===
                preguntaActualObjeto.correcta
            ) {

                boton.classList.add(
                    "correcta"
                );

            }

        }
    );


    if (
        indice ===
        preguntaActualObjeto.correcta
    ) {

        puntos++;


        puntuacion.textContent =
            `Puntos: ${puntos}`;

    } else {

        botonSeleccionado.classList.add(
            "incorrecta"
        );

    }


    botonSiguiente.disabled =
        false;

}


// ==================================================
// SIGUIENTE PREGUNTA
// ==================================================

botonSiguiente.addEventListener(
    "click",
    function () {

        preguntaActual++;


        if (
            preguntaActual <
            preguntasTest.length
        ) {

            mostrarPregunta();

        } else {

            mostrarResultado();

        }

    }
);


// ==================================================
// MOSTRAR RESULTADO
// ==================================================

function mostrarResultado() {

    // Parar contador

    clearInterval(intervalo);


    // Ocultar test

    test.classList.add("oculto");


    // Mostrar resultado

    resultado.classList.remove("oculto");


    // Calcular nota

    let notaFinal =
        (puntos / preguntasTest.length) * 10;


    nota.textContent =
        notaFinal.toFixed(2) + "/10";


    mensajeResultado.textContent =
        `Has acertado ${puntos} de ${preguntasTest.length} preguntas.`;


    // Mostrar tiempo

    let minutos =
        Math.floor(tiempo / 60);


    let segundos =
        tiempo % 60;


    let minutosTexto =
        minutos.toString().padStart(2, "0");


    let segundosTexto =
        segundos.toString().padStart(2, "0");


    tiempoFinal.textContent =
        `⏱️ Tiempo empleado: ${minutosTexto}:${segundosTexto}`;

}


// ==================================================
// VOLVER A ELEGIR MODO
// ==================================================

botonReiniciar.addEventListener(
    "click",
    function () {

        clearInterval(intervalo);


        resultado.classList.add(
            "oculto"
        );


        seleccionModo.classList.remove(
            "oculto"
        );


        barraProgreso.style.width =
            "0%";


        contador.textContent =
            "⏱️ 00:00";

    }
);


// ==================================================
// BOTÓN MODO NORMAL
// ==================================================

modoNormal.addEventListener(
    "click",
    function () {

        iniciarTest(false);

    }
);


// ==================================================
// BOTÓN MODO ALEATORIO
// ==================================================

modoAleatorioBoton.addEventListener(
    "click",
    function () {

        iniciarTest(true);

    }
);
