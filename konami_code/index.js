const pressed = [];
const secretCode = "s3cr3t";

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.lenght - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log('WELL DONE !');
        cornify_add();
    }
    console.log(pressed);
})