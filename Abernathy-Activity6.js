/*
 * Program: Activity 6
 * Name: Tanner Abernathy
 * Date: 10-12-2020
 */

//Initialize Variables
var again = true;
var correct;
var shape;

//Begin primary do-while loop
do {

    //Ensure correct is set to false
    correct = false;

    //do while loop that ensures the user's number is between 3 and 7 inclusive
    do {
        //prompt the user
        var sides = prompt("Enter number of sides");

        //check that the number is within the range
        if (sides == "3" || sides == "4" || sides == "5" || sides == "6" || sides == "7") {

            //if it is within the range, convert to an integer and set correct to true
            sides = parseInt(sides);
            correct = true;
        }
    } while (!correct)

    //Find the shape using the function
    shape = converShape(sides);

    //Alert the user stating the number of sides as well as the polygon appropriate for those sides
    alert("Number of sides = " + sides + "\nName of the polygon = " + shape);

} while (again)

//Function for converting number of sides to appropriate shape
function converShape(sides)
{
    //Nested if-else statements to handle conversion.
    if (sides == 3) {
        return "Triangle";
    } else if (sides == 4) {
        return "Square";
    } else if (sides == 5) {
        return "Pentagon";
    } else if (sides == 6) {
        return "Hexagon";
    } else if (sides == 7) {
        return "Heptagon";
    } else {
        return "Shape Error";
    }
}


