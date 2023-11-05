// import { validate, send } from "../../utils/validateErrors.js";

// const errorMessages = {
//     search: {
//         patternMismatch: "No se permiten caracteres especiales",
//         valueMissing: "Para buscar es necesario ingresar un nombre",
//     },
//     name: {
//         valueMissing: "Este campo no puede ir vacío",
//         patternMismatch: "No se permiten caracteres especiales",
//     },
//     address: {
//         valueMissing: "Este campo no puede ir vacío",
//         patternMismatch: "No se permiten caracteres especiales",
//     },
// };

// document.querySelectorAll(".input").forEach(input => input.addEventListener("input", () => validate(input, errorMessages)));
// const formAdd = document.getElementById("add-unit-form");
// const formUpdate = document.getElementById("update-unit-form");
// formAdd.addEventListener("submit", e => send(formAdd, e));
// formUpdate.addEventListener("submit", e => send(formUpdate, e));