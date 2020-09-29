# lab-01-quiz-page

# Lab 01: Quiz Page

## Goal

Create an "About Me" page, with a quiz based on the content of the page that the user can complete.

## Learning Objectives
[x] Use `document.getElementById` to _get_ HTML Elements in JavaScript
- Use `document.getElementById` to _set_ the textContent of HTML Elements in JavaScript
[x] Use an event listener to launch prompts
[x] Evaluating user input with control flow
[x] Using functions to 'abstract' complex or repeated logic
[x] Manipulating the DOM based on changing global state

---

## Standard Setup Process

 [x]Create a repo called `lab-01-quiz-page` on Github
    [x] make sure to click add a `README.md`
[x]Copy the URL of the new repo
[x]From the command line (terminal) clone your repo:
    [x] `git clone <url>`
    [x] **`cd` into your repo from the command line**
    [x] `npx create-alchemy-bootstrap .`
    [x] Launch vscode with `code .`


## Topic

The topic can be autobiographical ("About Me") or you are welcome to pick a common topic of interest (for example, "cats" or "pets") and create content and images around that theme.

Your web page should contain:

[x] Introductory and general content about you or your theme.
[x] At least one image
[x] At least three sections, each of which is a blurb about you or the topic
[x] Include headers as appropriate
[ ] Use at least one unordered (bullet) list and one ordered (numbered) list
[x] A button for the user to take a quiz, and a place to put the quiz result

---

## HTML & CSS

[x] Create an HTML file (`index.html`)
[x] Create and link a CSS file (`main.css`)
[x] Add content to your HTML file including all the required sections listed
[x] Add CSS for styling for your page and some layout. See below for styling detail
[x] **Commit** your work as you go with a message that describes the purpose (why?) of the commit.

### Styles

1. Choose one or two fonts for your page. Often the headers and body content use separate fonts:
    * https://fonts.google.com/
    * https://www.fontsquirrel.com/
1. Choose a color palette/theme for your page:
    * https://coolors.co/
1. Need some images?
    * https://pixabay.com
    * https://www.freeimages.com/
    * https://unsplash.com/
    * https://www.pexels.com/royalty-free-images/

### Design Stretch Goals

- Apply additional styling to the page: try things like borders, alignment, margin, padding, and so on.
- Search for an online HTML validator and submit your code to it.
- Visit [this page](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and read about Chrome's built-in accessibility auditing tools. Following the instructions under the "View the contrast ratio of a text element in the Color Picker" heading, examine the contrast ratio values of your heading and paragraph tags. Modify your code until you can achieve a ratio that gets two check marks.

---

## JavaScript

### TDD `translateToAYes` Function

The quiz will be asking yes/no questions, but receiving a text response from the user. They could response "Yes", "y", "yes", "Y", etc.

TDD an `translateToAYes` function that that returns the string `'yes'` for the responses you want to be "yes" (otherwise it should return `'no'`). Write a test for each `"yes"` text that your app will accept. Then write a couple tests for common "no" responses. 

The function:
[x] Should be exported from `/src/translate-to-a-yes/js`
[x] The test should live at `/test/translate-to-a-yes.test.js`
[x] Don't forget to `import './translate-to-a-yes.test.js';` in file `/test/tests.js`!

### App

Add an `app.js` file that is imported via a `<script>` tag in `index.html`.

#### Sections

[x] Imports:
    - Your `translateToAYes` function
[x] Reference needed DOM elements:
    - The button the user will click for taking the quiz
    - The element to which you will write the quiz results
[x] Add event listeners:
    - Subscribe to the button's click event using `addEventListener`:
    ```js
    button.addEventListener('click', () => {

    });
    ```

#### Run Quiz

Add code in the button click handler function:

[x] Ask the user's name. Their name should be used in subsequent prompts
[x] Confirm that the user really wants to take the quiz. If not, `return` from your function.
[x] Three YES/NO questions about you. Use your `translateToAYes` function to determine the user's
response, then compare to the correct answer. Track number of correct responses.
[x] Alert the user that the quiz is complete and their results will now be written to the webpage.
[x] Write a response to the page with their name and number correct, for example: "Okay Bernice, you got 2/3 correct". 
1. STRETCH goal(s): 
  - Add a class to style the result differently based on
  good or bad score.
  - Add different text content ('Great work!' 'Needs improvement!', etc) based on user's results
  - Include a percentage, without decimal places.

---

## Points Break Down

Looking For | Points (10)
:--|--:
Proper HTML using Semantic Element choices  | 1 
CSS fonts, colors and images used consciously and correctly | 1
Tested translateToAYes Function | 2
Guessing game works correctly | 2
Project and code files are: indented / spaced correctly / clean | 2
Clear commit history present | 2
Change content and style of results message based on user's success | +1
Percent correct with no decimal places | +1