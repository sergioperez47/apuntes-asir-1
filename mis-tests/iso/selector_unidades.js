document.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search);
    const unidadElegida = parametros.get("unidad");

    const selectorUnidades = document.getElementById("selectorUnidades");
    const botonUnidad1 = document.getElementById("botonUnidad1");
    const botonUnidad2 = document.getElementById("botonUnidad2");
    const tituloUnidad = document.getElementById("tituloUnidad");

    const seleccionModo = document.getElementById("seleccionModo");
    const test = document.getElementById("test");
    const resultado = document.getElementById("resultado");

    const botonCambiarUnidad = document.getElementById("botonCambiarUnidad");
    const botonCambiarUnidadResultado = document.getElementById("botonCambiarUnidadResultado");

    const botonesModo = seleccionModo
        ? seleccionModo.querySelector(".botones-modo")
        : null;

    // Los botones de modo los controla unidad_1_iso.js o unidad_2_iso.js.
    // No deben cambiar la URL, porque eso recarga la página y corta el test.

    function volverAlSelector() {
        window.location.href = window.location.pathname;
    }

    function seleccionarUnidad(numero) {
        window.location.href = `${window.location.pathname}?unidad=${numero}`;
    }

    if (!selectorUnidades || !botonUnidad1 || !botonUnidad2 || !seleccionModo) {
        console.error("Faltan elementos del selector de unidades en index.html.");
        return;
    }

    botonUnidad1.addEventListener("click", () => seleccionarUnidad(1));
    botonUnidad2.addEventListener("click", () => seleccionarUnidad(2));

    if (botonCambiarUnidad) {
        botonCambiarUnidad.addEventListener("click", volverAlSelector);
    }

    if (botonCambiarUnidadResultado) {
        botonCambiarUnidadResultado.addEventListener("click", volverAlSelector);
    }

    if (unidadElegida !== "1" && unidadElegida !== "2") {
        selectorUnidades.classList.remove("oculto");
        if (botonesModo) botonesModo.classList.add("oculto");
        if (test) test.classList.add("oculto");
        if (resultado) resultado.classList.add("oculto");

        if (tituloUnidad) {
            tituloUnidad.textContent = "Selecciona la unidad que quieres practicar";
        }
        return;
    }

    selectorUnidades.classList.add("oculto");
    if (botonesModo) botonesModo.classList.remove("oculto");

    if (tituloUnidad) {
        tituloUnidad.textContent = unidadElegida === "1"
            ? "Unidad 1 - ISO"
            : "Unidad 2 - Virtualización y VirtualBox";
    }

    const script = document.createElement("script");
    script.src = unidadElegida === "1" ? "unidad_1_iso.js" : "unidad_2_iso.js";

    script.onerror = () => {
        alert(
            "No se ha podido cargar " + script.src +
            ". Comprueba que el archivo existe en la carpeta iso."
        );
    };

    document.body.appendChild(script);
});
