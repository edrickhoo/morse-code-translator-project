import {
  convertLettersToMorse,
  convertMorseToLetter,
} from "./scripts/translateLogic.js";

const translatorInput = document.querySelector(".translator__input");

const translatorOutput = document.querySelector(".translator__output");

const translatorBtn = document.querySelector(".translator__btn");

const translatorStatus = document.querySelector(".translator__status");

let translateMode = "Morse Code";

const toggleTranslateMode = () => {
  translateMode === "Morse Code"
    ? (translateMode = "Letters")
    : (translateMode = "Morse Code");
};

const updateTranslatorStatus = () => {
  translatorStatus.textContent = `${translateMode}`;
};

translatorBtn.addEventListener("click", () => {
  toggleTranslateMode();
  updateTranslatorStatus();
  translateInput();
});

const translateInput = () => {
  const inputText = translatorInput.value;
  let translatedOutput = null;

  if (translateMode === "Morse Code") {
    translatedOutput = convertLettersToMorse(inputText);
  } else if (inputText !== "") {
    translatedOutput = convertMorseToLetter(inputText);
  }

  translatorOutput.value = translatedOutput;
};

translatorInput.addEventListener("keyup", () => {
  translateInput();
});
