


// || Display Elements
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }

        else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right');
hiddenElements.forEach((el) => observer.observe(el));

























// || Typing text

document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text"); // Reference to the typing text element
    const text = typingText.innerHTML; // Get the existing innerHTML as the text to be typed

    let currentIndex = 1; // Current index of the character being typed

    // Function to perform the typing animation
    function typeNextCharacter() {
        typingText.innerHTML = text.slice(0, currentIndex++); // Update the innerHTML with the typed characters

        if (currentIndex > text.length) {
            // If all characters are typed
            clearInterval(intervalId); // Clear the interval to stop the animation
            setTimeout(startTypingAnimation, 1500); // Delay before starting the animation again
        }
    }

    // Function to start the typing animation
    function startTypingAnimation() {
        currentIndex = 1; // Reset the index
        intervalId = setInterval(typeNextCharacter, 100); // Call the function repeatedly after a delay
    }

    // Start the typing animation
    startTypingAnimation();
});





// || Shaking input

const submitButton = document.getElementById("submit-form");
const inputFields = document.querySelectorAll(".shake-field");
const emailField = document.getElementById("email");

submitButton.addEventListener("click", function(e) {
  let isFormValid = true;

  // Check email field validity
  if (!emailField.validity.valid) {
    e.preventDefault(); // Prevent default form submission behavior

    emailField.classList.add("shake-animation");
    setTimeout(function() {
      emailField.classList.remove("shake-animation");
    }, 500);

    isFormValid = false;
  }

  // Check for empty input fields
  inputFields.forEach(function(inputField) {
    if (inputField.value.trim().length === 0) {
      e.preventDefault(); // Prevent default form submission behavior

      inputField.classList.add("shake-animation");
      setTimeout(function() {
        inputField.classList.remove("shake-animation");
      }, 500);

      isFormValid = false;
    }
  });

  if (isFormValid) {
    // Perform form submission or other desired action
    submitButton.closest("form").submit();
  }
});
