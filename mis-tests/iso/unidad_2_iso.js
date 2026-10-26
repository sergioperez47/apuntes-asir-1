const preguntas = [
    {
        pregunta: "¿Qué es la virtualización?",
        opciones: [
            "Instalar únicamente programas de oficina",
            "Conectar físicamente dos ordenadores",
            "Eliminar el sistema operativo anfitrión",
            "Crear versiones virtuales de recursos informáticos mediante software",
        ],
        correcta: 3
    },
    {
        pregunta: "¿Qué es una máquina virtual (VM)?",
        opciones: [
            "Un entorno de software que emula un sistema informático",
            "Un componente físico que sustituye a la CPU",
            "Un tipo de cable de red",
            "Una aplicación que solo funciona en móviles",
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué función tiene el hipervisor?",
        opciones: [
            "Comprimir archivos de vídeo",
            "Crear y gestionar máquinas virtuales",
            "Editar documentos de texto",
            "Asignar nombres de dominio públicos",
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué caracteriza a un hipervisor de tipo 1?",
        opciones: [
            "Necesita obligatoriamente Windows como anfitrión",
            "Solo sirve para ejecutar contenedores Docker",
            "Se ejecuta directamente sobre el hardware",
            "Se ejecuta siempre dentro de un navegador",
        ],
        correcta: 2
    },
    {
        pregunta: "¿Cuál es un ejemplo de hipervisor de tipo 2 según los apuntes?",
        opciones: [
            "VMware ESXi",
            "Citrix XenServer",
            "Un servidor DHCP",
            "VirtualBox",
        ],
        correcta: 3
    },
    {
        pregunta: "¿Qué es el sistema anfitrión (host)?",
        opciones: [
            "El sistema operativo del equipo físico que aloja la virtualización",
            "El sistema operativo instalado dentro de una VM",
            "Una instantánea de la máquina virtual",
            "El archivo de configuración de Docker",
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es una desventaja de la virtualización?",
        opciones: [
            "Siempre reduce la flexibilidad",
            "El servidor físico puede convertirse en un único punto de fallo",
            "Impide crear entornos de prueba",
            "No permite ejecutar varios sistemas",
        ],
        correcta: 1
    },
    {
        pregunta: "¿Para qué sirve una instantánea (snapshot) de una máquina virtual?",
        opciones: [
            "Convertir una VM en un router físico",
            "Eliminar el sistema operativo invitado",
            "Guardar el estado de la máquina para poder volver a él",
            "Aumentar físicamente la memoria RAM del equipo",
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué formato de disco virtual es el nativo de VirtualBox?",
        opciones: [
            "VMDK",
            "VHD",
            "RAW",
            "VDI",
        ],
        correcta: 3
    },
    {
        pregunta: "¿Qué formato de disco virtual se asocia con VMware?",
        opciones: [
            "VMDK",
            "VDI",
            "VHD",
            "ISO",
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué modo de red permite a una VM acceder a Internet a través del anfitrión y normalmente la oculta de la red física?",
        opciones: [
            "Solo-anfitrión",
            "NAT",
            "Adaptador puente",
            "Red interna",
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué modo de red conecta máquinas virtuales entre sí en una red aislada sin salida exterior?",
        opciones: [
            "NAT",
            "No conectado",
            "Red interna",
            "Adaptador puente",
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué hace el modo Adaptador puente?",
        opciones: [
            "Aísla completamente la VM de cualquier red",
            "Permite conexión únicamente entre el host y la VM",
            "Desactiva la tarjeta de red virtual",
            "Conecta la VM a la red física como si fuera otro equipo de esa red",
        ],
        correcta: 3
    },
    {
        pregunta: "¿Para qué sirven las Guest Additions?",
        opciones: [
            "Mejorar la integración entre el sistema anfitrión y el invitado",
            "Crear cuentas de correo electrónico",
            "Reemplazar el hipervisor",
            "Asignar direcciones IP públicas automáticamente",
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué permite una carpeta compartida de VirtualBox?",
        opciones: [
            "Crear una red interna sin adaptadores",
            "Intercambiar archivos entre el anfitrión y la máquina virtual",
            "Compartir automáticamente la CPU con Internet",
            "Convertir un disco VDI en una ISO",
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es Docker?",
        opciones: [
            "Un tipo de hipervisor de tipo 1",
            "Un protocolo de resolución de nombres",
            "Una plataforma para ejecutar aplicaciones en contenedores",
            "Un formato de disco virtual exclusivo de VirtualBox",
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué es una imagen Docker?",
        opciones: [
            "Un contenedor que siempre está en ejecución",
            "Una captura de pantalla de una VM",
            "Un sistema operativo anfitrión completo",
            "Una plantilla a partir de la cual se crean contenedores",
        ],
        correcta: 3
    },
    {
        pregunta: "¿Qué diferencia principal hay entre una máquina virtual y un contenedor según los apuntes?",
        opciones: [
            "La VM incluye un sistema operativo completo; el contenedor comparte el kernel del anfitrión",
            "El contenedor necesita siempre más recursos que una VM",
            "Las VM no pueden ejecutar aplicaciones",
            "Los contenedores requieren un equipo físico independiente",
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué modelo cloud ofrece aplicaciones listas para utilizar?",
        opciones: [
            "NAT",
            "SaaS",
            "PaaS",
            "IaaS",
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué modelo cloud ofrece infraestructura virtualizada, como máquinas, redes y almacenamiento?",
        opciones: [
            "PaaS",
            "Guest Additions",
            "IaaS",
            "SaaS",
        ],
        correcta: 2
    },
];
let preguntasTest = [];
let indiceActual = 0;
let respuestasUsuario = [];
let modoElegido = "normal";
let segundos = 0;
let intervalo = null;
let testIniciado = false;

const seleccionModo = document.getElementById("seleccionModo");
const seccionTest = document.getElementById("test");
const seccionResultado = document.getElementById("resultado");
const elementoPregunta = document.getElementById("pregunta");
const elementoOpciones = document.getElementById("opciones");
const numeroPregunta = document.getElementById("numeroPregunta");
const contador = document.getElementById("contador");
const puntuacion = document.getElementById("puntuacion");
const barraProgreso = document.getElementById("barra-progreso");
const botonAnterior = document.getElementById("botonAnterior");
const botonSiguiente = document.getElementById("botonSiguiente");
const botonReiniciarTest = document.getElementById("botonReiniciarTest");
const botonReiniciar = document.getElementById("botonReiniciar");

document.getElementById("modoNormal").addEventListener("click", () => iniciarTest("normal"));
document.getElementById("modoAleatorio").addEventListener("click", () => iniciarTest("aleatorio"));
botonAnterior.addEventListener("click", anteriorPregunta);
botonSiguiente.addEventListener("click", siguientePregunta);
botonReiniciarTest.addEventListener("click", volverASeleccion);
botonReiniciar.addEventListener("click", volverASeleccion);

function iniciarTest(modo) {
    modoElegido = modo;
    preguntasTest = [...preguntas];
    if (modo === "aleatorio") {
        preguntasTest.sort(() => Math.random() - 0.5);
    }
    indiceActual = 0;
    respuestasUsuario = new Array(preguntasTest.length).fill(null);
    segundos = 0;
    testIniciado = true;
    clearInterval(intervalo);
    intervalo = setInterval(actualizarContador, 1000);
    seleccionModo.classList.add("oculto");
    seccionResultado.classList.add("oculto");
    seccionTest.classList.remove("oculto");
    mostrarPregunta();
}

function mostrarPregunta() {
    const preguntaActual = preguntasTest[indiceActual];
    numeroPregunta.textContent = `Pregunta ${indiceActual + 1} de ${preguntasTest.length}`;
    elementoPregunta.textContent = preguntaActual.pregunta;
    elementoOpciones.innerHTML = "";
    preguntaActual.opciones.forEach((opcion, indice) => {
        const boton = document.createElement("button");
        boton.className = "opcion";
        boton.textContent = opcion;
        if (respuestasUsuario[indiceActual] !== null) {
            boton.disabled = true;
            if (indice === preguntaActual.correcta) {
                boton.classList.add("correcta");
            } else if (indice === respuestasUsuario[indiceActual]) {
                boton.classList.add("incorrecta");
            }
        }
        boton.addEventListener("click", () => seleccionarRespuesta(indice));
        elementoOpciones.appendChild(boton);
    });
    botonAnterior.disabled = indiceActual === 0;
    botonSiguiente.disabled = respuestasUsuario[indiceActual] === null;
    botonSiguiente.textContent = indiceActual === preguntasTest.length - 1 ? "Finalizar test →" : "Siguiente →";
    barraProgreso.style.width = `${((indiceActual + 1) / preguntasTest.length) * 100}%`;
    actualizarPuntuacion();
}

function seleccionarRespuesta(indice) {
    if (respuestasUsuario[indiceActual] !== null) return;
    respuestasUsuario[indiceActual] = indice;
    const preguntaActual = preguntasTest[indiceActual];
    const botones = elementoOpciones.querySelectorAll("button");
    botones.forEach((boton, i) => {
        boton.disabled = true;
        if (i === preguntaActual.correcta) boton.classList.add("correcta");
        else if (i === indice) boton.classList.add("incorrecta");
    });
    botonSiguiente.disabled = false;
    actualizarPuntuacion();
}

function siguientePregunta() {
    if (respuestasUsuario[indiceActual] === null) return;
    if (indiceActual < preguntasTest.length - 1) {
        indiceActual++;
        mostrarPregunta();
    } else {
        finalizarTest();
    }
}

function anteriorPregunta() {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarPregunta();
    }
}

function actualizarPuntuacion() {
    let aciertos = 0;
    respuestasUsuario.forEach((respuesta, i) => {
        if (respuesta !== null && respuesta === preguntasTest[i].correcta) aciertos++;
    });
    puntuacion.textContent = `Puntos: ${aciertos}`;
}

function actualizarContador() {
    segundos++;
    const minutos = String(Math.floor(segundos / 60)).padStart(2, "0");
    const segundosRestantes = String(segundos % 60).padStart(2, "0");
    contador.textContent = `⏱️ ${minutos}:${segundosRestantes}`;
}

function finalizarTest() {
    clearInterval(intervalo);
    seccionTest.classList.add("oculto");
    seccionResultado.classList.remove("oculto");
    const aciertos = respuestasUsuario.reduce((total, respuesta, i) =>
        total + (respuesta === preguntasTest[i].correcta ? 1 : 0), 0);
    document.getElementById("nota").textContent = `${aciertos}/${preguntasTest.length}`;
    document.getElementById("mensajeResultado").textContent =
        aciertos >= preguntasTest.length * 0.5 ? "¡Buen trabajo! Sigue repasando para afianzar los conceptos." : "Repasa los apuntes y vuelve a intentarlo.";
    document.getElementById("tiempoFinal").textContent = `Tiempo empleado: ${contador.textContent.replace("⏱️ ", "")}`;
}

function volverASeleccion() {
    clearInterval(intervalo);
    testIniciado = false;
    seccionTest.classList.add("oculto");
    seccionResultado.classList.add("oculto");
    seleccionModo.classList.remove("oculto");
    contador.textContent = "⏱️ 00:00";
    barraProgreso.style.width = "0%";
    puntuacion.textContent = "Puntos: 0";
}
