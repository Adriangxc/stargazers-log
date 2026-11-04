fetch("./events.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("No se pudo cargar events.json");
        }
        return response.json();
    })
    .then(repositorios => {

        const contenedor = document.getElementById("repositorios");
        const buscador = document.getElementById("buscador");

        function mostrarRepositorios(lista) {
            contenedor.innerHTML = "";

            lista.forEach(repo => {
                const tarjeta = document.createElement("div");
                tarjeta.className = "tarjeta";

                tarjeta.innerHTML = `
                    <h2>${repo.name}</h2>
                    <p>${repo.description}</p>
                    <a href="${repo.url}" target="_blank">View repository</a>
                `;

                contenedor.appendChild(tarjeta);
            });
        }

        mostrarRepositorios(repositorios);

        buscador.addEventListener("input", () => {
            const texto = buscador.value.toLowerCase();

            const filtrados = repositorios.filter(repo =>
                repo.name.toLowerCase().includes(texto)
            );

            mostrarRepositorios(filtrados);
        });
    })
    .catch(error => console.error(error));