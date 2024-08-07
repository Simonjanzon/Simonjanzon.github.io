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

document.addEventListener('DOMContentLoaded', () => {
    const gifLibrary = [
      'gifs/simon1.gif',
      'gifs/simon2.gif',
      'gifs/simon3.gif',
      'gifs/simon4.gif',
      'gifs/simon4.gif',
      'gifs/erik1.gif',
      'gifs/erik2.gif',
      'gifs/johan-erik.gif',
      'gifs/johan1.gif',
      'gifs/johan2.gif',
      'gifs/johan3.gif',
      'gifs/kalle1.gif',
      'gifs/kalle2.gif',
      'gifs/mrgreen.gif',

    ];
  
    const randomGifButton = document.getElementById('randomGifButton');
    const gifDisplay = document.getElementById('randomGifDisplay');
  
    randomGifButton.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * gifLibrary.length);
      const selectedGif = gifLibrary[randomIndex];
  
      gifDisplay.src = selectedGif;
      gifDisplay.style.display = 'block';
    });
  });

