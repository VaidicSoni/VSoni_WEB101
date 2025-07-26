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

document.getElementById("enquiry-btn").addEventListener("click", () => {
  document.getElementById("enquiry").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("destinations-btn").addEventListener("click", () => {
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
});