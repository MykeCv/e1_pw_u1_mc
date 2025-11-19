document.addEventListener("DOMContentLoaded", () => {

    const inputNombre = document.getElementById("input_nombre");
    const inputApellido = document.getElementById("input_apellido");
    const btnAgregar = document.getElementById("btn_agregar");

    const celdaNombre = document.getElementById("celda_nombre");
    const celdaApellido = document.getElementById("celda_apellido");

    btnAgregar.addEventListener("click", (e) => {
        e.preventDefault();

        const nombre = inputNombre.value.trim();
        const apellido = inputApellido.value.trim();

        if (nombre === "" || apellido === "") {
            alert("Completa ambos campos.");
            return;
        }
        celdaNombre.textContent = nombre;
        celdaApellido.textContent = apellido;
        inputNombre.value = "";
        inputApellido.value = "";

        inputNombre.focus();
    });
});

