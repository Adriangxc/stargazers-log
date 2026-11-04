fetch("events.json")
    .then(response => response.json())
    .then(repositorios => {

        const contenedor = document.getElementById("repositorios");
        const buscador = document.getElementById("buscador");

        function mostrarRepositorios(lista) {
            contenedor.innerHTML = "";

            lista.forEach(repo => {
                const tarjeta = document.createElement("div");

                tarjeta.className = "tarjeta";

                tarjeta.innerHTML = `
                    <h2>${repo.nombre}</h2>
                    <p>${repo.descripcion}</p>
                    <a href="${repo.url}" target="_blank">Ver repositorio</a>
                `;

                contenedor.appendChild(tarjeta);
            });
        }

        mostrarRepositorios(repositorios);

        buscador.addEventListener("input", () => {
            const texto = buscador.value.toLowerCase();

            const filtrados = repositorios.filter(repo =>
                repo.nombre.toLowerCase().includes(texto)
            );

            mostrarRepositorios(filtrados);
        });

    })
    .catch(error => {
        console.error("Error al cargar los repositorios:", error);
    });