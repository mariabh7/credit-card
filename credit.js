const input1 = document.getElementById("name");
const cardn = document.getElementById("cardn");
const namei = document.getElementById("nameo");
const cvc = document.getElementById("cvc");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cmonth = document.getElementById("c-month");
input1.addEventListener('input', function () {
    namei.textContent = input1.value;
    if (input1.value === '') {
        namei.textContent = "your name";
    }
});
cardn.addEventListener('input', function () {
    cvc.textContent = cardn.value;
    if (cardn.value.length > 3) {
        cvc.textContent = "000";
    }
}); cmonth.addEventListener('input', function () {
    month.textContent = cmonth.value;
    if (cmonth.value.length > 2) {
        month.textContent = '00';
    }
});
