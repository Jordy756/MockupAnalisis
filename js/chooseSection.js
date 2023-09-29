document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('input[type="radio"][name="section"]:checked');
    section.addEventListener("change", () => {
        console.log(section.value);
        if (section.value === "unit") {
            document.getElementById("units").style.display = "block";
            document.getElementById("departments").style.display = "none";
        } else {
            document.getElementById("departments").style.display = "block";
            document.getElementById("units").style.display = "none";
        }
    });
});
