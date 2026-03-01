const pianoKeys = [
  { note: 'C', key: 'a', buttonId: 'keyC' },
  { note: 'D', key: 's', buttonId: 'keyD' },
  { note: 'E', key: 'd', buttonId: 'keyE' },
  { note: 'F', key: 'f', buttonId: 'keyF' },
  { note: 'G', key: 'g', buttonId: 'keyG' },
  { note: 'A', key: 'h', buttonId: 'keyA' },
  { note: 'B', key: 'j', buttonId: 'keyB' }
];

const keyToNote = {};
const noteToButtonId = {};

pianoKeys.forEach(item => {
    keyToNote[item.key] = item.note;
    noteToButtonId[item.note] = item.buttonId;
});

const pressedKeys = {};

// Tastatur
document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    note = keyToNote[key]
    if (!pressedKeys[key]) {
        pressedKeys[key] = true;
        console.log("Key: " + note);
        playNote(note);
        highlightKey(note);
    }
});

document.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase();
  const note = keyToNote[key];

  if (note) {
    pressedKeys[key] = false;
    removeHighlight(note);
  }
});

const buttons = document.querySelectorAll('.key');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // H = B
    let note = button.textContent.trim();
    if (note === 'H') {
      note = 'B';
    }
    playNote(note);
    button.classList.add('pressed');
    setTimeout(() => button.classList.remove('pressed'), 100);
  });
});

// Ton abspielen
function playNote(note){
    console.log("Playing: " + note);
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}

// Taste hervorheben
function highlightKey(note){
    const buttonId = noteToButtonId[note];
    if (buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.classList.add("pressed");
        }
    }
}

// css entfernen
function removeHighlight(note) {
    const buttonId = noteToButtonId[note];
    if (buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.classList.remove("pressed");
        }
    }
}