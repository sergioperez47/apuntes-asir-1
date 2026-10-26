// Gestiona la selección entre las tres unidades de ISO.
// IMPORTANTE: en index.html deja SOLO:
// <script src="selector_unidades.js"></script>
// No cargues unidad_1_iso.js ni unidad_2_iso.js directamente desde el HTML.

document.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search);
    const unidadElegida = parametros.get("unidad");

    const selectorUnidades = document.getElementById("selectorUnidades");
    const botonUnidad1 = document.getElementById("botonUnidad1");
    const botonUnidad2 = document.getElementById("botonUnidad2");
    const botonUnidad3 = document.getElementById("botonUnidad3");
    const tituloUnidad = document.getElementById("tituloUnidad");

    const seleccionModo = document.getElementById("seleccionModo");
    const test = document.getElementById("test");
    const resultado = document.getElementById("resultado");

    const botonCambiarUnidad = document.getElementById("botonCambiarUnidad");
    const botonCambiarUnidadResultado =
        document.getElementById("botonCambiarUnidadResultado");

    // En el index original, el primer .botones-modo contiene Normal/Aleatorio.
    const botonesModo = seleccionModo
        ? seleccionModo.querySelector(".botones-modo")
        : null;

    function volverAlSelector() {
        // Recarga la página sin parámetro; así se elimina el JS de la unidad anterior.
        window.location.href = window.location.pathname;
    }

    function seleccionarUnidad(numero) {
        // Recargar evita conflictos entre variables y eventos de los dos archivos JS.
        window.location.href = `${window.location.pathname}?unidad=${numero}`;
    }

    if (!selectorUnidades || !botonUnidad1 || !botonUnidad2 || !botonUnidad3 || !seleccionModo) {
        console.error(
            "No se encuentra el selector de unidades. Comprueba los IDs del index.html."
        );
        return;
    }

    // Botones para elegir la unidad.
    botonUnidad1.addEventListener("click", () => seleccionarUnidad(1));
    botonUnidad2.addEventListener("click", () => seleccionarUnidad(2));
    botonUnidad3.addEventListener("click", () => seleccionarUnidad(3));

    // Botones para volver a elegir unidad, si existen en el HTML.
    if (botonCambiarUnidad) {
        botonCambiarUnidad.addEventListener("click", volverAlSelector);
    }

    if (botonCambiarUnidadResultado) {
        botonCambiarUnidadResultado.addEventListener("click", volverAlSelector);
    }

    if (!["1", "2", "3"].includes(unidadElegida)) {
        // Estado inicial: mostrar selección de unidad, ocultar modo/test/resultados.
        selectorUnidades.classList.remove("oculto");
        if (botonesModo) botonesModo.classList.add("oculto");
        if (test) test.classList.add("oculto");
        if (resultado) resultado.classList.add("oculto");

        if (tituloUnidad) {
            tituloUnidad.textContent = "Selecciona la unidad que quieres practicar";
        }
        return;
    }

    // Ya se ha elegido unidad: ocultar selector y mostrar los modos.
    selectorUnidades.classList.add("oculto");
    if (botonesModo) botonesModo.classList.remove("oculto");

    if (tituloUnidad) {
        tituloUnidad.textContent = unidadElegida === "1"
            ? "Unidad 1 - ISO"
            : unidadElegida === "2"
                ? "Unidad 2 - Virtualización y VirtualBox"
                : "Unidad 3 - Comandos Linux";
    }

    // Cargar únicamente el JS elegido. Nunca se cargan ambos a la vez.
    const script = document.createElement("script");
    script.src = unidadElegida === "1"
        ? "unidad_1_iso.js"
        : unidadElegida === "2"
            ? "unidad_2_iso.js"
            : "unidad_3_iso.js";
    script.onerror = () => {
        alert(
            `No se ha podido cargar ${script.src}. Comprueba que el archivo existe en la carpeta iso.`
        );
    };
    document.body.appendChild(script);
});
