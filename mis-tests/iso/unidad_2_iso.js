const preguntas = [
    // ==================================================
    // VIRTUALBOX
    // ==================================================

    {
        pregunta: "¿Qué es VirtualBox?",
        opciones: [
            "Un software de virtualización que permite ejecutar sistemas operativos invitados dentro de otro sistema operativo",
            "Un sistema operativo exclusivo para servidores",
            "Un programa para editar discos físicos",
            "Un protocolo de Internet"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cómo se llama el sistema operativo físico en el que se ejecuta VirtualBox?",
        opciones: [
            "Guest o huésped",
            "Host o anfitrión",
            "Hipervisor invitado",
            "Contenedor"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Cómo se llama el sistema operativo instalado dentro de una máquina virtual?",
        opciones: [
            "Host",
            "Anfitrión",
            "Guest o huésped",
            "Servidor físico"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué ocurre con la tarjeta de red cuando se configura como No conectado?",
        opciones: [
            "Se conecta directamente a Internet",
            "Se conecta a todas las máquinas virtuales",
            "Utiliza automáticamente el adaptador puente",
            "Está presente, pero no conectada, como si el cable estuviera desconectado"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué permite el modo NAT de VirtualBox?",
        opciones: [
            "Que la máquina virtual acceda a Internet a través del anfitrión",
            "Que la máquina virtual quede completamente aislada sin conexión",
            "Que la máquina virtual sustituya al sistema anfitrión",
            "Que todas las máquinas virtuales utilicen obligatoriamente la misma IP"
        ],
        correcta: 0
    },

    {
        pregunta: "Según los apuntes, ¿qué rango de direcciones utiliza habitualmente el modo NAT de VirtualBox?",
        opciones: [
            "192.168.1.x exclusivamente",
            "10.0.0.x",
            "172.0.0.x exclusivamente",
            "8.8.8.x"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué característica diferencia a Red NAT del modo NAT básico según los apuntes?",
        opciones: [
            "No permite acceder a Internet",
            "Desactiva la tarjeta de red",
            "Es similar a NAT, pero incorpora más características",
            "Solo permite conectar el anfitrión con una máquina virtual sin Internet"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué hace el Adaptador Puente?",
        opciones: [
            "Aísla la máquina virtual de todas las redes",
            "Desconecta la tarjeta de red",
            "Crea una red exclusiva entre el anfitrión y la máquina virtual",
            "Permite que la máquina virtual utilice el adaptador físico del anfitrión y se conecte a la misma red"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué rango de direcciones IP suele utilizar una máquina virtual con Adaptador Puente?",
        opciones: [
            "El rango de la red a la que está conectado el anfitrión",
            "Siempre el rango 10.0.0.x",
            "Siempre el rango 127.0.0.x",
            "Únicamente direcciones públicas"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Para qué sirve el modo Red Interna?",
        opciones: [
            "Para conectar la máquina virtual directamente a Internet",
            "Para interconectar máquinas virtuales en una red aislada del exterior",
            "Para conectar exclusivamente la máquina virtual con el anfitrión",
            "Para desactivar todos los adaptadores de red"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué permite el Adaptador Solo-Anfitrión?",
        opciones: [
            "Conectar la máquina virtual a Internet obligatoriamente",
            "Conectar la máquina virtual a cualquier equipo de la red física",
            "Establecer una conexión entre el anfitrión y la máquina virtual",
            "Crear una red interna entre máquinas virtuales sin conexión con el anfitrión"
        ],
        correcta: 2
    },

    // ==================================================
    // DISCOS VIRTUALES Y FUNCIONES
    // ==================================================

    {
        pregunta: "¿Cuál es el formato de disco virtual nativo de VirtualBox?",
        opciones: [
            "VMDK",
            "VHD",
            "RAW",
            "VDI"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué formato de disco virtual está asociado a VMware?",
        opciones: [
            "VMDK",
            "VDI",
            "VHD",
            "OVA"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué formato de disco está asociado a Microsoft Virtual PC según los apuntes?",
        opciones: [
            "VDI",
            "VHD",
            "VMDK",
            "OVF"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué representa el formato RAW en los discos virtuales?",
        opciones: [
            "Un archivo exclusivo para guardar instantáneas",
            "Un formato exclusivo de VMware",
            "Una representación de disco sin un formato de contenedor virtual específico",
            "Un formato de exportación de máquinas virtuales"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Para qué sirve una instantánea o snapshot de una máquina virtual?",
        opciones: [
            "Para aumentar físicamente la memoria RAM del ordenador",
            "Para convertir automáticamente una VM en un contenedor",
            "Para cambiar el anfitrión por el huésped",
            "Para guardar el estado de la máquina virtual y facilitar la vuelta a un estado anterior"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Para qué sirve clonar una máquina virtual?",
        opciones: [
            "Para crear una copia de una máquina virtual",
            "Para eliminar el sistema operativo huésped",
            "Para desconectar todas las redes",
            "Para convertir la máquina virtual en hardware físico"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué permiten las funciones de exportación e importación de máquinas virtuales?",
        opciones: [
            "Aumentar la velocidad física de la CPU",
            "Empaquetar o trasladar máquinas virtuales entre entornos compatibles, por ejemplo mediante OVF u OVA",
            "Convertir cualquier archivo en memoria RAM",
            "Crear una conexión NAT automáticamente en cualquier red"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Para qué sirven las Guest Additions de VirtualBox?",
        opciones: [
            "Para sustituir el sistema operativo anfitrión",
            "Para crear exclusivamente discos VMDK",
            "Para mejorar la integración y las funciones de interacción entre el sistema huésped y VirtualBox",
            "Para eliminar la necesidad de instalar un sistema operativo"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué permiten las carpetas compartidas de VirtualBox?",
        opciones: [
            "Compartir obligatoriamente la memoria RAM física",
            "Convertir una carpeta en una dirección IP",
            "Sustituir el disco virtual por un disco físico",
            "Intercambiar archivos entre el anfitrión y la máquina virtual"
        ],
        correcta: 3
    },

    // ==================================================
    // CONCEPTO DE VIRTUALIZACIÓN
    // ==================================================

    {
        pregunta: "¿Qué es la virtualización?",
        opciones: [
            "Crear versiones virtuales de recursos tecnológicos mediante software especializado",
            "Instalar siempre un sistema operativo en cada ordenador físico",
            "Conectar todos los equipos a una misma red pública",
            "Convertir todos los programas en archivos de texto"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es una máquina virtual (VM)?",
        opciones: [
            "Un ordenador físico sin sistema operativo",
            "Un ordenador virtual con sistema operativo y aplicaciones sobre hardware simulado",
            "Un dispositivo que solo sirve para almacenar archivos",
            "Un programa que únicamente funciona en Internet"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Cuál es la función principal de un hipervisor?",
        opciones: [
            "Crear páginas web",
            "Gestionar exclusivamente archivos de texto",
            "Permitir ejecutar varias máquinas virtuales y asignarles recursos",
            "Sustituir todos los componentes físicos del ordenador"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué caracteriza a un hipervisor de tipo 1?",
        opciones: [
            "Se ejecuta únicamente dentro de un navegador",
            "Necesita obligatoriamente VirtualBox como anfitrión",
            "Se ejecuta como una aplicación convencional sobre un sistema operativo anfitrión",
            "Se ejecuta directamente sobre el hardware físico"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Cuál de los siguientes es un ejemplo de hipervisor de tipo 1 mencionado en los apuntes?",
        opciones: [
            "VMware ESXi",
            "VirtualBox",
            "VMware Workstation",
            "Parallels"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué caracteriza a un hipervisor de tipo 2?",
        opciones: [
            "Se ejecuta directamente sobre el hardware sin sistema anfitrión",
            "Se ejecuta como un programa sobre el sistema operativo anfitrión",
            "Solo puede ejecutar contenedores Docker",
            "No permite crear máquinas virtuales"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Cuál de los siguientes es un ejemplo de hipervisor de tipo 2 mencionado en los apuntes?",
        opciones: [
            "Microsoft Hyper-V",
            "VMware ESXi",
            "VirtualBox",
            "Citrix XenServer"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Cuál es una ventaja de la virtualización?",
        opciones: [
            "Elimina todos los posibles fallos del hardware",
            "Hace innecesario disponer de memoria RAM",
            "Evita cualquier consumo de recursos",
            "Permite aprovechar mejor los recursos y crear entornos de prueba"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Cuál es una desventaja de la virtualización?",
        opciones: [
            "El servidor físico puede convertirse en un único punto de fallo",
            "No permite ejecutar sistemas operativos",
            "Impide crear entornos de prueba",
            "Obliga a utilizar un ordenador físico distinto por aplicación"
        ],
        correcta: 0
    },

    // ==================================================
    // DOCKER Y CONTENEDORES
    // ==================================================

    {
        pregunta: "¿Qué es Docker?",
        opciones: [
            "Un formato de disco virtual de VirtualBox",
            "Una plataforma para crear y ejecutar aplicaciones en contenedores",
            "Un tipo de memoria RAM",
            "Un modo de red exclusivo de VirtualBox"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué es una imagen de Docker?",
        opciones: [
            "Una captura de pantalla de un contenedor",
            "Una máquina virtual que siempre contiene un sistema operativo completo",
            "Una plantilla utilizada para crear contenedores",
            "Una dirección IP del anfitrión"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué es un contenedor?",
        opciones: [
            "Un ordenador físico independiente",
            "Un disco duro virtual de tipo VDI",
            "Un hipervisor que se ejecuta directamente sobre el hardware",
            "Un entorno aislado para ejecutar aplicaciones que utiliza el kernel del anfitrión"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué función tiene un Dockerfile?",
        opciones: [
            "Definir las instrucciones para construir una imagen de Docker",
            "Configurar exclusivamente la BIOS de una máquina virtual",
            "Crear una red física entre ordenadores",
            "Convertir una imagen en un archivo VDI"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es un repositorio de imágenes de Docker?",
        opciones: [
            "Una memoria virtual del sistema anfitrión",
            "Un lugar donde se almacenan y distribuyen imágenes de contenedores",
            "Un adaptador de red de VirtualBox",
            "Un sistema de archivos exclusivo de Windows"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Cuál es una ventaja de Docker según los apuntes?",
        opciones: [
            "Cada contenedor necesita siempre un sistema operativo completo",
            "Los contenedores no pueden ejecutarse de forma aislada",
            "Los contenedores pueden arrancar rápidamente y consumir pocos recursos",
            "Docker elimina la necesidad de un kernel"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Cuál es la diferencia clave entre una máquina virtual y un contenedor?",
        opciones: [
            "Una máquina virtual no puede ejecutar aplicaciones",
            "Un contenedor necesita siempre más recursos que una máquina virtual",
            "Ambos necesitan siempre un sistema operativo completo independiente",
            "Una VM necesita un sistema operativo completo, mientras que el contenedor utiliza el kernel del anfitrión"
        ],
        correcta: 3
    },

    // ==================================================
    // CLOUD COMPUTING
    // ==================================================

    {
        pregunta: "¿Qué es el cloud computing?",
        opciones: [
            "Un modelo que ofrece recursos informáticos como servicios a través de Internet",
            "Un programa que solo funciona sin conexión",
            "Un formato de disco de VirtualBox",
            "Un sistema para fabricar componentes físicos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa la elasticidad en la computación en la nube?",
        opciones: [
            "Que los recursos siempre permanecen fijos",
            "Que los recursos pueden aumentar o disminuir según la demanda",
            "Que el usuario debe comprar todos los servidores",
            "Que los servicios solo funcionan en un ordenador"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué significa el pago por uso en la nube?",
        opciones: [
            "Pagar siempre una cantidad fija independientemente del consumo",
            "Comprar obligatoriamente el hardware físico",
            "Pagar por los recursos que realmente se consumen",
            "Utilizar los servicios únicamente de forma gratuita"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué modelo cloud ofrece aplicaciones listas para usar, normalmente desde el navegador?",
        opciones: [
            "IaaS",
            "PaaS",
            "Hipervisor de tipo 1",
            "SaaS"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Cuál de los siguientes es un ejemplo de SaaS mencionado en los apuntes?",
        opciones: [
            "Gmail",
            "VirtualBox",
            "VMware ESXi",
            "Dockerfile"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué ofrece PaaS (Platform as a Service)?",
        opciones: [
            "Únicamente hardware físico para comprar",
            "Un entorno de desarrollo en la nube para desplegar aplicaciones sin gestionar directamente los servidores",
            "Una aplicación de correo exclusivamente",
            "Un disco virtual para máquinas virtuales"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Cuál de los siguientes es un ejemplo de PaaS mencionado en los apuntes?",
        opciones: [
            "Dropbox",
            "Gmail",
            "Heroku",
            "VirtualBox"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué ofrece IaaS (Infrastructure as a Service)?",
        opciones: [
            "Solo aplicaciones listas para usar",
            "Únicamente un entorno para programar sin infraestructura",
            "Un sistema operativo físico instalado obligatoriamente por el proveedor",
            "Infraestructura virtualizada, como máquinas, redes y almacenamiento"
        ],
        correcta: 3
    },

    {
        pregunta: "En el modelo IaaS, ¿qué debe gestionar y configurar el cliente según los apuntes?",
        opciones: [
            "El sistema operativo, las aplicaciones y la seguridad",
            "La fabricación del hardware físico del proveedor",
            "Toda la infraestructura física del centro de datos",
            "Únicamente el navegador web"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué requisitos técnicos son necesarios para utilizar una máquina virtual?",
        opciones: [
            "Suficiente memoria RAM, soporte de virtualización en la CPU y espacio de almacenamiento",
            "Una tarjeta gráfica dedicada y dos discos duros obligatoriamente",
            "Conexión a Internet y una tarjeta de sonido específica",
            "Un segundo ordenador conectado por cable"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué tecnologías de procesador permiten la virtualización por hardware?",
        opciones: [
            "Intel VT-x y AMD-V",
            "Intel Hyper-Threading y AMD Radeon",
            "BIOS y UEFI",
            "SATA y NVMe"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué utilidad tiene utilizar una máquina virtual para ejecutar sistemas operativos antiguos?",
        opciones: [
            "Permite ejecutar aplicaciones antiguas incompatibles con el sistema actual",
            "Aumenta automáticamente la velocidad del ordenador físico",
            "Elimina la necesidad de instalar un sistema operativo",
            "Convierte cualquier aplicación en una aplicación web"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se representa habitualmente un CD o DVD de instalación en una máquina virtual?",
        opciones: [
            "Mediante una imagen ISO",
            "Mediante un archivo CSV",
            "Mediante un archivo de registro del sistema",
            "Mediante una carpeta compartida obligatoriamente"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se almacena normalmente un disco virtual de una máquina virtual?",
        opciones: [
            "Como un archivo en el equipo anfitrión",
            "Únicamente en la memoria RAM",
            "Siempre en un disco físico independiente",
            "En una conexión de red obligatoriamente"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué característica puede tener un disco virtual de tamaño dinámico?",
        opciones: [
            "Puede aumentar su tamaño según las necesidades, dentro de los límites configurados",
            "Ocupa siempre todo el espacio máximo desde el primer momento",
            "No puede almacenar archivos del sistema operativo",
            "Solo funciona con máquinas virtuales Linux"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué ventaja ofrece la virtualización relacionada con la disponibilidad?",
        opciones: [
            "Puede facilitar la alta disponibilidad y la migración en vivo",
            "Elimina por completo cualquier fallo del hardware",
            "Evita tener que realizar copias de seguridad",
            "Impide que las máquinas virtuales se apaguen"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué inconveniente puede presentar la virtualización en un entorno empresarial?",
        opciones: [
            "El equipo físico puede convertirse en un único punto de fallo",
            "No permite ejecutar varios sistemas operativos",
            "Obliga a utilizar un ordenador físico por aplicación",
            "Impide realizar pruebas de software"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué característica distingue a un hipervisor de tipo 1?",
        opciones: [
            "Se ejecuta directamente sobre el hardware físico",
            "Necesita ejecutarse obligatoriamente dentro de VirtualBox",
            "Solo permite ejecutar aplicaciones de oficina",
            "Se instala exclusivamente como una aplicación de usuario"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuál de estos programas es un ejemplo de hipervisor de tipo 1 según los apuntes?",
        opciones: [
            "VMware ESXi",
            "VirtualBox",
            "VMware Workstation",
            "Parallels Desktop"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué opción describe una operación de pausa de una máquina virtual?",
        opciones: [
            "Suspende temporalmente su ejecución para poder reanudarla después",
            "Elimina definitivamente la máquina virtual",
            "Borra todos los datos del disco virtual",
            "Exporta automáticamente la máquina a un archivo OVA"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué diferencia hay entre apagar normalmente una máquina virtual y forzar su apagado?",
        opciones: [
            "El apagado forzado corta la ejecución sin seguir necesariamente el procedimiento normal del sistema invitado",
            "El apagado forzado crea siempre una instantánea",
            "El apagado normal elimina el disco virtual",
            "No existe ninguna diferencia"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Para qué sirven los grupos de máquinas virtuales en VirtualBox?",
        opciones: [
            "Para organizar máquinas virtuales y facilitar su gestión conjunta",
            "Para convertir varias máquinas virtuales en un único archivo ISO",
            "Para aumentar automáticamente la memoria RAM de todas las máquinas",
            "Para sustituir el sistema operativo anfitrión"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué permiten las operaciones por lotes en VirtualBox?",
        opciones: [
            "Realizar determinadas operaciones sobre varias máquinas virtuales conjuntamente",
            "Ejecutar exclusivamente una máquina virtual cada vez",
            "Eliminar la necesidad de configurar las máquinas",
            "Convertir una máquina virtual en un contenedor Docker"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué permite hacer la función de captura de pantalla de VirtualBox?",
        opciones
    
];


// ==================================================
// VARIABLES DEL TEST
// ==================================================

let preguntasTest = [];

let preguntaActual = 0;

let respuestasUsuario = [];

let opcionesMezcladas = [];

let modoAleatorioActual = false;

let tiempo = 0;

let intervalo = null;


// ==================================================
// ELEMENTOS HTML
// ==================================================

const seleccionModo = document.getElementById("seleccionModo");

const test = document.getElementById("test");

const resultado = document.getElementById("resultado");

const botonNormal = document.getElementById("modoNormal");

const botonAleatorio = document.getElementById("modoAleatorio");

const preguntaElemento = document.getElementById("pregunta");

const opcionesElemento = document.getElementById("opciones");

const botonAnterior = document.getElementById("botonAnterior");

const botonReiniciarTest = document.getElementById("botonReiniciarTest");

const botonSiguiente = document.getElementById("botonSiguiente");

const numeroPregunta = document.getElementById("numeroPregunta");

const puntuacionElemento = document.getElementById("puntuacion");

const contador = document.getElementById("contador");

const barraProgreso = document.getElementById("barra-progreso");

const nota = document.getElementById("nota");

const mensajeResultado = document.getElementById("mensajeResultado");

const tiempoFinal = document.getElementById("tiempoFinal");

const botonReiniciar = document.getElementById("botonReiniciar");


// ==================================================
// MEZCLAR ARRAY
// ==================================================

function mezclar(array) {

    return array.sort(() => Math.random() - 0.5);

}


// ==================================================
// INICIAR TEST
// ==================================================

function iniciarTest(aleatorio) {

    modoAleatorioActual = aleatorio;

    preguntasTest = [...preguntas];

    if (aleatorio) {

        preguntasTest = mezclar(preguntasTest);

    }

    preguntaActual = 0;

    respuestasUsuario =
        new Array(preguntasTest.length).fill(null);

    opcionesMezcladas =
        new Array(preguntasTest.length);


    // Mezclamos las respuestas una sola vez
    // para cada pregunta.

    preguntasTest.forEach((pregunta, indice) => {

        let opciones = pregunta.opciones.map(
            (texto, posicion) => {

                return {
                    texto: texto,
                    indice: posicion
                };

            }
        );

        opcionesMezcladas[indice] = mezclar(opciones);

    });


    seleccionModo.classList.add("oculto");

    resultado.classList.add("oculto");

    test.classList.remove("oculto");


    tiempo = 0;

    actualizarCronometro();

    iniciarCronometro();

    mostrarPregunta();

}


// ==================================================
// MOSTRAR PREGUNTA
// ==================================================

function mostrarPregunta() {

    const pregunta =
        preguntasTest[preguntaActual];

    const opciones =
        opcionesMezcladas[preguntaActual];


    preguntaElemento.textContent =
        pregunta.pregunta;


    numeroPregunta.textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntasTest.length}`;


    puntuacionElemento.textContent =
        `Puntos: ${calcularPuntos()} `;


    const progreso =
        (preguntaActual / preguntasTest.length) * 100;


    barraProgreso.style.width =
        `${progreso}%`;


    opcionesElemento.innerHTML = "";


    opciones.forEach(opcion => {

        const boton =
            document.createElement("button");


        boton.classList.add("opcion");

        boton.textContent =
            opcion.texto;


        const respuestaGuardada =
            respuestasUsuario[preguntaActual];


        // Si ya había una respuesta seleccionada,
        // mostramos su estado.

        if (respuestaGuardada !== null) {

            if (opcion.indice === pregunta.correcta) {

                boton.classList.add("correcta");

            }

            if (
                opcion.indice === respuestaGuardada &&
                respuestaGuardada !== pregunta.correcta
            ) {

                boton.classList.add("incorrecta");

            }

            boton.disabled = true;

        } else {

            boton.addEventListener("click", () => {

                seleccionarRespuesta(
                    opcion.indice
                );

            });

        }


        opcionesElemento.appendChild(boton);

    });


    // Botón anterior

    if (preguntaActual === 0) {

        botonAnterior.disabled = true;

    } else {

        botonAnterior.disabled = false;

    }


    // Botón siguiente

    if (respuestasUsuario[preguntaActual] === null) {

        botonSiguiente.disabled = true;

    } else {

        botonSiguiente.disabled = false;

    }


    // En la última pregunta cambiamos el texto

    if (
        preguntaActual ===
        preguntasTest.length - 1
    ) {

        botonSiguiente.textContent =
            "Terminar ✓";

    } else {

        botonSiguiente.textContent =
            "Siguiente →";

    }

}


// ==================================================
// SELECCIONAR RESPUESTA
// ==================================================

function seleccionarRespuesta(indiceSeleccionado) {

    const pregunta =
        preguntasTest[preguntaActual];


    respuestasUsuario[preguntaActual] =
        indiceSeleccionado;


    mostrarPregunta();

}


// ==================================================
// CALCULAR PUNTOS
// ==================================================

function calcularPuntos() {

    let puntos = 0;


    respuestasUsuario.forEach(
        (respuesta, indice) => {

            if (
                respuesta !== null &&
                respuesta ===
                preguntasTest[indice].correcta
            ) {

                puntos++;

            }

        }
    );


    return puntos;

}


// ==================================================
// BOTÓN ANTERIOR
// ==================================================

botonAnterior.addEventListener("click", () => {

    if (preguntaActual > 0) {

        preguntaActual--;

        mostrarPregunta();

    }

});


// ==================================================
// BOTÓN SIGUIENTE
// ==================================================

botonSiguiente.addEventListener("click", () => {

    if (
        preguntaActual <
        preguntasTest.length - 1
    ) {

        preguntaActual++;

        mostrarPregunta();

    } else {

        terminarTest();

    }

});


// ==================================================
// REINICIAR TEST
// ==================================================

botonReiniciarTest.addEventListener("click", () => {

    clearInterval(intervalo);


    preguntasTest = [];

    respuestasUsuario = [];

    opcionesMezcladas = [];

    preguntaActual = 0;

    tiempo = 0;


    test.classList.add("oculto");

    resultado.classList.add("oculto");

    seleccionModo.classList.remove("oculto");


    botonSiguiente.textContent =
        "Siguiente →";


    botonSiguiente.disabled = true;

    botonAnterior.disabled = true;


    actualizarCronometro();

});


// ==================================================
// CRONÓMETRO
// ==================================================

function iniciarCronometro() {

    clearInterval(intervalo);


    intervalo = setInterval(() => {

        tiempo++;

        actualizarCronometro();

    }, 1000);

}


function actualizarCronometro() {

    const minutos =
        Math.floor(tiempo / 60);


    const segundos =
        tiempo % 60;


    contador.textContent =
        `⏱️ ${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

}


// ==================================================
// TERMINAR TEST
// ==================================================

function terminarTest() {

    clearInterval(intervalo);


    const puntos =
        calcularPuntos();


    const total =
        preguntasTest.length;


    const porcentaje =
        (puntos / total) * 100;


    const notaFinal =
        (puntos / total) * 10;


    test.classList.add("oculto");

    resultado.classList.remove("oculto");


    barraProgreso.style.width =
        "100%";


    nota.textContent =
        `${notaFinal.toFixed(2)}/10`;


    mensajeResultado.textContent =
        `Has acertado ${puntos} de ${total} preguntas (${porcentaje.toFixed(1)}%).`;


    const minutos =
        Math.floor(tiempo / 60);


    const segundos =
        tiempo % 60;


    tiempoFinal.textContent =
        `⏱️ Tiempo empleado: ${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

}


// ==================================================
// MODO NORMAL
// ==================================================

botonNormal.addEventListener("click", () => {

    iniciarTest(false);

});


// ==================================================
// MODO ALEATORIO
// ==================================================

botonAleatorio.addEventListener("click", () => {

    iniciarTest(true);

});


// ==================================================
// VOLVER A HACER EL TEST
// ==================================================

botonReiniciar.addEventListener("click", () => {

    clearInterval(intervalo);


    resultado.classList.add("oculto");

    test.classList.add("oculto");

    seleccionModo.classList.remove("oculto");


    preguntasTest = [];

    respuestasUsuario = [];

    opcionesMezcladas = [];

    preguntaActual = 0;

    tiempo = 0;


    botonSiguiente.textContent =
        "Siguiente →";


    botonSiguiente.disabled = true;

    botonAnterior.disabled = true;


    actualizarCronometro();

});
