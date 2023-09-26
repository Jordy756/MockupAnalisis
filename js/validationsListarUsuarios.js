import { validate } from "../utils/validateErrors.js";

const errorTypes = ["valueMissing","typeMismatch","patternMismatch"];
const errorMessages = {
    email: {
        valueMissing: "Este campo no puede ir vacío",
        typeMismatch: "Formato no válido",
    },
    nombre: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    apellido: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    rol: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    busqueda: {
        patternMismatch: "No se permiten caracteres especiales",
    },
};

const inputs = document.querySelectorAll(".input");
inputs.forEach(input => input.addEventListener("input", input => validate(input.target, errorTypes, errorMessages)));