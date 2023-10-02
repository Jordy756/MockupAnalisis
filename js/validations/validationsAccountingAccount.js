import { validate, send } from "../../utils/validateErrors.js";

const errorMessages = {
    search: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    cod: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    name: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
};

document.querySelectorAll(".input").forEach(input => input.addEventListener("input", () => validate(input, errorMessages)));
const formAdd = document.getElementById("add-accounting-account");
const formUpdate = document.getElementById("update-accounting-account");
formAdd.addEventListener("submit", e => send(formAdd, e));
formUpdate.addEventListener("submit", e => send(formUpdate, e));
