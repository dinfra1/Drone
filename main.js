{
   // Lista de videos
const videos = [
    "video/video1.mp4",
    "video/video2.mp4",
    "video/video3.mp4"
];

const videoElement = document.getElementById("video_home");
const menuBtn = document.querySelector('#menu_btb');
const menuPrincipal = document.querySelector('.menu_principal');
let currentIndex = 0;

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bx-x');
    menuPrincipal.classList.toggle('active');
}

//Remover el menu resosive al presionar 

window.onscroll = () =>{
    menuBtn.classList.remove('bx-x')
    menuPrincipal.classList.remove('active')
}

// Función para cambiar videos con transición suave
function changeVideo() {
    // Inicia la transición para desvanecer el video actual
    videoElement.classList.add("hidden");

    // Espera el tiempo de la transición (1.5s) antes de cambiar el video
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % videos.length; // Cambia al siguiente video
        videoElement.src = videos[currentIndex];
        videoElement.load(); // Carga el nuevo video
        videoElement.play(); // Reproduce el video automáticamente

        // Muestra el nuevo video
        videoElement.classList.remove("hidden");
    }, 1500); // Coincide con la duración de la transición CSS
}

// Cambiar video cada 20 segundos
setInterval(changeVideo, 20000);


    // const dron = document.getElementById("dron");
    // const portada = document.getElementById("portada");

    // // Variables de posición
    // let posX = 50;
    // let posY = 50;
    // let speedX = 2; // Velocidad en el eje X
    // let speedY = 1.5; // Velocidad en el eje Y

    // function moverDron() {
    //     // Cambiar la posición
    //     posX += speedX;
    //     posY += speedY;

    //     // Detectar colisiones con los bordes
    //     if (posX + dron.width >= portada.offsetWidth || posX <= 0) speedX *= -1;
    //     if (posY + dron.height >= portada.offsetHeight || posY <= 0) speedY *= -1;

    //     // Actualizar la posición del dron
    //     dron.style.left = posX + "px";
    //     dron.style.top = posY + "px";

    //     // Llamar nuevamente a la función para animar
    //     requestAnimationFrame(moverDron);
    // }

    // // Iniciar la animación
    // moverDron();

const panels = document.querySelectorAll('.panel')
const texts =  document.querySelectorAll(".text_p")

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.toggle('optimu')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('optimu')
    })
}

const form = document.querySelector('#contactForm');

form.addEventListener('submit', handlesubmit);

async function handlesubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept' : 'application/json'
        }
    })
    if(response.ok){
        this.reset();
        alert('Gracias por contactarme, pronto te llamare')

    }
}
}