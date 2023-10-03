const showMessage = (titulo, accion, mensaje) => {
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

document.getElementById("btn-eliminar").addEventListener("click", () => showMessage("Eliminado", "eliminar", "Se ha eliminado correctamente"));

// document
//     .getElementById("btn-confirmacion-actualizacion")
//     .addEventListener("click", () => mostrarMensaje("Actualizado", "actualizar", "Se ha actualizado correctamente"));

function showModal(id) {
    const modal = document.getElementById(id);
    const close = modal.querySelector(".button-close-modal");
    const modalContent = modal.querySelector(".modal-content");
    modal.classList.add("modal-active");
    modalContent.classList.add("modal-content-active");
    close.addEventListener("click", () => {
        modalContent.classList.remove("modal-content-active");
        modalContent.classList.add("modal-content-closing");
        setTimeout(() => {
            modal.classList.remove("modal-active");
            modalContent.classList.remove("modal-content-closing");
        }, 170);
    });
}

// No se para que es, aún, creo que es de las validaciones de Leo
// function formatPhone(input) {
//     input.value = input.value.replace(/\D/g, "").replace(/(\d{4})(\d{4})/, "$1-$2");
// }
// const btnActualizar = document.querySelector("#btn-confirmacion-actualizacion");
// btnActualizar.addEventListener("click", e => e.preventDefault());
