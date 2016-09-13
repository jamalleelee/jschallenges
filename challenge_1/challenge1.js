/**
 * Using the LocalStorage API, save the contents of the text box
 * when users click the "save" button.
 * Load the saved text when users click the "Load" button.
 *
 * Here's the documentation you need:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

document.getElementById('save-button').addEventListener("click", function getText() {
    localStorage.setItem('userInput', document.getElementById('save-me').value);
});

document.getElementById('load-button').addEventListener("click", function setText() {
    var message = localStorage.getItem('userInput');
    document.getElementById('save-me').value = message;
});
