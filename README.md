# Morse-Code-Translator-Project

## Preview

### Desktop
![Screenshot](./screenshot/morse-code-thumbnail.png)

### Mobile
![Screenshot-Mobile](./screenshot/morse-code-thumbnail-mobile.png)


## Deployed Version

* [Link]( https://morse-code-translator-project.vercel.app/)

## Setup

* Open index.html with live server
* [Link to download live server for VScode]( https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Testing
* To install dependencies open terminal cd into the root folder
 ```
 npm install
 ```

* Run Tests
 ```
 npm run test
 ```
  

## Description of project (spec / MVP)

### Requirement
* HTML
* CSS
* SASS
* Javascript
* Jest

### MVP:

* Create a user interface that allows the user to either input some English text or some Morse Code -- [x]

* Create JS functions that would allow the user to:
  - translate their English text into Morse Code -- [x]
  - Morse Code into English text -- [x]
  
* Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters) -- [x]

* Bonus: Handle other characters as well -- [x]

* Bonus: Detect if a piece of text is english or morse and translate accordingly

* Split your code between data, logic functions and dom functions -- [x]

* Develop unit tests for all of your logic functions -- [x]

* Explore and discover edge cases in your code to further develop your tests -- [x]

## Approach

* Broke the app into smaller sections starting with translation logic first, testing the logic and then connecting functionality to HTML elements.
* Research aspects of the project that was unfamiliar, how morse code works, play around with exisiting translators online.
* This was made with Javascript instead of other frameworks to solidify my understanding of how to select elements in the DOM and to manipulate them, to give functionality or change styling.
* To create unit testing for logic functions where react testing is more integreation and component testing.
* Ensure to cover various edge cases when uniting testing the logic.
* Tried to keep things modular with Javascript files were seperated logc files, testing files apart from the main script.js

## Reflection

*  What went well?  After researching I was to grasp a better understanding of how the logic worked which made creating the logic go smoothly.
*  What are you proud of? I am proud that my understanding of why to split logic into smaller parts increased as splitting it up will allow for testing to be easier and code to be more readable.
*  What was a challenge? Creating the tests and thinking of edge cases which may occur.
*  What you'd do differently? Implement test driven development to create the tests first then write the logic to pass the tests.

## Future Goals

* Auto detect if the text is latin or morse code and then translate.
* Add further tests to cover any other possible edge cases.
* Style the page better, with a color palette.


## Further reading or links to inspiration

*  [Looping Thorugh Objects]( https://flexiple.com/javascript/loop-through-object-javascript/)
*  [Jest Docs]( https://jestjs.io/docs/getting-started)
*  [How Morse Code Works]( https://science.howstuffworks.com/innovation/inventions/5-industrial-revolution-inventions.htm)

## Stay in touch

*  [Portfolio]( https://edric-khoo.vercel.app/)
*  [Linkedin]( https://www.linkedin.com/in/edric-khoo-98881b173/)

