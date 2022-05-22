const pressed = [];
const secretCode = "s3cr3t";

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    console.log(pressed);
})