var urlTextBox = document.getElementById('urlTextBox');

function displayCurrentURL() {
    // Get the current page URL
    var currentURL = window.location.href;

    // Set the value of the text box to the current page URL
    urlTextBox.value = currentURL;
}