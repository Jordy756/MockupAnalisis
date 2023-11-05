const quantityInputs = document.querySelectorAll(".input");
const buttonSave = document.querySelector(".button-save-quantity");

buttonSave.addEventListener("click", () => buttonSave.classList.remove("button-save-quantity-active"));
quantityInputs.forEach(input =>
    input.addEventListener(
        "input",
        () => !buttonSave.classList.contains("button-save-quantity-active") && buttonSave.classList.add("button-save-quantity-active")
    )
);
