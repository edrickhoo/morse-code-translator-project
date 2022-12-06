const letterToMorse = {
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
  "'": ".----.",
};

// Object will be filled with key with morsecode and value of an letter
const morseToLetter = Object.keys(letterToMorse).reduce((initial, current) => {
  initial[letterToMorse[current]] = current;
  return initial;
}, {});

export const convertLettersToMorse = (string) => {
  if (string === undefined) {
    throw new Error("Nothing was passed in, please pass in a String");
  }

  if (typeof string !== "string") {
    throw new Error(
      "Invalid parameter type was passed, please pass in a string"
    );
  }

  const letters = string.toUpperCase().split("");

  const result = letters
    .map((letter) => {
      if (letterToMorse.hasOwnProperty(letter)) {
        return `${letterToMorse[letter]}`;
      } else {
        return "#";
      }
    })
    .join(" ");

  return result;
};

export const convertMorseToLetter = (morseCode) => {
  if (morseCode === undefined) {
    throw new Error("Nothing was passed in, please pass in a String");
  }

  if (typeof morseCode !== "string") {
    throw new Error(
      "Invalid parameter type was passed, please pass in a string"
    );
  }

  const morse = morseCode.split(" ");

  const result = morse
    .map((letter) => {
      if (morseToLetter.hasOwnProperty(letter)) {
        return morseToLetter[letter].toLowerCase();
      } else {
        return "#";
      }
    })
    .join("");

  return result;
};
