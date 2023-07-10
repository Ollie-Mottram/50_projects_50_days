const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); //treats the circles as an array so that they can be looped through

let currentActive = 1;

next.addEventListener('click', function (){
    currentActive++; //treats the circles as an array, due to the querySelectAll, and goes to the next circle when the button is pressed

    if (currentActive > circles.length) { //ensures that the clicks can't surpass the number of circles
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener('click', function (){
    currentActive--; //treats the circles as an array, due to the querySelectAll, and goes to the previous circle when the button is pressed

    if (currentActive < 1) { //ensures that the clicks can't go into the negative
        currentActive = 1;
    }

    update();
})

function update() { //this function adjusts the active circle and is called with both the next and prev button
    circles.forEach((circle, idx) => { //the index is the circle being selected 
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'; //adjusts the progress bar, it has to be a percentage due to that being the unit used in the css width for teh progress bar

    if (currentActive === 1) {
        prev.disabled = true;
        next.disabled = false;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disables = false;
    };
}