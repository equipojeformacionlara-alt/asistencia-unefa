input.addEventListener('input', () => {
    const valor = input.value.trim(); // Quitamos espacios accidentales
    
    // Cambiamos .find por .filter para ver TODAS las clases del docente
    const resultados = docentes.filter(d => d.cedula === valor);

    if (resultados.length > 0) {
        // Limpiamos el contenedor antes de mostrar los nuevos resultados
        contenedor.innerHTML = ""; 
        
        resultados.forEach(encontrado => {
            contenedor.innerHTML += `
                <div class="card">
                    <h3>${encontrado.nombre}</h3>
                    <p><strong>Sección:</strong> ${encontrado.SECCION}</p>
                    <p><strong>Aula:</strong> ${encontrado.aula}</p>
                    <p><strong>Horario:</strong> ${encontrado.dia} ${encontrado.horario}</p>
                    <p><strong>Contacto:</strong> ${encontrado.Telf}</p>
                </div>`;
        });
    } else {
        contenedor.innerHTML = valor === "" ? "" : "<p>No se encontró información</p>";
    }
});