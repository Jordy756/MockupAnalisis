import { validate } from "../utils/validateErrors.js";

const errorTypes = ["valueMissing", "typeMismatch", "tooShort"];
const errorMessages = {
    email: {
        valueMissing: "Este campo no puede ir vacío",
        typeMismatch: "Formato no válido",
    },
    password: {
        valueMissing: "Este campo no puede ir vacío",
        tooShort: "La contraseña debe tener mínimo 8 y máximo 10 dígitos",
    },
};

const inputs = document.querySelectorAll(".input");
inputs.forEach(input => input.addEventListener("input", input => validate(input.target, errorTypes, errorMessages)));