import { validate } from "../utils/validateErrors.js";

const errorTypes = ["valueMissing", "patternMismatch"];
const errorMessages = {
    codigoSuministro: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "Formato no válido",
    },
    cantidad: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No debe ingresar caracteres especiales",
    },
};

const inputs = document.querySelectorAll(".input");
inputs.forEach(input => input.addEventListener("input", input => validate(input.target, errorTypes, errorMessages)));