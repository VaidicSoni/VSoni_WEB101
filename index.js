document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.querySelector('#theme-button');

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    themeButton.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    themeButton.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode');
  };

  themeButton.addEventListener('click', toggleDarkMode);
});