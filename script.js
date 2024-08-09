const toggleButton = document.getElementById('toggle-mode');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
    // Toggle between light and dark mode
    bodyElement.classList.toggle('dark-mode');
    bodyElement.classList.toggle('light-mode');

    // Update the button text based on the current mode
    if (bodyElement.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light';
    } else {
        toggleButton.textContent = 'Dark';
    }
});
