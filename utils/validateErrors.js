export const validate = (input, errorTypes, errorMessages) => {
    const span = input.parentElement.querySelector(".span-for-input-error");
    if (input.validity.valid) {
        span.textContent = "";
        input.style.borderColor = "#849a30";
    } else {
        span.textContent = showMessage(input, errorTypes, errorMessages);
        input.style.borderColor = "#f41d1d";
    }
};

const showMessage = (input, errorTypes, errorMessages) => {
    let message = "";
    errorTypes.forEach(error => input.validity[error] && (message = errorMessages[input.id][error]));
    return message;

    console.log()
};
