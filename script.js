// Select Earth and Moon elements
const earth = document.querySelector('.earth');
const moon = document.querySelector('.moon');

// Select buttons
const earthClockwiseButton = document.getElementById('earth-clockwise');
const earthCounterButton = document.getElementById('earth-counter');
const moonClockwiseButton = document.getElementById('moon-clockwise');
const moonCounterButton = document.getElementById('moon-counter');

// Add event listeners to buttons to update animation
earthClockwiseButton.addEventListener('click', () => {
    earth.style.animation = 'orbit-earth 36.5s linear infinite';
});

earthCounterButton.addEventListener('click', () => {
    earth.style.animation = 'orbit-earth-reverse 36.5s linear infinite';
});

moonClockwiseButton.addEventListener('click', () => {
    moon.style.animation = 'orbit-moon 2.7s linear infinite';
});

moonCounterButton.addEventListener('click', () => {
    moon.style.animation = 'orbit-moon-reverse 2.7s linear infinite';
});

// Add reverse animations dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes orbit-earth-reverse {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
}

@keyframes orbit-moon-reverse {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
}`;
document.head.appendChild(style);
