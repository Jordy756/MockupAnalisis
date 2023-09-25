import { validate } from "../utils/validateErrors.js";

const errorTypes = ["valueMissing","patternMismatch"];
const errorMessages = {
    nombre: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No debe llevar ningún caracter especial",
    },
    direction: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No debe llevar ningún caracter especial",
    },
    telefono: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No debe llevar ningún caracter especial",
    },
    busqueda: {
        patternMismatch: "No debe llevar ningún caracter especial",
    },
};

const inputs = document.querySelectorAll(".input");
inputs.forEach(input => input.addEventListener("input", input => validate(input.target, errorTypes, errorMessages)));