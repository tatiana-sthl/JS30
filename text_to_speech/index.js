const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelectorAll('[name="voices"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');