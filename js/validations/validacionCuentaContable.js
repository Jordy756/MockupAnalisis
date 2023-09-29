import { validate } from "../../utils/validateErrors.js";

const errorTypes = ["valueMissing", "patternMismatch"];
const errorMessages = {
    codigo: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    nombre: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    busqueda: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
};

const inputs = document.querySelectorAll(".input");
inputs.forEach(input => input.addEventListener("input", input => validate(input.target, errorTypes, errorMessages)));
