let counters = [0, 0, 0]; 
let challenges = { 0: 50, 1: 20, 2: 30 }; 

document.querySelectorAll('.zikr-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        counters[index]++;
        document.getElementById(`counter${index}`).innerText = counters[index];

        if (counters[index] === challenges[index]) {
            document.getElementById('challenge-message').innerText = 
                `🎉 لقد أكملت تحدي ${document.querySelectorAll('.button-label')[index].innerText} ${challenges[index]} مرة!`;
        }
    });
});

document.getElementById('reset-btn').addEventListener('click', () => {
    counters = [0, 0, 0];
    document.querySelectorAll('.counter-display').forEach((el, index) => {
        el.innerText = counters[index];
    });
    document.getElementById('challenge-message').innerText = "";
});

// تفعيل الوضع الليلي
document.getElementById('dark-mode-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});

// تغيير اللغة
document.getElementById('language-select').addEventListener('change', function() {
    let lang = this.value;
    document.getElementById('title').innerText = lang === 'ar' ? 'الأذكار' : 'Azkar';
    document.querySelectorAll('.button-label').forEach(label => {
        label.innerText = label.dataset[lang];
    });
});

// إظهار قائمة الإعدادات
document.getElementById('settings-btn').addEventListener('click', function() {
    let menu = document.getElementById('settings-menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
});
