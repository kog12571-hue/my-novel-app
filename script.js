const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const themeToggle = document.getElementById('themeToggle');
const searchToggle = document.getElementById('searchToggle');
const searchContainer = document.getElementById('searchContainer');
const closeSearch = document.getElementById('closeSearch');

// Side Menu
menuToggle.addEventListener('click', () => menuOverlay.classList.toggle('active'));

document.addEventListener('click', (e) => {
    if (!menuOverlay.contains(e.target) && !menuToggle.contains(e.target)) {
        menuOverlay.classList.remove('active');
    }
});

// Search
searchToggle.addEventListener('click', () => searchContainer.classList.add('active'));
closeSearch.addEventListener('click', () => searchContainer.classList.remove('active'));

// Dark Mode
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
