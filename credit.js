const input1 = document.getElementById("name");
const cardn = document.getElementById("cardn");
const namei = document.getElementById("nameo");
const cardi = document.getElementById("cardo");

input1.addEventListener('input', function () {
    namei.textContent = input1.value;
    if (input1.value === '') {
        namei.textContent = "your name";
    }
});

cardn.addEventListener('input', function () {
    cardi.textContent = cardn.value;
    if (cardn.length > 3) {
        cardi.textContent = "invalid";
    }
});
