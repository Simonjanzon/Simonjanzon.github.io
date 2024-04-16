// Set the date and time for the countdown (year, month (0-based), day, hour, minute, second)
const countdownDate = new Date(2024, 7, 31, 15, 0, 0).getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, stop the countdown
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'EXPIRED';
    }
}, 1000);

function startBackgroundMusic() {
    // Get the audio element
    const waves = document.getElementById('waves');
    
    // Play the background music
    waves.play();
    
    // Remove the onclick attribute to prevent repeated playback
    document.getElementById('countdown').removeAttribute('onclick');
    
    // Pause the background music when the page is hidden
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            waves.pause();
        } else {
            waves.play();
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const body = document.getElementById('body');
    const endDate = document.getElementById('end-date');
    const waveImage = document.getElementById('wave-image');
    const moreInfo = document.getElementById('more-info');

    body.addEventListener('click', function() {
        endDate.classList.toggle('fly-in');
        moreInfo.classList.toggle('fly-in');
        waveImage.classList.toggle('fade-in');

    });
});

