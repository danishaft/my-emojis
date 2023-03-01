 const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")
const btn = document.getElementById("push")
const bgBtn = document.getElementById("unshift")
const popBtn = document.getElementById("pop")
const shiftBtn = document.getElementById("shift")


const render = () => {
        emojiContainer.innerHTML = ""
        for(let i = 0; i < myEmojis.length; i++){
            const emoji = document.createElement("span");
            emoji.textContent = myEmojis[i]
            emojiContainer.append(emoji)
        }
}
render()

btn.addEventListener("click", () => {
    const emojiInput = document.getElementById('emoji-input')
    if(emojiInput.value !== ""){
        myEmojis.push(emojiInput.value)
    }
    emojiInput.value = ""
    render()
});

bgBtn.addEventListener("click", () => {
    const emojiInput = document.getElementById('emoji-input')
    if(emojiInput.value !== ""){
        myEmojis.unshift(emojiInput.value)
    }
    emojiInput.value = ""
    render()
});
popBtn.addEventListener("click", () => {
    myEmojis.pop()
    render()
});
shiftBtn.addEventListener("click", () => {
    myEmojis.shift()
    render()
});































