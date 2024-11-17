// Configurar la fecha del evento
const eventDate = new Date("2024-12-28T15:00:00"); // 28 de diciembre de 2024, 3 PM
const timerElement = document.getElementById("countdown-timer");

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timerElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
    } else {
        timerElement.textContent = "0 días, 0 horas, 0 minutos y 0 segundos";
    }
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();
