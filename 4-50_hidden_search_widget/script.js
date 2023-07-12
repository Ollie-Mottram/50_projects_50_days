const button = document.querySelector('.btn');
const search = document.querySelector('.search');

button.addEventListener('click', function () {
    search.classList.toggle('active');
    input.focus();
});