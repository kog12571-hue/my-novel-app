// 1. Element များကို ဖမ်းယူခြင်း
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const themeToggle = document.getElementById('themeToggle');
const searchToggle = document.getElementById('searchToggle');
const searchContainer = document.getElementById('searchContainer');
const closeSearch = document.getElementById('closeSearch');

// 2. Side Menu ဖွင့်/ပိတ်ခြင်း
menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
});

// Menu ပြင်ပကိုနှိပ်ရင် Menu ပြန်ပိတ်ရန်
document.addEventListener('click', (e) => {
    if (!menuOverlay.contains(e.target) && !menuToggle.contains(e.target)) {
        menuOverlay.classList.remove('active');
    }
});

// 3. Search Bar ဖွင့်/ပိတ်ခြင်း
searchToggle.addEventListener('click', () => {
    searchContainer.classList.add('active');
});

closeSearch.addEventListener('click', () => {
    searchContainer.classList.remove('active');
});

// 4. Dark Mode လုပ်ဆောင်ချက်
// အရင်က သိမ်းထားတဲ့ preference ရှိမရှိ စစ်ဆေးခြင်း
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️'; // နေ့ဘက် icon ပြောင်းရန်
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Icon ပြောင်းလဲခြင်းနှင့် သိမ်းဆည်းခြင်း
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// 5. Form Submission (နမူနာ)
const loginForm = document.getElementById('loginForm');
if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login ဝင်ခြင်း စမ်းသပ်မှု အောင်မြင်ပါသည်။');
    });
}
