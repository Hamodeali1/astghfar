let count = 0;
document.getElementById("counterButton").addEventListener("click", function() {
    count++;
    document.getElementById("count").textContent = count;
});
let counter = 0;

function incrementCounter(buttonNumber) {
    counter++;
    document.getElementById("counter").innerText = counter;
    console.log(`تم الضغط على الزر ${buttonNumber}`);
}

function resetCounter() {
    counter = 0;
    document.getElementById("counter").innerText = counter;
}
