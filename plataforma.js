// Manejo de clic en una fila de caso TICHELP.NET
const caseRows = document.querySelectorAll(".case-row");
const caseDescriptionText = document.getElementById("case-description-text");

caseRows.forEach((row) => {
    row.addEventListener("click", () => {
        const description = row.getAttribute("data-description");
        caseDescriptionText.textContent = description;
    });
});

// Manejo de clic en las categorías TICHELP.NET
const categorias = document.querySelectorAll("nav ul li a");

categorias.forEach((categoria) => {
    categoria.addEventListener("click", (e) => {
        e.preventDefault();
        const categoriaSeleccionada = e.target.id;
        caseRows.forEach((row) => {
            if (row.classList.contains(categoriaSeleccionada)) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });
        caseDescriptionText.textContent = "Selecciona un caso para ver su descripción.";
    });
});
