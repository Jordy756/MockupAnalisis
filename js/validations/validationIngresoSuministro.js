import { validate } from "../utils/validateErrors.js";

const errorTypes = ["valueMissing", , "patternMismatch"];
const errorMessages = {
    cuentaContable: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    grupo: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    nombre: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    unidadDeMedida: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    subgrupo: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    marca: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    proveedor: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
    },
    cantidad: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No pueden ir caracteres especiales",
        patternMismatch: "No debe llevar ningún caracter especial",
    },
    codigo: {
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
