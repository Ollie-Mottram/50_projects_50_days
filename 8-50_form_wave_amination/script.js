const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText//looping through the label and we have the inner text here
    .split('')//splitting into an array
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)//mapping it to an array where the letters have a span around them
    .join('')//turning it back into a string
})