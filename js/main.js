

// Active/Inactive Navbar

const checkbox = document.getElementById('menu-checkbox'); // Get the checkbox element by its ID
const navigation = document.querySelector('.navbar'); // Get the navigation element using a class selector
const navLinks = navigation.querySelectorAll('a'); // Get all anchor links within the navigation

// Add an event listener for the checkbox's change event
checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    // If the checkbox is checked
    navigation.classList.add('active-navigation'); // Add the active-navigation class to the navigation element
    navigation.classList.remove('inactive-navigation'); // Remove the inactive-navigation class from the navigation element
  } else {
    // If the checkbox is unchecked
    navigation.classList.add('inactive-navigation'); // Add the inactive-navigation class to the navigation element
    navigation.classList.remove('active-navigation'); // Remove the active-navigation class from the navigation element
  }
});


// Iterate over each anchor link in the navigation
navLinks.forEach(function(link) {
  // Add an event listener for the click event on each anchor link
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor link (page scroll)
    const target = document.querySelector(link.getAttribute('href')); // Get the target section based on the anchor's href attribute
    
    target.scrollIntoView({
      behavior: 'smooth' // Scroll smoothly to the target section
    });

    // Add the inactive-navigation class to toggle the navigation off
    navigation.classList.add('inactive-navigation'); // Add the inactive-navigation class to the navigation element
    navigation.classList.remove('active-navigation'); // Remove the active-navigation class from the navigation element
    
    checkbox.checked = false; // Uncheck the checkbox
  });
});





