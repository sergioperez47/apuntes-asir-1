// ========================================
// PREGUNTAS DE LA UNIDAD 1
// ========================================

const preguntas = [

    {
        pregunta: "¿Qué es una red de ordenadores?",

        opciones: [
            "Un conjunto de programas instalados en un ordenador",

            "Un sistema de elementos interconectados mediante un medio físico por el que se transmite información",

            "Un único ordenador conectado a Internet",

            "Un sistema operativo para administrar redes"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Cuál de estos elementos forma parte de un proceso de comunicación?",

        opciones: [
            "Emisor",

            "Receptor",

            "Medio de transmisión",

            "Todos los anteriores"
        ],

        correcta: 3
    },


    {
        pregunta: "¿Qué es un protocolo de comunicación?",

        opciones: [
            "Un tipo de cable",

            "Un conjunto de reglas que deben cumplir el emisor y el receptor",

            "Una dirección IP",

            "Un dispositivo de red"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Cuál de estos es un medio de transmisión guiado?",

        opciones: [
            "El aire",

            "Las ondas de radio",

            "Un cable",

            "El espacio"
        ],

        correcta: 2
    },


    {
        pregunta: "¿Cuál de estos es un medio de transmisión no guiado?",

        opciones: [
            "Cable de cobre",

            "Fibra óptica",

            "Cable coaxial",

            "Aire"
        ],

        correcta: 3
    },


    {
        pregunta: "¿Qué característica permite que una red pueda crecer y adaptarse al aumento de la demanda?",

        opciones: [
            "Seguridad",

            "Escalabilidad",

            "Confidencialidad",

            "Integridad"
        ],

        correcta: 1
    },


    {
        pregunta: "En una transmisión SIMPLEX, ¿en qué sentido viaja la información?",

        opciones: [
            "En ambos sentidos simultáneamente",

            "En ambos sentidos alternativamente",

            "Solo en un sentido",

            "En ningún sentido"
        ],

        correcta: 2
    },


    {
        pregunta: "¿Cuál es un ejemplo de comunicación SEMIDUPLEX?",

        opciones: [
            "Una conversación telefónica",

            "Un walkie-talkie",

            "Una emisión de televisión",

            "Una descarga de Internet"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué caracteriza a una comunicación DUPLEX?",

        opciones: [
            "Solo permite transmitir información en un sentido",

            "Permite transmitir en ambos sentidos de forma alternativa",

            "Permite transmitir en ambos sentidos a la vez",

            "No necesita un medio de transmisión"
        ],

        correcta: 2
    },


    {
        pregunta: "¿Qué ocurre en una conmutación de circuitos?",

        opciones: [
            "La información se fragmenta y cada fragmento toma un camino diferente",

            "Se crea previamente una vía de comunicación entre los terminales",

            "El mensaje se envía a todos los equipos",

            "No existe ningún camino de comunicación"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué ocurre en la conmutación de paquetes?",

        opciones: [
            "La información se transmite siempre como un único bloque",

            "La información se fragmenta y los fragmentos pueden seguir caminos diferentes",

            "Se crea un circuito físico exclusivo",

            "La información se envía únicamente al primer equipo"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué caracteriza principalmente a una red P2P?",

        opciones: [
            "Existe un servidor central obligatorio",

            "Todos los equipos tienen el mismo papel",

            "Solo un ordenador puede enviar información",

            "Los equipos no pueden comunicarse entre sí"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué significa P2P?",

        opciones: [
            "Point to Protocol",

            "Peer To Peer",

            "Public To Private",

            "Protocol To Protocol"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué tipo de red corresponde a un área personal?",

        opciones: [
            "PAN",

            "LAN",

            "MAN",

            "WAN"
        ],

        correcta: 0
    },


    {
        pregunta: "¿Qué tipo de red corresponde a un área local?",

        opciones: [
            "PAN",

            "LAN",

            "MAN",

            "WAN"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué tipo de red corresponde a un área metropolitana?",

        opciones: [
            "PAN",

            "LAN",

            "MAN",

            "WAN"
        ],

        correcta: 2
    },


    {
        pregunta: "¿Qué tipo de red puede abarcar una zona geográfica muy extensa?",

        opciones: [
            "PAN",

            "LAN",

            "MAN",

            "WAN"
        ],

        correcta: 3
    },


    {
        pregunta: "¿Qué define la topología de una red?",

        opciones: [
            "El sistema operativo utilizado",

            "La estructura que tendrá la red",

            "La dirección IP de los equipos",

            "El fabricante de los ordenadores"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué define una topología física?",

        opciones: [
            "Cómo se comunican lógicamente los equipos",

            "La disposición real de cables, ordenadores y periféricos",

            "Los protocolos utilizados",

            "Las direcciones IP"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué caracteriza a una topología en bus?",

        opciones: [
            "Cada equipo tiene una conexión directa con todos los demás",

            "Todos los equipos se conectan a un cable principal",

            "Todos los equipos se conectan a dos anillos",

            "No utiliza cables"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Cuál es un inconveniente de la topología en bus?",

        opciones: [
            "Es demasiado escalable",

            "Necesita muchísimos cables",

            "Si se rompe el cable, la red puede caer",

            "No permite conectar ordenadores"
        ],

        correcta: 2
    },


    {
        pregunta: "En una topología en anillo, ¿cómo se conectan los nodos?",

        opciones: [
            "Todos a un switch central",

            "Cada nodo con el siguiente y el último con el primero",

            "Todos directamente entre sí",

            "Todos a un único cable principal"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué ventaja ofrece una topología de doble anillo?",

        opciones: [
            "No utiliza cableado",

            "Redundancia y tolerancia a fallos de uno de los anillos",

            "No necesita dispositivos",

            "Es más barata que un anillo"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué caracteriza a una topología estrella?",

        opciones: [
            "Todos los equipos se conectan a un concentrador",

            "Todos los equipos se conectan directamente entre sí",

            "Todos los equipos utilizan dos anillos",

            "Todos utilizan un único cable principal"
        ],

        correcta: 0
    },


    {
        pregunta: "¿Qué dispositivos pueden actuar como concentrador en una topología estrella?",

        opciones: [
            "Switch o HUB",

            "Solo un router",

            "Solo un servidor",

            "Una tarjeta gráfica"
        ],

        correcta: 0
    },


    {
        pregunta: "¿Cuál es un punto de fallo de una topología estrella?",

        opciones: [
            "Cada ordenador individual",

            "El HUB o concentrador",

            "El teclado",

            "La dirección IP"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué ventaja principal tiene una topología en malla?",

        opciones: [
            "Utiliza muy poco cableado",

            "Tiene caminos alternativos y tolerancia a fallos",

            "Solo permite un dispositivo",

            "No necesita conexiones"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Cuántas capas tiene el modelo OSI?",

        opciones: [
            "4",

            "5",

            "6",

            "7"
        ],

        correcta: 3
    },


    {
        pregunta: "¿Qué significan las siglas OSI?",

        opciones: [
            "Open System Interconnection",

            "Operating System Internet",

            "Open Software Internet",

            "Online System Interface"
        ],

        correcta: 0
    },


    {
        pregunta: "¿Cuál es la capa más cercana al usuario en el modelo OSI?",

        opciones: [
            "Capa 1 - Física",

            "Capa 3 - Red",

            "Capa 7 - Aplicación",

            "Capa 4 - Transporte"
        ],

        correcta: 2
    },


    {
        pregunta: "¿Qué capa del modelo OSI se encarga del direccionamiento y enrutamiento?",

        opciones: [
            "Capa 1 - Física",

            "Capa 2 - Enlace",

            "Capa 3 - Red",

            "Capa 7 - Aplicación"
        ],

        correcta: 2
    },


    {
        pregunta: "¿Qué tipo de dirección se utiliza en la capa 2?",

        opciones: [
            "Dirección IP",

            "Dirección MAC",

            "Dirección DNS",

            "Dirección HTTP"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué dispositivo trabaja principalmente en la capa 2 según tus apuntes?",

        opciones: [
            "Router",

            "Switch",

            "Servidor DNS",

            "Módem"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué dispositivo trabaja en la capa 3 según tus apuntes?",

        opciones: [
            "HUB",

            "Switch",

            "Router",

            "Tarjeta de sonido"
        ],

        correcta: 2
    },


    {
        pregunta: "¿Qué unidad de información se utiliza en la capa 2?",

        opciones: [
            "Bits",

            "Frames o tramas",

            "Paquetes",

            "Segmentos"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué ocurre durante la encapsulación?",

        opciones: [
            "Se eliminan todos los datos",

            "Se añade información de control a los datos al pasar por las capas",

            "Se apaga la conexión",

            "Se cambia la dirección física por una IP"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué es el payload?",

        opciones: [
            "La dirección MAC",

            "La información útil que se quiere transmitir",

            "El dispositivo que transmite",

            "La dirección IP del router"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué ocurre durante la desencapsulación?",

        opciones: [
            "Se añaden nuevas cabeceras",

            "Se eliminan las informaciones añadidas durante la encapsulación",

            "Se cambia el protocolo por otro",

            "Se elimina el mensaje original"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué utiliza el multiplexamiento para identificar a qué protocolo o servicio pertenece una información?",

        opciones: [
            "Una llave o identificador de multiplexación",

            "Una dirección física",

            "Un cable diferente",

            "Una topología diferente"
        ],

        correcta: 0
    }

];


// ========================================
// VARIABLES
// ========================================

let preguntaActual = 0;

let puntos = 0;

let respuestaSeleccionada = false;


// ========================================
// ELEMENTOS HTML
// ========================================

const elementoPregunta =
    document.getElementById("pregunta");

const elementoOpciones =
    document.getElementById("opciones");

const numeroPregunta =
    document.getElementById("numeroPregunta");

const puntuacion =
    document.getElementById("puntuacion");

const botonSiguiente =
    document.getElementById("botonSiguiente");

const barraProgreso =
    document.getElementById("barra-progreso");

const panel =
    document.querySelector(".panel");

const resultado =
    document.getElementById("resultado");

const nota =
    document.getElementById("nota");

const mensajeResultado =
    document.getElementById("mensajeResultado");

const botonReiniciar =
    document.getElementById("botonReiniciar");


// ========================================
// MOSTRAR PREGUNTA
// ========================================

function mostrarPregunta() {

    respuestaSeleccionada = false;

    botonSiguiente.disabled = true;


    const pregunta =
        preguntas[preguntaActual];


    elementoPregunta.textContent =
        pregunta.pregunta;


    elementoOpciones.innerHTML = "";


    numeroPregunta.textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;


    puntuacion.textContent =
        `Puntos: ${puntos}`;


    const progreso =
        (preguntaActual / preguntas.length) * 100;


    barraProgreso.style.width =
        `${progreso}%`;


    pregunta.opciones.forEach(
        (opcion, indice) => {

            const boton =
                document.createElement("button");


            boton.classList.add("opcion");


            boton.textContent =
                opcion;


            boton.addEventListener(
                "click",
                () => {

                    seleccionarRespuesta(
                        indice,
                        boton
                    );

                }
            );


            elementoOpciones.appendChild(
                boton
            );

        }
    );

}


// ========================================
// SELECCIONAR RESPUESTA
// ========================================

function seleccionarRespuesta(
    indice,
    botonSeleccionado
) {

    if (respuestaSeleccionada) {

        return;

    }


    respuestaSeleccionada = true;


    const pregunta =
        preguntas[preguntaActual];


    const botones =
        document.querySelectorAll(".opcion");


    if (indice === pregunta.correcta) {

        puntos++;

        botonSeleccionado.classList.add(
            "correcta"
        );

    }

    else {

        botonSeleccionado.classList.add(
            "incorrecta"
        );


        botones[
            pregunta.correcta
        ].classList.add(
            "correcta"
        );

    }


    botones.forEach(
        boton => {

            boton.disabled = true;

        }
    );


    puntuacion.textContent =
        `Puntos: ${puntos}`;


    botonSiguiente.disabled = false;

}


// ========================================
// SIGUIENTE PREGUNTA
// ========================================

botonSiguiente.addEventListener(
    "click",
    () => {

        preguntaActual++;


        if (
            preguntaActual <
            preguntas.length
        ) {

            mostrarPregunta();

        }

        else {

            mostrarResultado();

        }

    }
);


// ========================================
// MOSTRAR RESULTADO
// ========================================

function mostrarResultado() {

    panel.classList.add(
        "oculto"
    );


    resultado.classList.remove(
        "oculto"
    );


    const notaFinal =
        (puntos / preguntas.length) * 10;


    nota.textContent =
        `${notaFinal.toFixed(1)}/10`;


    if (notaFinal >= 9) {

        mensajeResultado.textContent =
            `🔥 ¡Excelente! Has acertado ${puntos} de ${preguntas.length}.`;

    }

    else if (notaFinal >= 7) {

        mensajeResultado.textContent =
            `👏 ¡Muy bien! Has acertado ${puntos} de ${preguntas.length}.`;

    }

    else if (notaFinal >= 5) {

        mensajeResultado.textContent =
            `👍 Has aprobado con ${puntos} aciertos de ${preguntas.length}.`;

    }

    else {

        mensajeResultado.textContent =
            `📚 Necesitas repasar un poco más. Has acertado ${puntos} de ${preguntas.length}.`;

    }

}


// ========================================
// REINICIAR TEST
// ========================================

botonReiniciar.addEventListener(
    "click",
    () => {

        preguntaActual = 0;

        puntos = 0;

        panel.classList.remove(
            "oculto"
        );

        resultado.classList.add(
            "oculto"
        );

        mostrarPregunta();

    }
);


// ========================================
// INICIAR TEST
// ========================================

mostrarPregunta();
