document.addEventListener("DOMContentLoaded", async () => {
  const listContainer = document.getElementById("starred-list");

  // Verificamos por seguridad si el contenedor existe en el HTML
  if (!listContainer) {
    console.error("No se encontró el elemento con id 'starred-list' en el HTML.");
    return;
  }

  try {
    const response = await fetch("events.json");
    const repositories = await response.json();

    listContainer.innerHTML = "";

    repositories.forEach(repo => {
      const li = document.createElement("li");
      
      li.innerHTML = `
        <strong>${repo.name}</strong> 
        <br><small>Starred on: ${repo.starred}</small>
        <br><a href="https://github.com/${repo.name}" target="_blank">Ver repositorio</a>
      `;
      
      listContainer.appendChild(li);
    });
  } catch (error) {
    console.error("Error al cargar los repositorios:", error);
    listContainer.innerHTML = "<li>Error al cargar los datos.</li>";
  }
});