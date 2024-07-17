function calculateGrade() {
    let score = document.getElementById("score").value;
    let grade;

    // Check if input is a valid number if value is not a number it loops back and you have to enter a proper value
    if (isNaN(score) || score < 0 || score > 100) {
      document.getElementById("result").innerHTML = "Invalid input. Please enter a number between 0 and 100.";
      return;
    }

    if (score >= 79) {
      grade = "A";
    } else if (score >= 60) {
      grade = "B";
    } else if (score >= 49) {
      grade = "C";
    } else if (score >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
 // then once the work is done it is printed 
    document.getElementById("result").innerHTML = "Your grade is: " + grade;
  }