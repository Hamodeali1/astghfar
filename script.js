let counters = Array(10).fill(0); // مصفوفة لتخزين العدادات لكل زر

function incrementCounter(index) {
    counters[index]++;
    document.getElementById(`counter${index}`).innerText = counters[index];
}

function resetCounters() {
    counters.fill(0); // إعادة جميع القيم إلى 0
    for (let i = 0; i < counters.length; i++) {
        document.getElementById(`counter${i}`).innerText = 0;
    }
}
