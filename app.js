// Retrieve all elements with the class name "num-btns" and store them in the "buttons" variable.
var buttons = document.getElementsByClassName("num-btns");

// Get the element with the ID "popup" and store it in the "popup" variable.
let popup = document.getElementById("popup");

// Get the element with the ID "rating" and store it in the "ratingElement" variable.
let ratingElement = document.getElementById("rating");

// Get the element with the ID "app-wrapper" and store it in the "appwrapper" variable.
let appwrapper = document.getElementById("app-wrapper");

// Function to toggle the "activate" class based on the clicked button.
function toggleClass(clickedButton) {
  for (var i = 0; i < buttons.length; i++) {
    // If the current button in the loop is the clicked button, add the "activate" class.
    if (buttons[i] === clickedButton) {
      buttons[i].classList.add('activate');
    } 
    // Otherwise, remove the "activate" class from the other buttons.
    else {
      buttons[i].classList.remove('activate');
    }
  }
}

// Function to display the selected rating and show the popup.
function display() {
  // Get the selected rating using the helper function "getSelectedRating".
  var selectedRating = getSelectedRating();

  // Check if a rating is selected (not null).
  if (selectedRating !== null) {
    // Update the content of the "ratingElement" to display the selected rating.
    ratingElement.textContent = "You selected " + selectedRating + " out of 5";

    // Display the popup by setting its "display" style to 'flex'.
    popup.style.display = 'flex';

    // Hide the "app-wrapper" element by setting its "display" style to 'none'.
    appwrapper.style.display = "none";
  }
}

// Helper function to get the selected rating.
function getSelectedRating() {
  for (var i = 0; i < buttons.length; i++) {
    // If the current button has the "activate" class, return its text content.
    if (buttons[i].classList.contains('activate')) {
      return buttons[i].textContent;
    }
  }
  // If no rating is selected, return null.
  return null;
}
/* Explanation:
- The `.length` property is used to retrieve the number of elements in an array-like object. In this case, `buttons` is a collection of elements obtained using `getElementsByClassName`, and `buttons.length` returns the total number of elements with the class "num-btns".
- The `i++` is a post-increment operator that increments the value of `i` by 1 after evaluating the current expression or statement. In this code, `i++` is used within the `for` loop to increment the loop counter variable `i` by 1 in each iteration.
- The `return null` statement is used to exit the `getSelectedRating()` function and return the value `null`. It is used when no rating button is found with the "activate" class, indicating that no rating is selected.
- console.log(num1 !== num2); // true (not equal in value and type)
  console.log(num1 != num2); // false (equal in value, but different types)
*/
