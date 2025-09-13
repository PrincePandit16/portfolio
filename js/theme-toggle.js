document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggleButton.querySelector('i');

    const setIcon = (isDarkMode) => {
        if (isDarkMode) {
            icon.classList.remove('bi-moon-half');
            icon.classList.add('bi-sun');
        } else {
            icon.classList.remove('bi-sun');
            icon.classList.add('bi-moon-half');
        }
    };

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        setIcon(body.classList.contains('dark-mode'));
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
        setIcon(true);
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        setIcon(body.classList.contains('dark-mode'));

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', '');
        }
    });
});