const preguntas = [
    {
        "pregunta": "¿Qué comando muestra la ruta absoluta del directorio actual?",
        "opciones": [
            "cd",
            "pwd",
            "ls",
            "find"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando permite cambiar de directorio?",
        "opciones": [
            "cd",
            "pwd",
            "mkdir",
            "touch"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando lista el contenido de un directorio?",
        "opciones": [
            "cat",
            "whoami",
            "date",
            "ls"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué opción de ls muestra los archivos ocultos?",
        "opciones": [
            "-r",
            "-i",
            "-a",
            "-t"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué opción de ls muestra la información en formato largo?",
        "opciones": [
            "-a",
            "-l",
            "-d",
            "-R"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando crea un fichero vacío si no existe?",
        "opciones": [
            "touch",
            "cat",
            "file",
            "cut"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando crea directorios?",
        "opciones": [
            "rmdir",
            "mv",
            "du",
            "mkdir"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Para qué sirve mkdir -p?",
        "opciones": [
            "Borrar directorios vacíos",
            "Mostrar permisos",
            "Crear también los directorios intermedios que falten",
            "Crear archivos ocultos"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando elimina directorios únicamente si están vacíos?",
        "opciones": [
            "rm",
            "rmdir",
            "unlink",
            "del"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué opción de rm permite borrar directorios y su contenido recursivamente?",
        "opciones": [
            "-r",
            "-l",
            "-n",
            "-t"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando copia archivos o directorios?",
        "opciones": [
            "mv",
            "ln",
            "cut",
            "cp"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué opción de cp permite copiar directorios recursivamente?",
        "opciones": [
            "-i",
            "-u",
            "-r",
            "-c"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando mueve archivos y también puede renombrarlos?",
        "opciones": [
            "cp",
            "mv",
            "sort",
            "file"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando indica el tipo de un archivo?",
        "opciones": [
            "file",
            "which",
            "whereis",
            "locate"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando muestra el contenido de un archivo por pantalla?",
        "opciones": [
            "mkdir",
            "touch",
            "chmod",
            "cat"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué hace cat archivo1 archivo2 > final?",
        "opciones": [
            "Muestra solo archivo2",
            "Compara los archivos",
            "Concatena ambos archivos y guarda el resultado en final",
            "Borra los dos archivos"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando muestra por defecto las 10 primeras líneas de un archivo?",
        "opciones": [
            "tail",
            "head",
            "more",
            "less"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando muestra por defecto las 10 últimas líneas de un archivo?",
        "opciones": [
            "tail",
            "head",
            "sort",
            "uniq"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué opción de head o tail permite indicar el número de líneas?",
        "opciones": [
            "-r",
            "-i",
            "-d",
            "-n"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando permite leer un archivo página a página y avanzar con la barra espaciadora?",
        "opciones": [
            "touch",
            "grep",
            "more",
            "pwd"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando permite desplazarse por el contenido usando las flechas del cursor?",
        "opciones": [
            "more",
            "less",
            "cat",
            "date"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando ordena líneas de un archivo?",
        "opciones": [
            "sort",
            "uniq",
            "cut",
            "wc"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué opción de sort invierte el orden?",
        "opciones": [
            "-l",
            "-c",
            "-f",
            "-r"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando cuenta líneas, palabras y caracteres de un archivo?",
        "opciones": [
            "cut",
            "grep",
            "wc",
            "du"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué opción de wc cuenta únicamente líneas?",
        "opciones": [
            "-w",
            "-l",
            "-c",
            "-r"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando extrae caracteres o campos seleccionados de líneas?",
        "opciones": [
            "cut",
            "sort",
            "uniq",
            "tail"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué opción de cut establece el delimitador de los campos?",
        "opciones": [
            "-f",
            "-c",
            "-s",
            "-d"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando muestra las líneas que contienen un patrón?",
        "opciones": [
            "find",
            "which",
            "grep",
            "file"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué opción de grep ignora diferencias entre mayúsculas y minúsculas?",
        "opciones": [
            "-r",
            "-i",
            "-v",
            "-n"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué opción de grep muestra las líneas que NO contienen el patrón?",
        "opciones": [
            "-v",
            "-i",
            "-r",
            "-l"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando busca archivos según nombre, tipo u otros criterios dentro de un árbol de directorios?",
        "opciones": [
            "locate",
            "which",
            "whereis",
            "find"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué criterio de find permite buscar por nombre?",
        "opciones": [
            "-type",
            "-empty",
            "-name",
            "-size"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando busca archivos en el sistema por su nombre mediante una base de datos?",
        "opciones": [
            "find",
            "locate",
            "file",
            "pwd"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando muestra la ruta del ejecutable que se ejecutará para un comando?",
        "opciones": [
            "which",
            "whereis",
            "locate",
            "file"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando localiza binarios, fuentes y páginas de manual de un programa?",
        "opciones": [
            "which",
            "find",
            "grep",
            "whereis"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando crea un enlace simbólico?",
        "opciones": [
            "ln origen enlace",
            "cp -s origen enlace",
            "ln -s origen enlace",
            "mv -s origen enlace"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué característica tiene un enlace duro según los apuntes?",
        "opciones": [
            "Siempre tiene un inodo distinto",
            "Comparte el mismo inodo que el archivo original",
            "Es solo un acceso directo que deja de funcionar al borrar el original",
            "Solo puede apuntar a directorios"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando permite ejecutar un único comando con permisos de superusuario?",
        "opciones": [
            "sudo",
            "su",
            "passwd",
            "whoami"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando permite cambiar temporalmente a root según los apuntes?",
        "opciones": [
            "sudo pwd",
            "who",
            "id",
            "sudo su"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando muestra el nombre del usuario actual?",
        "opciones": [
            "who",
            "id",
            "whoami",
            "groups"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando muestra los usuarios conectados al sistema?",
        "opciones": [
            "whoami",
            "who",
            "useradd",
            "passwd"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando aporta información sobre la actividad de los usuarios conectados?",
        "opciones": [
            "w",
            "last",
            "id",
            "env"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando muestra información sobre los últimos inicios de sesión?",
        "opciones": [
            "who",
            "groups",
            "su",
            "last"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando permite cambiar la contraseña de un usuario?",
        "opciones": [
            "chfn",
            "usermod",
            "passwd",
            "groupmod"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando crea una cuenta de usuario?",
        "opciones": [
            "userdel",
            "useradd",
            "usermod",
            "groupadd"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué opción de userdel elimina también el directorio personal del usuario?",
        "opciones": [
            "-r",
            "-u",
            "-g",
            "-s"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando muestra los grupos a los que pertenece un usuario?",
        "opciones": [
            "groupadd",
            "chgrp",
            "chmod",
            "groups"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando crea un grupo nuevo?",
        "opciones": [
            "useradd",
            "groupmod",
            "groupadd",
            "groups"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando modifica los permisos de archivos?",
        "opciones": [
            "chown",
            "chmod",
            "chgrp",
            "umask"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando cambia el propietario de un archivo?",
        "opciones": [
            "chown",
            "chgrp",
            "chmod",
            "passwd"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando cambia el grupo asociado a un archivo?",
        "opciones": [
            "chown",
            "chmod",
            "groups",
            "chgrp"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Para qué sirve umask?",
        "opciones": [
            "Cambiar el propietario",
            "Mostrar grupos",
            "Definir la máscara de permisos para crear archivos y directorios",
            "Montar una partición"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando muestra información de usuario, UID, GID y grupos?",
        "opciones": [
            "whoami",
            "id",
            "who",
            "groups"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando monta un sistema de archivos en un punto de montaje?",
        "opciones": [
            "mount",
            "umount",
            "df",
            "lsblk"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando desmonta un sistema de archivos?",
        "opciones": [
            "mount",
            "fdisk",
            "du",
            "umount"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando muestra los discos y particiones del sistema?",
        "opciones": [
            "df -h",
            "pwd",
            "fdisk -l",
            "du -b"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando muestra las particiones montadas con tamaños legibles?",
        "opciones": [
            "fdisk -l",
            "df -h",
            "lsblk",
            "mount -a"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando muestra discos y sus particiones, estén montadas o no?",
        "opciones": [
            "lsblk",
            "df -h",
            "du",
            "fdisk -l"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando calcula el espacio ocupado por archivos y directorios?",
        "opciones": [
            "df",
            "lsblk",
            "mount",
            "du"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando permite empaquetar archivos en un archivo tar?",
        "opciones": [
            "gzip",
            "grep",
            "tar",
            "cut"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué opción de tar crea un archivo tar nuevo?",
        "opciones": [
            "-x",
            "-c",
            "-t",
            "-p"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué opción de tar extrae archivos de un archivo tar?",
        "opciones": [
            "-x",
            "-c",
            "-t",
            "-v"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué opción de tar muestra el contenido de un archivo tar?",
        "opciones": [
            "-x",
            "-c",
            "-p",
            "-t"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando comprime archivos según la lista?",
        "opciones": [
            "ungzip",
            "tar -t",
            "gzip",
            "sort"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando aparece en los apuntes para descomprimir un archivo comprimido con gzip?",
        "opciones": [
            "gzip -c",
            "ungzip",
            "gunzip no aparece",
            "unzip"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando muestra la fecha y hora del sistema?",
        "opciones": [
            "date",
            "time",
            "cal",
            "clear"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando muestra un calendario?",
        "opciones": [
            "date",
            "time",
            "clear",
            "cal"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando limpia la pantalla de la terminal?",
        "opciones": [
            "cat",
            "reset-file",
            "clear",
            "pwd"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando mide el tiempo real y de CPU que tarda en ejecutarse otro comando?",
        "opciones": [
            "date",
            "time",
            "top",
            "sleep"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando muestra los procesos en ejecución?",
        "opciones": [
            "ps",
            "jobs",
            "kill",
            "nice"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué opción de ps muestra todos los procesos del sistema según los apuntes?",
        "opciones": [
            "-n",
            "-r",
            "-u",
            "-e"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando envía señales a procesos identificados por su PID?",
        "opciones": [
            "jobs",
            "fg",
            "kill",
            "sleep"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando pausa la ejecución durante un número de segundos?",
        "opciones": [
            "time",
            "sleep",
            "nice",
            "top"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué comando permite ejecutar un programa con una prioridad distinta de la normal?",
        "opciones": [
            "nice",
            "kill",
            "ps",
            "fg"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando muestra las tareas que se están ejecutando en segundo plano en la shell?",
        "opciones": [
            "bg",
            "fg",
            "top",
            "jobs"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando trae una tarea de segundo plano al primer plano?",
        "opciones": [
            "bg",
            "jobs",
            "fg",
            "ps"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando reanuda una tarea y la coloca en segundo plano?",
        "opciones": [
            "fg",
            "bg",
            "jobs",
            "kill"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué herramienta muestra procesos en tiempo real?",
        "opciones": [
            "top",
            "ps",
            "jobs",
            "last"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando muestra variables de entorno?",
        "opciones": [
            "set",
            "date",
            "whoami",
            "env"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué comando muestra variables locales de la shell y variables de entorno?",
        "opciones": [
            "env",
            "export-only",
            "set",
            "ps"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando permite programar ejecuciones de comandos o scripts?",
        "opciones": [
            "sleep",
            "crontab",
            "time",
            "jobs"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué opción de crontab permite editar o crear el crontab?",
        "opciones": [
            "-e",
            "-l",
            "-r",
            "-x"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué comando elimina líneas duplicadas consecutivas de una entrada ordenada?",
        "opciones": [
            "sort",
            "cut",
            "wc",
            "uniq"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué opción de uniq muestra solo las líneas duplicadas?",
        "opciones": [
            "-c",
            "-u",
            "-d",
            "-r"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué comando traduce o sustituye caracteres de la entrada?",
        "opciones": [
            "grep",
            "tr",
            "cut",
            "sort"
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué símbolo de redirección añade la salida al final de un archivo?",
        "opciones": [
            ">>",
            ">",
            "<",
            "2>"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué redirección envía los mensajes de error estándar a un destino?",
        "opciones": [
            "<",
            ">>",
            "|",
            "2>"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué símbolo conecta la salida de un comando con la entrada del siguiente?",
        "opciones": [
            ">",
            "<",
            "|",
            "2>"
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿Qué metacarácter representa cualquier secuencia de cero o más caracteres?",
        "opciones": [
            "?",
            "*",
            "[ ]",
            "."
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Qué metacarácter representa exactamente un carácter?",
        "opciones": [
            "?",
            "*",
            "..",
            "~"
        ],
        "correcta": 0
    },
    {
        "pregunta": "¿Qué representa .. en una ruta relativa?",
        "opciones": [
            "El directorio actual",
            "El directorio personal",
            "La raíz del sistema",
            "El directorio padre"
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué representa ~ en una ruta?",
        "opciones": [
            "La raíz del sistema",
            "El directorio padre",
            "El directorio personal del usuario",
            "El directorio temporal"
        ],
        "correcta": 2
    }
];


// VARIABLES DEL TEST
// ==================================================

let preguntasTest = [];
let preguntaActual = 0;
let respuestasUsuario = [];
let opcionesMezcladas = [];
let modoAleatorioActual = false;
let modoExamenActual = false;
let tiempo = 0;
let intervalo = null;
const TIEMPO_LIMITE_EXAMEN = 30 * 60;


// ==================================================
// ELEMENTOS HTML
// ==================================================

const seleccionModo = document.getElementById("seleccionModo");
const test = document.getElementById("test");
const resultado = document.getElementById("resultado");
const botonNormal = document.getElementById("modoNormal");
const botonAleatorio = document.getElementById("modoAleatorio");
const botonExamen = document.getElementById("modoExamen");
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
const avisoExamen = document.getElementById("avisoExamen");
const resumenExamen = document.getElementById("resumenExamen");
const aciertosExamen = document.getElementById("aciertosExamen");
const fallosExamen = document.getElementById("fallosExamen");
const sinResponderExamen = document.getElementById("sinResponderExamen");


// ==================================================
// MEZCLAR ARRAY
// ==================================================

function mezclar(array) {
    return array.sort(() => Math.random() - 0.5);
}


// ==================================================
// INICIAR TEST
// ==================================================

function iniciarTest(aleatorio, examen = false) {
    clearInterval(intervalo);
    modoAleatorioActual = aleatorio;
    modoExamenActual = examen;
    preguntasTest = [...preguntas];

    // En modo aleatorio y examen se mezclan las preguntas.
    if (aleatorio || examen) {
        preguntasTest = mezclar(preguntasTest);
    }

    preguntaActual = 0;
    respuestasUsuario = new Array(preguntasTest.length).fill(null);
    opcionesMezcladas = new Array(preguntasTest.length);

    // Mezclamos las respuestas una sola vez para cada pregunta.
    preguntasTest.forEach((pregunta, indice) => {
        const opciones = pregunta.opciones.map((texto, posicion) => ({
            texto: texto,
            indice: posicion
        }));
        opcionesMezcladas[indice] = mezclar(opciones);
    });

    seleccionModo.classList.add("oculto");
    resultado.classList.add("oculto");
    test.classList.remove("oculto");

    if (avisoExamen) {
        avisoExamen.classList.toggle("oculto", !modoExamenActual);
    }
    if (resumenExamen) {
        resumenExamen.classList.add("oculto");
    }

    tiempo = modoExamenActual ? TIEMPO_LIMITE_EXAMEN : 0;
    actualizarCronometro();
    iniciarCronometro();
    mostrarPregunta();
}


// ==================================================
// MOSTRAR PREGUNTA
// ==================================================

function mostrarPregunta() {
    const pregunta = preguntasTest[preguntaActual];
    const opciones = opcionesMezcladas[preguntaActual];

    preguntaElemento.textContent = pregunta.pregunta;
    numeroPregunta.textContent = `Pregunta ${preguntaActual + 1} de ${preguntasTest.length}`;
    puntuacionElemento.textContent = modoExamenActual
        ? "Modo examen: resultado al finalizar"
        : `Puntos: ${calcularPuntos()}`;

    const progreso = (preguntaActual / preguntasTest.length) * 100;
    barraProgreso.style.width = `${progreso}%`;
    opcionesElemento.innerHTML = "";

    opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.classList.add("opcion");
        boton.textContent = opcion.texto;
        const respuestaGuardada = respuestasUsuario[preguntaActual];

        if (modoExamenActual) {
            // En el examen no se revela la respuesta correcta y se puede cambiar la elección.
            if (respuestaGuardada === opcion.indice) {
                boton.classList.add("seleccionada");
            }
            boton.addEventListener("click", () => seleccionarRespuesta(opcion.indice));
        } else if (respuestaGuardada !== null) {
            // En los modos habituales se conserva la corrección visual original.
            if (opcion.indice === pregunta.correcta) {
                boton.classList.add("correcta");
            }
            if (opcion.indice === respuestaGuardada && respuestaGuardada !== pregunta.correcta) {
                boton.classList.add("incorrecta");
            }
            boton.disabled = true;
        } else {
            boton.addEventListener("click", () => seleccionarRespuesta(opcion.indice));
        }

        opcionesElemento.appendChild(boton);
    });

    botonAnterior.disabled = preguntaActual === 0;
    botonSiguiente.disabled = !modoExamenActual && respuestasUsuario[preguntaActual] === null;
    botonSiguiente.textContent = preguntaActual === preguntasTest.length - 1
        ? "Terminar ✓"
        : "Siguiente →";
}


// ==================================================
// SELECCIONAR RESPUESTA
// ==================================================

function seleccionarRespuesta(indiceSeleccionado) {
    respuestasUsuario[preguntaActual] = indiceSeleccionado;
    mostrarPregunta();
}


// ==================================================
// CALCULAR PUNTOS
// ==================================================

function calcularPuntos() {
    let puntos = 0;
    respuestasUsuario.forEach((respuesta, indice) => {
        if (respuesta !== null && respuesta === preguntasTest[indice].correcta) {
            puntos++;
        }
    });
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
    if (preguntaActual < preguntasTest.length - 1) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        terminarTest();
    }
});


// ==================================================
// REINICIAR TEST Y VOLVER AL MENÚ
// ==================================================

function volverAlMenuDeModos() {
    clearInterval(intervalo);
    preguntasTest = [];
    respuestasUsuario = [];
    opcionesMezcladas = [];
    preguntaActual = 0;
    tiempo = 0;
    modoExamenActual = false;
    test.classList.add("oculto");
    resultado.classList.add("oculto");
    seleccionModo.classList.remove("oculto");
    botonSiguiente.textContent = "Siguiente →";
    botonSiguiente.disabled = true;
    botonAnterior.disabled = true;
    if (avisoExamen) avisoExamen.classList.add("oculto");
    if (resumenExamen) resumenExamen.classList.add("oculto");
    actualizarCronometro();
}

botonReiniciarTest.addEventListener("click", volverAlMenuDeModos);


// ==================================================
// CRONÓMETRO
// ==================================================

function iniciarCronometro() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        if (modoExamenActual) {
            tiempo--;
            if (tiempo <= 0) {
                tiempo = 0;
                actualizarCronometro();
                terminarTest(true);
                return;
            }
        } else {
            tiempo++;
        }
        actualizarCronometro();
    }, 1000);
}

function actualizarCronometro() {
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
    const formato = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
    contador.textContent = modoExamenActual ? `⏳ Tiempo restante: ${formato}` : `⏱️ ${formato}`;
    contador.classList.toggle("tiempo-limite", modoExamenActual && tiempo <= 60);
}


// ==================================================
// TERMINAR TEST
// ==================================================

function terminarTest(porTiempo = false) {
    clearInterval(intervalo);
    const puntos = calcularPuntos();
    const total = preguntasTest.length;
    const respondidas = respuestasUsuario.filter(respuesta => respuesta !== null).length;
    const fallos = respondidas - puntos;
    const sinResponder = total - respondidas;
    const porcentaje = total > 0 ? (puntos / total) * 100 : 0;
    const notaFinal = total > 0 ? (puntos / total) * 10 : 0;

    test.classList.add("oculto");
    resultado.classList.remove("oculto");
    barraProgreso.style.width = "100%";
    nota.textContent = `${notaFinal.toFixed(2)}/10`;

    if (modoExamenActual) {
        mensajeResultado.textContent = porTiempo
            ? "El tiempo se ha agotado. El examen se ha corregido automáticamente."
            : "Examen finalizado. Aquí tienes el resultado.";
        if (resumenExamen) resumenExamen.classList.remove("oculto");
        if (aciertosExamen) aciertosExamen.textContent = `Aciertos: ${puntos}`;
        if (fallosExamen) fallosExamen.textContent = `Fallos: ${fallos}`;
        if (sinResponderExamen) sinResponderExamen.textContent = `Sin responder: ${sinResponder}`;
    } else {
        mensajeResultado.textContent = `Has acertado ${puntos} de ${total} preguntas (${porcentaje.toFixed(1)}%).`;
        if (resumenExamen) resumenExamen.classList.add("oculto");
    }

    const tiempoTranscurrido = modoExamenActual ? TIEMPO_LIMITE_EXAMEN - tiempo : tiempo;
    const minutos = Math.floor(tiempoTranscurrido / 60);
    const segundos = tiempoTranscurrido % 60;
    tiempoFinal.textContent = modoExamenActual
        ? `⏱️ Tiempo empleado: ${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`
        : `⏱️ Tiempo empleado: ${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}


// ==================================================
// MODO NORMAL
// ==================================================

botonNormal.addEventListener("click", () => iniciarTest(false, false));


// ==================================================
// MODO ALEATORIO
// ==================================================

botonAleatorio.addEventListener("click", () => iniciarTest(true, false));


// ==================================================
// MODO EXAMEN
// ==================================================

if (botonExamen) {
    botonExamen.addEventListener("click", () => iniciarTest(true, true));
}


// ==================================================
// VOLVER A HACER EL TEST
// ==================================================

botonReiniciar.addEventListener("click", volverAlMenuDeModos);
