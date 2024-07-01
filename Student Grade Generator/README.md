# Function
The function prompts the user for input, validates the input, and correctly maps the input to the appropriate grade.
## How it works 
The user inputs a number if the number is valid(0-100) it is linked with the appropriate grade Value which is displayed to the user
###Grade Values
   A > 79
   B - 60 to 79
   C -  49 to 59
   D - 40 to 49
   E - less 40.
### Breakdown
   The isNaN function is used to check if the input is a number. The function will keep prompting the user to enter a mark until a valid mark is entered. Once a valid mark is entered, the function will display the corresponding grade and stop.
   And it does not accpt any input that is not a number
  How does it does that:
isNaN(score): checks if the input is not a number (e.g. if the user enters a string or a special character)
if (isNaN(score) || score < 0 || score > 100): 
If the input is valid, the function proceeds to calculate the grade as before.
If not the user is displayed with a message "Invalid input. Please enter a number between 0 and 100."
