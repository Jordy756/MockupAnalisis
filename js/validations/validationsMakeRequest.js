import { validate, send } from "../../utils/validateErrors.js";

const errorMessages = {
    search: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    description: {
        valueMissing: "Este campo no puede ir vacío",
    },
    quantity: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No debe ingresar caracteres especiales",
    },
};

document.querySelectorAll(".input, .textarea").forEach(input => input.addEventListener("input", () => validate(input, errorMessages)));
const form = document.getElementById("form-make-request");
form.addEventListener("submit", e => send(form, e));
