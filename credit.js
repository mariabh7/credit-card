const userinfo = {
    namei: document.getElementById("nameofuser"),
    cardNumber: document.getElementById("usernumber"),
    cardMonth: document.getElementById("c-month"),
    cardYear: document.getElementById("c-year"),
    cardCvc: document.getElementById("usercvc"),
}
const userInfoOut = {
    cardNumber: document.getElementById("cardnumber"),
    namei: document.getElementById("username"),
    cardMonth: document.getElementById("month"),
    cardYear: document.getElementById("year"),
    cardCvc: document.getElementById("cvc"),
}
for (let i in userinfo) {
    userinfo[i].addEventListener('input', function () {
        for (let j in userInfoOut) {
            if (i === j) {
                userInfoOut[j].textContent = userinfo[i].value;
                if (userinfo[i].value === '') {
                    userInfoOut[j].textContent = "err";
                }
            }
        }
    });
}
// comments 
const errorc = document.getElementById("errorc");
const initialContent = errorc.innerText;
userinfo.cardNumber.addEventListener('input', function () {
    if ((userinfo.cardNumber.value.length != 19) || (/[a-zA-Z]/.test(userinfo.cardNumber.value))) {
        errorc.style.display = "block";
    } else if ((userinfo.cardNumber.value.length == 19) || (userinfo.cardNumber.value.length == 0)) {
        errorc.style.display = "none";
    }
    if (/[a-zA-Z]/.test(userinfo.cardNumber.value)) {
        errorc.innerHTML = "numbers only"
    } else {
        errorc.innerHTML = initialContent;
    }
});