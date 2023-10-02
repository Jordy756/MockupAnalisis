import { validate, send } from "../../utils/validateErrors.js";

const errorMessages = {
    search: {
        patternMismatch: "No se permiten caracteres especiales",
        valueMissing: "Para buscar es necesario ingresar un nombre",
    },
    accountingAccount: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    group: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    name: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    unitMeasurement: {
        valueMissing: "Este campo no puede ir vacío",
    },
    subgroup: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    brand: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    supplier: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "No se permiten caracteres especiales",
    },
    quantity: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "Solo se permite ingresar valores numéricos",
    },
    unitValue: {
        valueMissing: "Este campo no puede ir vacío",
        patternMismatch: "Solo se permite ingresar valores numéricos",
    },
    cod: {
        valueMissing: "Este campo no puede ir vacío",
    },
};

document.querySelectorAll(".input").forEach(input => input.addEventListener("input", () => validate(input, errorMessages)));
const formAdd = document.getElementById("add-supply-form");
const formUpdate = document.getElementById("update-supply-form");
formAdd.addEventListener("submit", e => send(formAdd, e));
formUpdate.addEventListener("submit", e => send(formUpdate, e));
