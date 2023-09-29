import { validate } from "../../utils/validateErrors.js";

const errorTypes = ["valueMissing","patternMismatch"];
const errorMessages = {
    cantidad: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "Solo se permite ingresar valores numéricos",
    },
};

const inputs = document.querySelectorAll(".input");
inputs.forEach(input => input.addEventListener("input", input => validate(input.target, errorTypes, errorMessages)));