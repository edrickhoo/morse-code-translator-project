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
  checkOutputError();
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

const error = document.querySelector(".translator__error");

const checkOutputError = () => {
  if (translatorOutput.value.includes("#")) {
    error.style.visibility = "visible";
  } else {
    error.style.visibility = "hidden";
  }
};

translatorInput.addEventListener("input", () => {
  translateInput();
  checkOutputError();
});
