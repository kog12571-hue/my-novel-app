// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenu = document.getElementById('closeMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuOverlay.classList.add('active');
        });
    }
    
    // Close menu when clicking outside
    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
        }
    });
    
    // Search Toggle
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.getElementById('searchContainer');
    const closeSearch = document.getElementById('closeSearch');
    
    if (searchToggle) {
        searchToggle.addEventListener('click', function() {
            searchContainer.classList.add('active');
        });
    }
    
    if (closeSearch) {
        closeSearch.addEventListener('click', function() {
            searchContainer.classList.remove('active');
        });
    }
    
    // Theme Toggle (Dark/Light Mode)
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        // Check for saved theme or prefer-color-scheme
        const savedTheme = localStorage.getItem('theme') || 
                          (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️'; // Sun for light mode
        }
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            }
        });
    }
    
    // Login/Register Form Handling
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            // Simple validation
            if (email && password) {
                alert('ဝင်ရောက်မှု အောင်မြင်ပါသည်!');
                // In real app, send to server
                // window.location.href = 'index.html';
            }
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            
            if (name && email && password) {
                alert('အကောင့်ဖွင့်ခြင်း အောင်မြင်ပါသည်!');
                // In real app, send to server
                // window.location.href = 'login.html';
            }
        });
    }
    
    // Make featured cards clickable (example)
    const novelCards = document.querySelectorAll('.featured-novel-card, .novel-list-card');
    novelCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            // For now, just alert. In real app, go to novel detail page
            const title = this.querySelector('h3').textContent;
            alert(`"${title}" စာစဉ်ကို ဖတ်ရှုရန် ပြင်ဆင်နေပါသည်...`);
        });
    });
});
