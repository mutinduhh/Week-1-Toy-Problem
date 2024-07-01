# Function
Write a program that takes the speed of a car as input .If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/hs above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
 If the driver gets more than 12 points, the function should print: “License suspended”.
## How it works 
The user inputs a number, it is linked with the appropriate speed limit (70) If the driver is under the spped limit the will get a "Ok"
If the driver is over the speed limit, the program will calculate the number of demerit points and for every 5km/h above a point is added and if they reach t12 user is told "Licence Suspended"
    > For example, if the speed is 80, it should print: “Points: 2”.
### Breakdown
  Here's how the code works:

The HTML creates a range slider, a paragraph to display the current speed value, a button to submit the speed, and a div to display the result.
The CSS styles the elements to make them look nice.
The JavaScript code gets references to the HTML elements and adds event listeners to the slider and button.
When the slider value changes, the JavaScript code updates the speed value paragraph.
When the button is clicked, the JavaScript code checks if the speed is less than 70. If it is, it prints "Ok". Otherwise, it calculates the number of demerit points by dividing the excess speed by 5 and rounding down. If the demerit points exceed 12, it prints "License suspended". Otherwise, it prints the total number of demerit points.
And the reason for the slider and button is becasue i thought it would be a refrehshing way to input data and minimize errors
