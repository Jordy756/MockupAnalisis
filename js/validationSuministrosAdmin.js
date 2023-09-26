import { validate } from "../utils/validateErrors.js";

const errorTypes = ["valueMissing","patternMismatch"];
const errorMessages = {
    cuentaContable: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    grupo: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    nombre: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    unidadDeMedida: {
        valueMissing: "Este campo no puede ir vacío",
    },
    subgrupo: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    marca: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    proveedor: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    cantidad: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No debe llevar ningún caracter especial",
    },
    codigo: {
        valueMissing: "Este campo no puede ir vacío",
       
    },
};

const inputs = document.querySelectorAll(".input");
inputs.forEach(input => input.addEventListener("input", input => validate(input.target, errorTypes, errorMessages)));