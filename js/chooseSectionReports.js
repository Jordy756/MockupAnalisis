const toggleElement = (flag, targetElement) => (flag !== 0 ? (targetElement.style.display = "block") : (targetElement.style.display = "none"));

const unitReports = document.getElementById("unit-reports");
const unitsReports = document.getElementById("units-reports");
const departmentReports = document.getElementById("department-reports");
const departmentsReports = document.getElementById("departments-reports");

unitReports.addEventListener("change", () => {
    toggleElement(1, unitsReports);
    toggleElement(0, departmentsReports);
});

departmentReports.addEventListener("change", () => {
    toggleElement(0, unitsReports);
    toggleElement(1, departmentsReports);
});
