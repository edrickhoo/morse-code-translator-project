import {
  convertLettersToMorse,
  convertMorseToLetter,
} from "./translateLogic.js";

const noParamsError = new Error(
  "Nothing was passed in, please pass in a String"
);

const wrongParamTypeErorr = new Error(
  "Invalid parameter type was passed, please pass in a string"
);

describe("Test cases for converting letters to morse code", () => {
  it("Should return the letters converted to morse code with correct spacing", () => {
    expect(
      convertLettersToMorse("the quick brown fox jumps over the lazy dog")
    ).toBe(
      "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --."
    );

    expect(
      convertLettersToMorse("DOG LAZY THE OVER JUMPS FOX BROWN QUICK THE")
    ).toBe(
      "-.. --- --. / .-.. .- --.. -.-- / - .... . / --- ...- . .-. / .--- ..- -- .--. ... / ..-. --- -..- / -... .-. --- .-- -. / --.- ..- .. -.-. -.- / - .... ."
    );
  });

  it("Should return the letters converted to morse code with invalid characters as '#' ", () => {
    expect(
      convertLettersToMorse(
        "the quick[] brown fox[] jumps over[] the1 lazy dog"
      )
    ).toBe(
      "- .... . / --.- ..- .. -.-. -.- # # / -... .-. --- .-- -. / ..-. --- -..- # # / .--- ..- -- .--. ... / --- ...- . .-. # # / - .... . .---- / .-.. .- --.. -.-- / -.. --- --."
    );

    expect(convertLettersToMorse("# []  ] ] ] ] ]    ]")).toBe(
      "# / # # / / # / # / # / # / # / / / / #"
    );
  });

  it("Throw error to add in a string parameter when nothing is passed in", () => {
    expect(() => {
      convertLettersToMorse();
    }).toThrow(noParamsError);
  });

  it("Throw error to enter correct type of string parameter to be passed", () => {
    expect(() => {
      convertLettersToMorse(true);
    }).toThrow(wrongParamTypeErorr);
    expect(() => {
      convertLettersToMorse(["Hello", "World"], null);
    }).toThrow(wrongParamTypeErorr);
    expect(() => {
      convertLettersToMorse({ name: "Hello", age: 21 });
    }).toThrow(wrongParamTypeErorr);
  });
});

describe("Test cases for converting morse code to letters", () => {
  it("Should return the morse code converted to letters with correct spacing", () => {
    expect(
      convertMorseToLetter(
        "-... .-. --- .-- -. / -.. --- --. / ..-. --- -..- / - .... . / .--- ..- -- .--. ... / --.- ..- .. -.-. -.- / - .... . / .-.. .- --.. -.-- / --- ...- . .-."
      )
    ).toBe("brown dog fox the jumps quick the lazy over");

    expect(
      convertMorseToLetter(
        "- .... . / - .... . / ..-. --- -..- / -... .-. --- .-- -. / --- ...- . .-. / -.. --- --. / .--- ..- -- .--. ... / --.- ..- .. -.-. -.- / .-.. .- --.. -.--"
      )
    ).toBe("the the fox brown over dog jumps quick lazy");
  });

  it("Throw error to add in a string parameter when nothing is passed in", () => {
    expect(() => {
      convertMorseToLetter();
    }).toThrow(noParamsError);
  });

  it("Throw error to enter correct type of string parameter to be passed", () => {
    expect(() => {
      convertMorseToLetter(false);
    }).toThrow(wrongParamTypeErorr);
    expect(() => {
      convertMorseToLetter([32, "World"], null);
    }).toThrow(wrongParamTypeErorr);
    expect(() => {
      convertMorseToLetter({ name: true, age: 212 });
    }).toThrow(wrongParamTypeErorr);
  });
});
