const mostrarMensaje = (titulo, accion, mensaje) => {
    Swal.fire({
        title: "¿Estás seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0066ff",
        cancelButtonColor: "#FF0000",
        iconColor: "#FF0000",
        confirmButtonText: `Sí, ${accion}`,
        cancelButtonText: "Cancelar",
    }).then(result => result.isConfirmed && Swal.fire(titulo, mensaje, "success"));
};

document.getElementById("btn-eliminar").addEventListener("click", () => mostrarMensaje("Eliminado", "eliminar", "Se ha eliminado correctamente"));

// document
//     .getElementById("btn-confirmacion-actualizacion")
//     .addEventListener("click", () => mostrarMensaje("Actualizado", "actualizar", "Se ha actualizado correctamente"));

function mostrarModal(id) {
    const modal = document.getElementById(id);
    const cerrar = modal.querySelector(".button-close-modal");
    modal.classList.add("modal-active");
    cerrar.addEventListener("click", () => modal.classList.remove("modal-active"));
    window.addEventListener("click", evento => evento.target == modal && modal.classList.remove("modal-active"));
}

// No se para que es, aún
// function formatPhone(input) {
//     input.value = input.value.replace(/\D/g, "").replace(/(\d{4})(\d{4})/, "$1-$2");
// }
// const btnActualizar = document.querySelector("#btn-confirmacion-actualizacion");
// btnActualizar.addEventListener("click", e => e.preventDefault());
