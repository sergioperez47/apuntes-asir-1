
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

    const botonCambiarUnidad =
        document.getElementById("botonCambiarUnidad");
    const botonCambiarUnidadResultado =
        document.getElementById("botonCambiarUnidadResultado");

    // Localizar los botones Normal y Aleatorio.
    const botonesModo = seleccionModo
        ? seleccionModo.querySelector(".botones-modo")
        : null;

    // Volver a la pantalla de selección de unidades.
    function volverAlSelector() {
        window.location.href = window.location.pathname;
    }

    // Seleccionar una unidad y cargarla desde cero.
    function seleccionarUnidad(numero) {
        window.location.href =
            `${window.location.pathname}?unidad=${numero}`;
    }

    // Comprobar que existen los elementos necesarios.
    if (
        !selectorUnidades ||
        !botonUnidad1 ||
        !botonUnidad2 ||
        !seleccionModo
    ) {
        console.error(
            "Faltan elementos del selector de unidades en index.html."
        );
        return;
    }

    // Eventos de selección de unidad.
    botonUnidad1.addEventListener("click", () => {
        seleccionarUnidad(1);
    });

    botonUnidad2.addEventListener("click", () => {
        seleccionarUnidad(2);
    });

    // Eventos para cambiar de unidad, si existen esos botones.
    if (botonCambiarUnidad) {
        botonCambiarUnidad.addEventListener("click", volverAlSelector);
    }

    if (botonCambiarUnidadResultado) {
        botonCambiarUnidadResultado.addEventListener(
            "click",
            volverAlSelector
        );
    }

    // Si no hay unidad elegida, mostrar el selector.
    if (unidadElegida !== "1" && unidadElegida !== "2") {
        selectorUnidades.classList.remove("oculto");

        if (botonesModo) {
            botonesModo.classList.add("oculto");
        }

        if (test) {
            test.classList.add("oculto");
        }

        if (resultado) {
            resultado.classList.add("oculto");
        }

        if (tituloUnidad) {
            tituloUnidad.textContent =
                "Selecciona la unidad que quieres practicar";
        }

        return;
    }

    // Ocultar el selector y mostrar los modos de test.
    selectorUnidades.classList.add("oculto");

    if (botonesModo) {
        botonesModo.classList.remove("oculto");
    }

    // Mostrar el nombre de la unidad elegida.
    if (tituloUnidad) {
        tituloUnidad.textContent = unidadElegida === "1"
            ? "Unidad 1 - ISO"
            : "Unidad 2 - Virtualización y VirtualBox";
    }

    // Cargar solo el JavaScript de la unidad seleccionada.
    const script = document.createElement("script");

    if (unidadElegida === "1") {
        script.src = "unidad_1_iso.js";
    } else {
        script.src = "unidad_2_iso.js";
    }

    script.onerror = () => {
        alert(
            "No se ha podido cargar " + script.src +
            ". Comprueba que el archivo existe en la carpeta iso."
        );
    };

    document.body.appendChild(script);
});
