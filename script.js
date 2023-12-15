const modeSwitch = document.getElementById('modeSwitch');
const container = document.querySelector('.container');

modeSwitch.addEventListener('change', () => {
    container.classList.toggle('dark-mode');
});

