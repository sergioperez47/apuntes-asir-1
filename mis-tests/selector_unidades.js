
document.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search);
    const unidadElegida = parametros.get("unidad");

    const selectorUnidades = document.getElementById("selectorUnidades");
    const botonUnidad1 = document.getElementById("botonUnidad1");
    const botonUnidad2 = document.getElementById("botonUnidad2");
    const tituloUnidad = document.getElementById("tituloUnidad");
    const descripcionUnidad = document.getElementById("descripcionUnidad");

    const seleccionModo = document.getElementById("seleccionModo");
    const test = document.getElementById("test");
    const resultado = document.getElementById("resultado");

    const botonCambiarUnidad =
        document.getElementById("botonCambiarUnidad");
    const botonCambiarUnidadResultado =
        document.getElementById("botonCambiarUnidadResultado");
    const botonCambiarUnidadInicio =
        document.getElementById("botonCambiarUnidadInicio");

    const botonesModo = seleccionModo
        ? seleccionModo.querySelector(".botones-modo")
        : null;

    function volverAlSelector() {
        window.location.href = window.location.pathname;
    }

    function seleccionarUnidad(numero) {
        window.location.href =
            window.location.pathname + "?unidad=" + numero;
    }

    // Comprobar que existen los elementos necesarios
    if (!selectorUnidades || !botonUnidad1 || !botonUnidad2) {
        console.error("No se encuentra el selector de unidades.");
        return;
    }

    botonUnidad1.addEventListener("click", () => {
        seleccionarUnidad(1);
    });

    botonUnidad2.addEventListener("click", () => {
        seleccionarUnidad(2);
    });

    if (botonCambiarUnidad) {
        botonCambiarUnidad.addEventListener("click", volverAlSelector);
    }

    if (botonCambiarUnidadResultado) {
        botonCambiarUnidadResultado.addEventListener(
            "click",
            volverAlSelector
        );
    }

    if (botonCambiarUnidadInicio) {
        botonCambiarUnidadInicio.addEventListener(
            "click",
            volverAlSelector
        );
    }

    // Si no se ha elegido una unidad, mostrar el selector
    if (unidadElegida !== "1" && unidadElegida !== "2") {
        selectorUnidades.classList.remove("oculto");

        if (seleccionModo) seleccionModo.classList.add("oculto");
        if (test) test.classList.add("oculto");
        if (resultado) resultado.classList.add("oculto");

        return;
    }

    // Mostrar el test de la unidad seleccionada
    selectorUnidades.classList.add("oculto");

    if (seleccionModo) seleccionModo.classList.remove("oculto");
    if (botonesModo) botonesModo.classList.remove("oculto");
    if (test) test.classList.add("oculto");
    if (resultado) resultado.classList.add("oculto");

    if (tituloUnidad) {
        tituloUnidad.textContent =
            unidadElegida === "1" ? "Unidad 1 - Redes" : "Unidad 2 - Redes";
    }

    if (descripcionUnidad) {
        descripcionUnidad.textContent =
            unidadElegida === "1"
                ? "Unidad 1 - Introducción a las redes"
                : "Unidad 2 - Redes";
    }

    // Cargar el JavaScript correspondiente
    const script = document.createElement("script");

    script.src =
        unidadElegida === "1" ? "unidad_1.js" : "unidad_2.js";

    script.onerror = () => {
        alert(
            "No se ha podido cargar " + script.src +
            ". Comprueba que el archivo existe."
        );
    };

    document.body.appendChild(script);
});
