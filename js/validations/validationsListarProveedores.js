import { validate } from "../../utils/validateErrors.js";

const errorTypes = ["valueMissing","patternMismatch"];
const errorMessages = {
    nombre: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    direction: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    telefono: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    busqueda: {
        patternMismatch: "No se permiten caracteres especiales",
        valueMissing: "Para buscar es necesario ingresar un nombre",
    },
};

const inputs = document.querySelectorAll(".input");
inputs.forEach(input => input.addEventListener("input", input => validate(input.target, errorTypes, errorMessages)));