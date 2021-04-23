let data = document.querySelectorAll('input');
const submit = document.querySelector('.submit');
let obj = {};

submit.addEventListener('click', e => {
    e.preventDefault();
    data.forEach((input, i) => {
        obj[input.className] = input.value;
    })
    console.log(obj);

    window.location.replace("submit.html");
}, false);