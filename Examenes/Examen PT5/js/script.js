const ciudades = [
    { nombre: "Ciudad 1", descripcion: "Descripción de la Ciudad 1" },
    { nombre: "Ciudad 2", descripcion: "Descripción de la Ciudad 2" },
    { nombre: "Ciudad 3", descripcion: "Descripción de la Ciudad 3" },
  ];

  const carouselContainer = document.getElementById('carousel');
  
  ciudades.forEach(ciudad => {
    const ciudadCard = document.createElement('div');
    ciudadCard.classList.add('ciudad-card');
    ciudadCard.innerHTML = `
      <h2>${ciudad.nombre}</h2>
      <p>${ciudad.descripcion}</p>
    `;
    carouselContainer.appendChild(ciudadCard);
  });

  let currentIndex = 0;

  function showCity(index) {
    const newTransformValue = -index * 100 + '%';
    carouselContainer.style.transform = `translateX(${newTransformValue})`;
  }

  showCity(currentIndex);

  setInterval(() {
    currentIndex = (currentIndex + 1) % ciudades.length;
    showCity(currentIndex);
  }, 3000);