const themeToggle = document.getElementById('themeToggle');
const searchToggle = document.getElementById('searchToggle');
const closeSearch = document.getElementById('closeSearch');
const searchContainer = document.getElementById('searchContainer');
const mainHeader = document.getElementById('mainHeader');
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');

// 1. Dark Mode / Light Mode Toggle Functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    // Change icon based on current mode
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙'; 
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Load saved theme on startup
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

// 2. Search Bar Toggle Functionality
searchToggle.addEventListener('click', () => {
    searchContainer.classList.add('active');
    // Hide the main icons and logo when search is active
    mainHeader.querySelector('.header-icons').style.visibility = 'hidden'; 
    mainHeader.querySelector('.header-logo-container').style.visibility = 'hidden'; 
    searchContainer.querySelector('.search-input').focus();
});

// Close Search Functionality
closeSearch.addEventListener('click', () => {
    searchContainer.classList.remove('active');
    // Show the main icons and logo again
    mainHeader.querySelector('.header-icons').style.visibility = 'visible'; 
    mainHeader.querySelector('.header-logo-container').style.visibility = 'visible';
});

// 3. Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
});

// Close menu when clicking outside (simple method)
document.addEventListener('click', (e) => {
    // Check if the click is outside the header AND outside the menu overlay AND the menu is currently active
    if (!mainHeader.contains(e.target) && !menuOverlay.contains(e.target) && menuOverlay.classList.contains('active')) {
         menuOverlay.classList.remove('active');
    }
});
