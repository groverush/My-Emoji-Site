const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const unshiftBtn = document.getElementById("unshift-btn");
const pushBtn = document.getElementById("push-btn");
const shiftBtn = document.getElementById("shift-btn");
const popBtn = document.getElementById("pop-btn");
const removeBtn = document.getElementById("remove-btn");

let myEmojis = ["🎃", "👽", "👾", "👻", "💣", "☣️"];



function renderEmojis(emojis) {
    emojiContainer.textContent = "";
    let displayedEmojis = ``;
    for (let i = 0; i < emojis.length; i++) {
        displayedEmojis += `<span>${emojis[i]}</span>`
    }
    emojiContainer.innerHTML = displayedEmojis;
}
if (myEmojis) {
    renderEmojis(myEmojis);
}

unshiftBtn.addEventListener('click', function () {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = "";

        renderEmojis(myEmojis);
    }
})
pushBtn.addEventListener('click', function () {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value);
        emojiInput.value = "";
        renderEmojis(myEmojis);
    }

})

shiftBtn.addEventListener('click', function () {
    myEmojis.shift();
    renderEmojis(myEmojis);
})
popBtn.addEventListener('click', function () {
    myEmojis.pop();
    renderEmojis(myEmojis);
})

removeBtn.addEventListener('click', function () {

    if (myEmojis.includes(emojiInput.value)) {
        myEmojis.splice(myEmojis.indexOf(emojiInput.value), 1);
        emojiInput.value = "";
        renderEmojis(myEmojis);
    };

})