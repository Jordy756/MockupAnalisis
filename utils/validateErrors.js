export const validate = (input, errorMessages) => {
    const span = input.parentElement.querySelector(".span-for-input-error");
    span.textContent = Object.keys(errorMessages[input.id])
        .filter(error => input.validity[error])
        .map(error => errorMessages[input.id][error])
        .join(" ");
    input.style.borderColor = span.textContent ? "#f41d1d" : "#849a30";
};

export const send = (form, e) => {
    document.querySelectorAll(".input").forEach(validate);
    const errorSpans = form.querySelectorAll(".span-for-input-error");
    Array.from(errorSpans).some(span => span.textContent !== "") && e.preventDefault();
};
