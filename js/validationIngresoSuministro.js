import { validate } from "../utils/validateErrors.js";

const errorTypes = ["valueMissing",,"patternMismatch"];
const errorMessages = {
    cuentaContable: {
        valueMissing: "Este campo no puede ir vacío",
       
    },
    grupo: {
        valueMissing: "Este campo no puede ir vacío",
       
    },
    nombre: {
        valueMissing: "Este campo no puede ir vacío",
       
    },
    unidadDeMedida: {
        valueMissing: "Este campo no puede ir vacío",
        
       
    },
    subgrupo: {
        valueMissing: "Este campo no puede ir vacío",
        
       
    },
    marca: {
        valueMissing: "Este campo no puede ir vacío",
       
    },
    proveedor: {
        valueMissing: "Este campo no puede ir vacío",
       
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