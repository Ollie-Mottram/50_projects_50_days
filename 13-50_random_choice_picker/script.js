const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)

        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',')//splits the string up every time there's a comma
    .filter(tag => tag.trim() !== '')//doesn't trim if there's a space
    .map(tag => tag.trim());//input what has been trimmed

    tagsEl.innerHTML = ''

    tags.forEach(tag => {//adds the user input to the tags under the textarea
        const tagEl = document.createElement('span');//created an element to house the text
        tagEl.classList.add('tag');//added tag to the class
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);//added the users input to the tag
    })
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {//randomly highlights and unhighlights tags
        const randomTag = pickRandomTag()

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        })
    }, 100);

    setTimeout(() => {
        clearInterval(interval);//clears the above

        setTimeout(() => {//for stopping on a random tag to highlight
            const randomTag = pickRandomTag()

            highlightTag(randomTag);
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');

    return tags[Math.floor(Math.random() * tags.length)];//slects a random number between 1 and the number of tags
}

function highlightTag(tag) {//a function to add highlight to the tag class
    tag.classList.add('highlight')
}
function unHighlightTag(tag) {//a function to remove highlight to the tag class
    tag.classList.remove('highlight')
}