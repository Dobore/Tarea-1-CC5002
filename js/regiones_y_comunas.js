fetch('region_comuna.json')
        .then(response => response.json())
        .then(data => {
            const regionesSelect = document.getElementById('regiones');
            const comunasSelect = document.getElementById('comunas');
            
            // Rellenar el selector de regiones
            data.regiones.forEach(region => {
                const option = document.createElement('option');
                option.value = region.id;
                option.textContent = region.nombre;
                regionesSelect.appendChild(option);
            });

            // Actualizar comunas cuando se seleccione una región
            regionesSelect.addEventListener('change', () => {
                const selectedRegionId = parseInt(regionesSelect.value, 10);
                const selectedRegion = data.regiones.find(region => region.id === selectedRegionId);

                // Limpiar el selector de comunas
                comunasSelect.innerHTML = '';

                if (selectedRegion) {
                    selectedRegion.comunas.forEach(comuna => {
                        const option = document.createElement('option');
                        option.value = comuna.id;
                        option.textContent = comuna.nombre;
                        comunasSelect.appendChild(option);
                    });
                }
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));



