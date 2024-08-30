const images = [
    'img/mp.jpg',
    'img/carreraverde.jpg',
    'img/chivor.jpg',
    'img/mmb.jpg',
    'img/allianz.jpg',
    'img/rc.jpg'
  ];
  
  let currentImageIndex = 0;
  const profileImage = document.getElementById('hobbiesImage');
  
  function changeImage() {
    profileImage.style.opacity = 0; // Oculta la imagen actual con opacidad 0
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length; // Avanza al siguiente índice
      profileImage.src = images[currentImageIndex]; // Cambia la imagen
      profileImage.style.opacity = 1; // Muestra la nueva imagen
    }, 500); // Tiempo de espera correspondiente a la transición en CSS (0.5s = 500ms)
  }
  
  // Llama a la función para iniciar el ciclo de cambio de imágenes
  setInterval(changeImage, 3000); // Cambia la imagen cada 3 segundos (ajusta el tiempo según prefieras)

 function copiarCorreo(){

    var correo = document.getElementById("correo").innerText;
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = correo;
    document.body.appendChild(elementoTemporal);

    // Seleccionar el texto y copiarlo
    elementoTemporal.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(elementoTemporal);

    // Opcional: Mostrar un mensaje o alerta
    alert("Correo copiado: " + correo);

  }
  