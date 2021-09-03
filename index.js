const form = document.body.querySelector(".main-form");
const input = document.body.querySelector(".main-form-body-subject");
const textarea = document.body.querySelector(".main-form-body-note");
const mainContent = document.body.querySelector(".main-content");
const button = document.body.querySelector(".main-form-body-button");

const resetInput = () => {
    input.value = "";
    textarea.value = "";
  };

const createNewNote = () => {

    const div = document.createElement("div");
    div.classList.add("main-content-note");

    const noteTop = document.createElement("div");
    noteTop.classList.add("main-content-note-top");

    const noteTopText = document.createElement("span");
    noteTopText.classList.add("main-content-note-top-text");
    noteTopText.textContent = input.value;

    const noteDiv = document.createElement("div");
    noteDiv.classList.add("main-content-note-notediv");

    const noteText = document.createElement("p");
    noteText.classList.add("main-content-note-notediv-text");
    noteText.textContent = textarea.value;

    const noteDate = document.createElement("data");
    noteDate.classList.add("main-content-note-notediv-data");
    const newDate = new Date();
    noteDate.innerHTML = `${newDate.getDate()}.` + `${newDate.getMonth()}.` + `${newDate.getFullYear()}`;

    const noteBot = document.createElement("div");
    noteBot.classList.add("main-content-note-bot");

    const noteBotButton1 = document.createElement("batton");
    noteBotButton1.classList.add("main-content-note-bot-button1");

    const noteBotButton2 = document.createElement("batton");
    noteBotButton2.classList.add("main-content-note-bot-button2");

    const noteBotButton3 = document.createElement("batton");
    noteBotButton3.classList.add("main-content-note-bot-button3");

    noteTop.append(noteTopText);
    noteDiv.append(noteText);
    noteDiv.append(noteDate);
    noteBot.append(noteBotButton1);
    noteBot.append(noteBotButton2);
    noteBot.append(noteBotButton3);

    div.append(noteTop);
    div.append(noteDiv);
    div.append(noteBot);

    mainContent.append(div);

    resetInput();
}

button.addEventListener("click", () => createNewNote());
textarea.addEventListener("submit", () => createNewNote());
input.addEventListener("submit", () => createNewNote());
