interface PianoKey {
    note: string;
    key: string;
    buttonId: string;
}

const pianoKeys: PianoKey[] = [
    { note: 'C', key: 'a', buttonId: 'keyC' },
    { note: 'D', key: 's', buttonId: 'keyD' },
    { note: 'E', key: 'd', buttonId: 'keyE' },
    { note: 'F', key: 'f', buttonId: 'keyF' },
    { note: 'G', key: 'g', buttonId: 'keyG' },
    { note: 'A', key: 'h', buttonId: 'keyA' },
    { note: 'B', key: 'j', buttonId: 'keyB' }
];

const noteLine = document.getElementById("note-line")!;

let importedNotes: string[] = [];
const fileInput = document.getElementById("fileInput") as HTMLInputElement;

const playBtn = document.getElementById("playBtn")!;
const resetBtn = document.getElementById("resetBtn")!;
const delayInput = document.getElementById("delayInput") as HTMLInputElement;

// Mappings

const keyToNote: Record<string, string> = {};
const noteToButtonId: Record<string, string> = {};

pianoKeys.forEach((item: PianoKey) => {
    keyToNote[item.key] = item.note;
    noteToButtonId[item.note] = item.buttonId;
});

// Event Listener

const pressedKeys: Record<string, boolean> = {};
document.addEventListener('keydown', (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();

    const note: string | undefined = keyToNote[key];            // Wenn keyToNote[key] nicht existriert wird undefined zurückgegeben
    if(!note) return;                                           // Wenn note undefined ist, wird die Funktion beendet

    if(!pressedKeys[key]) {
        pressedKeys[key] = true;
        console.log("Key: " + note);
        playNote(note);
        highlightKey(note);
        showNote(note); 
    }
});

document.addEventListener('keyup', (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    const note = keyToNote[key];

    if (pressedKeys[key]) {
        pressedKeys[key] =  false;
        removeHighlight(note);
    }
});

const buttons = document.querySelectorAll('.key') as NodeListOf<HTMLElement>;
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let note = button.textContent?.trim() || "";

    // Deutsche Notation: H → B
    if (note === "H") {
      note = "B";
    }

    playNote(note);
    button.classList.add("pressed");
    showNote(note); 
    setTimeout(() => button.classList.remove("pressed"), 100);
  });
});


// Functions
function playNote(note: string): void {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
};

function highlightKey(note: string): void {
    const buttonId = noteToButtonId[note];
    if (!buttonId) return;

    const button = document.getElementById(buttonId);
    if(button) {
        button.classList.add("pressed");
    }

};

function removeHighlight(note: string): void {
    const buttonId =  noteToButtonId[note];
    if (!buttonId) return;

    const button = document.getElementById(buttonId);
    if(button) {
        button.classList.remove("pressed");
    }
};

function showNote(note: string): void {
    const span = document.createElement("span");

    span.textContent = note + " ";
    span.classList.add("note-label");

    noteLine.appendChild(span);
};

function clearNotes(): void {
    noteLine.innerHTML = "";
};

function playImportedNotes(): void {
    // Delay aus dem Eingabefeld, begrenzt auf 200–800 ms
    const delay = Math.min(Math.max(parseInt(delayInput.value), 200), 800);

    // Jede Note mit Delay nacheinander abspielen
    importedNotes.forEach((note, index) => {
        setTimeout(() => {
            playNote(note);
            highlightKey(note);
            showNote(note);
        }, index * delay)
    });
};

fileInput.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        try {
            const result = JSON.parse(reader.result as string);

            // Format prüfen - muss ein Array von Strings sein
            if (Array.isArray(result) && result.every(n => typeof n === "string")) {
                importedNotes = result;
                console.log("Noten importiert: ", importedNotes);
            } else {
                alert("Ungültiges Format. Array von String benötigt!");
            }
        } catch {
            alert ("Fehler beim Einlesen :(");
        }
    };
    // Datei als Text lesen
    reader.readAsText(file);
});

//Buttons
playBtn.addEventListener("click", playImportedNotes);
resetBtn.addEventListener("click", () => {
  importedNotes = [];
  clearNotes();
  fileInput.value = "";
});