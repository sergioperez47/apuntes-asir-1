// UT2 DE REDES - 70 PREGUNTAS TIPO TEST

const preguntas = [
{"pregunta":"¿Cuántos bits tiene un byte?","opciones":["4","8","16","32"],"correcta":1},
{"pregunta":"¿Qué base utiliza el sistema binario?","opciones":["2","8","10","16"],"correcta":0},
{"pregunta":"¿Qué símbolos usa el sistema binario?","opciones":["0 y 1","0 al 9","A al F","1 y 2"],"correcta":0},
{"pregunta":"¿Qué base utiliza el sistema hexadecimal?","opciones":["2","8","10","16"],"correcta":3},
{"pregunta":"¿Qué valor decimal representa la A hexadecimal?","opciones":["8","9","10","11"],"correcta":2},
{"pregunta":"¿Qué valor decimal representa la F hexadecimal?","opciones":["12","14","15","16"],"correcta":2},
{"pregunta":"¿Cuál es el binario de 5 en 8 bits?","opciones":["00000101","00000110","00001001","00000100"],"correcta":0},
{"pregunta":"¿Cuál es el decimal de 00001100?","opciones":["10","11","12","14"],"correcta":2},
{"pregunta":"¿Cuál es el decimal de 11111111?","opciones":["127","128","255","256"],"correcta":2},
{"pregunta":"¿Cuál es el hexadecimal de 1010 1111?","opciones":["AF","FA","A5","BF"],"correcta":0},
{"pregunta":"¿Cuál es el binario de 192?","opciones":["11000000","11010000","10110000","11100000"],"correcta":0},
{"pregunta":"¿Cuál es el hexadecimal de 255?","opciones":["FF","FE","EF","F0"],"correcta":0},
{"pregunta":"¿Qué identifica normalmente una dirección MAC?","opciones":["Una interfaz de red","Una web","Un puerto TCP","Un servidor DNS"],"correcta":0},
{"pregunta":"¿Qué longitud tiene una dirección MAC EUI-48?","opciones":["16 bits","32 bits","48 bits","64 bits"],"correcta":2},
{"pregunta":"¿Qué longitud tiene una dirección EUI-64?","opciones":["32 bits","48 bits","64 bits","128 bits"],"correcta":2},
{"pregunta":"¿Qué hace ARP en una red IPv4 local?","opciones":["Relaciona una IP con una MAC","Asigna nombres DNS","Calcula máscaras","Cifra paquetes"],"correcta":0},
{"pregunta":"¿Cómo se difunde normalmente una petición ARP en Ethernet?","opciones":["Unicast a Internet","Broadcast","Solo multicast","Al servidor web"],"correcta":1},
{"pregunta":"¿Cuántos bits tiene una dirección IPv4?","opciones":["16","32","48","128"],"correcta":1},
{"pregunta":"¿Cuántos octetos tiene una dirección IPv4?","opciones":["2","4","6","8"],"correcta":1},
{"pregunta":"¿Cuál es una dirección IPv4 válida?","opciones":["192.168.1.20","192.168.1.300","192.168.1","256.1.1.1"],"correcta":0},
{"pregunta":"¿Qué máscara corresponde a /24?","opciones":["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.255"],"correcta":2},
{"pregunta":"¿Qué indica /26 en notación CIDR?","opciones":["26 hosts","26 bits de red","26 bytes","26 subredes"],"correcta":1},
{"pregunta":"¿Cuántos bits tiene una máscara IPv4?","opciones":["8","16","32","64"],"correcta":2},
{"pregunta":"En una máscara, ¿qué representan los bits a 1?","opciones":["La parte de red","La parte de host","El DNS","El gateway"],"correcta":0},
{"pregunta":"¿Qué operación calcula la dirección de red con IP y máscara?","opciones":["OR","XOR","AND bit a bit","Suma"],"correcta":2},
{"pregunta":"¿Qué dirección identifica la subred y no se asigna normalmente a un host?","opciones":["Dirección de red","Broadcast","Gateway","DNS"],"correcta":0},
{"pregunta":"¿Para qué sirve el broadcast de una subred?","opciones":["Enviar a todos los hosts de esa subred","Identificar un host único","Resolver nombres","Conectar siempre dos routers"],"correcta":0},
{"pregunta":"¿Cuántos hosts utilizables suele ofrecer una /24?","opciones":["252","254","256","255"],"correcta":1},
{"pregunta":"¿Cuántas direcciones totales contiene una /27?","opciones":["16","30","32","64"],"correcta":2},
{"pregunta":"¿Cuántos hosts utilizables suele tener una /27?","opciones":["27","30","32","62"],"correcta":1},
{"pregunta":"¿Qué máscara corresponde a /26?","opciones":["255.255.255.0","255.255.255.128","255.255.255.192","255.255.255.224"],"correcta":2},
{"pregunta":"¿Qué máscara corresponde a /27?","opciones":["255.255.255.192","255.255.255.224","255.255.255.240","255.255.255.248"],"correcta":1},
{"pregunta":"¿Qué máscara corresponde a /25?","opciones":["255.255.255.0","255.255.255.128","255.255.255.192","255.255.255.224"],"correcta":1},
{"pregunta":"¿Cuántos hosts utilizables suele tener una /30?","opciones":["2","4","6","30"],"correcta":0},
{"pregunta":"¿Qué significa subnetting?","opciones":["Dividir una red en subredes más pequeñas","Convertir MAC en DNS","Aumentar velocidad del cable","Cifrar IP"],"correcta":0},
{"pregunta":"¿Qué ventaja puede aportar crear subredes?","opciones":["Limitar el tráfico broadcast a cada subred","Eliminar routers","Hacer públicas todas las IP","Evitar máscaras"],"correcta":0},
{"pregunta":"¿Cuál es el rango privado IPv4 de 10.0.0.0/8?","opciones":["10.0.0.0–10.255.255.255","11.0.0.0–11.255.255.255","127.0.0.0/8","169.254.0.0/16"],"correcta":0},
{"pregunta":"¿Cuál es el rango privado de 172.16.0.0/12?","opciones":["172.16.0.0–172.31.255.255","172.32.0.0–172.63.255.255","172.0.0.0–172.15.255.255","172.16.0.0–172.255.255.255"],"correcta":0},
{"pregunta":"¿Cuál de estas direcciones es privada?","opciones":["192.168.25.4","192.169.25.4","193.168.25.4","192.167.25.4"],"correcta":0},
{"pregunta":"¿Qué caracteriza a una IP pública?","opciones":["Es globalmente única y enrutable en Internet","Solo funciona en LAN","Siempre empieza por 192.168","Puede duplicarse libremente en Internet"],"correcta":0},
{"pregunta":"¿Qué caracteriza a una IP privada?","opciones":["Puede repetirse en redes locales distintas","Debe ser única mundialmente","Siempre es clase D","No puede comunicarse con un router"],"correcta":0},
{"pregunta":"¿Cuál de estas direcciones es privada?","opciones":["8.8.8.8","10.20.30.40","1.1.1.1","200.10.10.10"],"correcta":1},
{"pregunta":"¿Qué dirección se utiliza habitualmente como loopback?","opciones":["127.0.0.1","0.0.0.0","255.255.255.255","169.254.1.1"],"correcta":0},
{"pregunta":"¿Qué suele indicar una IP 169.254.x.x?","opciones":["Autoconfiguración APIPA, a menudo por fallo de DHCP","IP pública del router","Broadcast global","DNS obligatorio"],"correcta":0},
{"pregunta":"¿Para qué sirve la puerta de enlace predeterminada?","opciones":["Enviar tráfico destinado a otras redes","Traducir nombres","Asignar MAC","Medir velocidad del cable"],"correcta":0},
{"pregunta":"¿Qué dispositivo suele ser la puerta de enlace?","opciones":["Router","Teclado","Servidor de impresión","Monitor"],"correcta":0},
{"pregunta":"¿Para qué sirve DNS?","opciones":["Resolver nombres de dominio mediante registros DNS","Traducir IP a MAC en una LAN","Asignar máscaras automáticamente","Enviar broadcast"],"correcta":0},
{"pregunta":"Si el destino está en otra red, ¿a qué MAC envía normalmente la trama el equipo?","opciones":["A la MAC del host remoto","A la MAC de la puerta de enlace","A la MAC del DNS siempre","A broadcast global"],"correcta":1},
{"pregunta":"¿Cuál es la dirección de red de 192.168.10.22/24?","opciones":["192.168.10.0","192.168.10.22","192.168.10.255","192.168.0.0"],"correcta":0},
{"pregunta":"¿Cuál es el broadcast de 192.168.10.22/24?","opciones":["192.168.10.0","192.168.10.1","192.168.10.254","192.168.10.255"],"correcta":3},
{"pregunta":"En 192.168.10.0/27, ¿cuál es el broadcast?","opciones":["192.168.10.15","192.168.10.31","192.168.10.32","192.168.10.255"],"correcta":1},
{"pregunta":"En 192.168.10.0/27, ¿cuál es el rango de hosts?","opciones":[".0–.31",".1–.30",".1–.31",".2–.32"],"correcta":1},
{"pregunta":"¿Cuál es la siguiente dirección de red tras 192.168.10.0/27?","opciones":["192.168.10.16","192.168.10.30","192.168.10.32","192.168.10.64"],"correcta":2},
{"pregunta":"¿Qué subred /27 contiene 192.168.10.70?","opciones":["192.168.10.0/27","192.168.10.32/27","192.168.10.64/27","192.168.10.96/27"],"correcta":2},
{"pregunta":"¿Cuál es el broadcast de 192.168.10.64/27?","opciones":["192.168.10.79","192.168.10.95","192.168.10.96","192.168.10.127"],"correcta":1},
{"pregunta":"¿Cuántos bits de host quedan en una /26?","opciones":["6","8","26","30"],"correcta":0},
{"pregunta":"¿Qué fórmula se usa normalmente para hosts utilizables?","opciones":["2^bits de host","2^bits de host − 2","bits de red − 2","32 / bits de host"],"correcta":1},
{"pregunta":"¿Qué prefijo permite al menos 300 hosts utilizables?","opciones":["/24","/25","/23","/26"],"correcta":2},
{"pregunta":"¿Qué clase tradicional abarca primer octeto de 192 a 223?","opciones":["A","B","C","D"],"correcta":2},
{"pregunta":"¿Para qué se reserva tradicionalmente la clase D?","opciones":["Multidifusión (multicast)","Direcciones privadas","Loopback","Broadcast de LAN"],"correcta":0},
{"pregunta":"¿Cuál es el broadcast limitado IPv4?","opciones":["255.255.255.255","127.0.0.1","0.0.0.0","224.0.0.1"],"correcta":0},
{"pregunta":"¿Cuáles son los cuatro parámetros típicos de configuración IP manual?","opciones":["IP, máscara, gateway y DNS","MAC, SSID, usuario y contraseña","IP, HTTP, FTP y SMTP","Gateway, navegador, CPU y RAM"],"correcta":0},
{"pregunta":"¿192.168.1.20/24 y 192.168.1.80/24 están en la misma subred?","opciones":["Sí","No, cambia el último octeto","No, son privadas","Solo con DNS público"],"correcta":0},
{"pregunta":"¿192.168.1.20/24 y 192.168.2.20/24 están en la misma subred?","opciones":["Sí","No","Solo si sus MAC son iguales","Solo si no hay router"],"correcta":1},
{"pregunta":"¿Qué puede ocurrir si dos equipos de una LAN usan la misma IPv4?","opciones":["Conflicto de IP","Se duplica el ancho de banda","ARP deja de existir","Se convierte en IP pública"],"correcta":0},
{"pregunta":"¿Qué máscara corresponde a /28?","opciones":["255.255.255.240","255.255.255.224","255.255.255.192","255.255.255.248"],"correcta":0},
{"pregunta":"¿Cuántas direcciones totales contiene una /28?","opciones":["8","16","32","64"],"correcta":1},
{"pregunta":"¿Cuántos hosts utilizables tiene normalmente una /28?","opciones":["14","16","30","12"],"correcta":0},
{"pregunta":"¿Cuál es la dirección de red de 172.23.84.138/16?","opciones":["172.23.0.0","172.23.84.0","172.23.84.138","172.0.0.0"],"correcta":0},
{"pregunta":"¿Cuántas subredes /27 caben en una red /24?","opciones":["2","4","8","16"],"correcta":2}
];

// VARIABLES DEL TEST

let preguntasTest = [];
let preguntaActual = 0;
let respuestasUsuario = [];
let opcionesMezcladas = [];
let tiempo = 0;
let intervalo = null;

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

// MEZCLAR PREGUNTAS Y RESPUESTAS

function mezclar(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

// INICIAR TEST

function iniciarTest(aleatorio) {
    preguntasTest = [...preguntas];

    if (aleatorio) {
        preguntasTest = mezclar(preguntasTest);
    }

    preguntaActual = 0;
    respuestasUsuario = new Array(preguntasTest.length).fill(null);

    opcionesMezcladas = preguntasTest.map(p =>
        mezclar(p.opciones.map((texto, indice) => ({
            texto,
            indice
        })))
    );

    seleccionModo.classList.add("oculto");
    resultado.classList.add("oculto");
    test.classList.remove("oculto");

    tiempo = 0;
    actualizarCronometro();
    iniciarCronometro();
    mostrarPregunta();
}

// MOSTRAR PREGUNTA

function mostrarPregunta() {
    const pregunta = preguntasTest[preguntaActual];

    preguntaElemento.textContent = pregunta.pregunta;
    numeroPregunta.textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntasTest.length}`;

    puntuacionElemento.textContent = `Puntos: ${calcularPuntos()}`;

    barraProgreso.style.width =
        `${((preguntaActual + 1) / preguntasTest.length) * 100}%`;

    opcionesElemento.innerHTML = "";

    opcionesMezcladas[preguntaActual].forEach(opcion => {
        const boton = document.createElement("button");

        boton.classList.add("opcion");
        boton.textContent = opcion.texto;

        const respuestaGuardada = respuestasUsuario[preguntaActual];

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
                respuestasUsuario[preguntaActual] = opcion.indice;
                mostrarPregunta();
            });
        }

        opcionesElemento.appendChild(boton);
    });

    botonAnterior.disabled = preguntaActual === 0;

    botonSiguiente.disabled =
        respuestasUsuario[preguntaActual] === null;

    botonSiguiente.textContent =
        preguntaActual === preguntasTest.length - 1
            ? "Terminar test ✓"
            : "Siguiente →";
}

// CALCULAR PUNTUACIÓN

function calcularPuntos() {
    return respuestasUsuario.reduce((total, respuesta, indice) => {
        return total + (
            respuesta !== null &&
            respuesta === preguntasTest[indice].correcta ? 1 : 0
        );
    }, 0);
}

// BOTÓN ANTERIOR

botonAnterior.addEventListener("click", () => {
    if (preguntaActual > 0) {
        preguntaActual--;
        mostrarPregunta();
    }
});

// BOTÓN SIGUIENTE

botonSiguiente.addEventListener("click", () => {
    if (respuestasUsuario[preguntaActual] === null) {
        return;
    }

    if (preguntaActual < preguntasTest.length - 1) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        terminarTest();
    }
});

// MODO NORMAL Y ALEATORIO

botonNormal.addEventListener("click", () => iniciarTest(false));
botonAleatorio.addEventListener("click", () => iniciarTest(true));

// REINICIAR TEST Y VOLVER A LA SELECCIÓN DE MODO

botonReiniciarTest.addEventListener("click", () => {
    clearInterval(intervalo);

    test.classList.add("oculto");
    resultado.classList.add("oculto");
    seleccionModo.classList.remove("oculto");

    botonSiguiente.textContent = "Siguiente →";
    botonSiguiente.disabled = true;
    botonAnterior.disabled = true;

    tiempo = 0;
    actualizarCronometro();
});

// VOLVER A HACER EL TEST DESDE LOS RESULTADOS

botonReiniciar.addEventListener("click", () => {
    clearInterval(intervalo);
    resultado.classList.add("oculto");
    seleccionModo.classList.remove("oculto");
});

// CRONÓMETRO

function iniciarCronometro() {
    clearInterval(intervalo);

    intervalo = setInterval(() => {
        tiempo++;
        actualizarCronometro();
    }, 1000);
}

function actualizarCronometro() {
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;

    contador.textContent =
        `⏱️ ${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

// FINALIZAR TEST

function terminarTest() {
    clearInterval(intervalo);

    const puntos = calcularPuntos();
    const total = preguntasTest.length;
    const porcentaje = puntos / total * 100;
    const notaFinal = puntos / total * 10;

    test.classList.add("oculto");
    resultado.classList.remove("oculto");

    barraProgreso.style.width = "100%";

    nota.textContent = `${notaFinal.toFixed(2)}/10`;

    mensajeResultado.textContent =
        `Has acertado ${puntos} de ${total} preguntas (${porcentaje.toFixed(1)}%).`;

    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;

    tiempoFinal.textContent =
        `⏱️ Tiempo empleado: ${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}
