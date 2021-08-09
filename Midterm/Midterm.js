var $ = function(id) { return document.getElementById(id); };

//Initialize days and calories arrays
var days = [];
var calories = [];

function updateCalorie() {
    //Confirm a number has been entered, prompt if it hasn't
    if(isNaN($("calorie").value) || $("calorie").value == '') {
        alert("Enter a valid Number");
        return;
    }
    //set calorie equal to the value of the textbox and add it to the array
    var calorie = $("calorie").value;
    calories.push(calorie);

    //set day equal to the value of the selection and add it to the array
    var day = document.querySelector('input[name = "day"]:checked').value;
    days.push(day);

    //reset calorie textbox
    $("calorie").value = '';

    //initialize details variable for prompt
    var details = "";

    //Build output for calorie list prompt
    for (i = 0; i < calories.length; i++) {
        if (i == calories.length - 1) {
            details += calories[i];
        } else {
            details += (calories[i] + ",");
        }
    }

    //Push alert to user
    alert(details);

}

function showAverageCalories() {

    //Initialize variables for calculation
    var comb = 0;
    var avg = 0;

    //Loop through and add all calories together
    for (i = 0; i < calories.length; i++)
    {
        comb = comb + Number(calories[i]);
    }

    //Calculate Average
    avg = comb / calories.length;

    //Set text to green and place results in textbox
    $("averageText").style.color = 'green';
    $("averageText").value = avg;

}

function showMax() {

    //Initialize variables for calculation
    var maxCal = 0;
    var maxIndex;

    //Loop through and find highest value and it's index
    for (i = 0; i < calories.length; i++) {
        if (Number(calories[i]) > maxCal) {
            maxCal = Number(calories[i]);
            maxIndex = i;
        }
    }

    //Print results onto webpage
    $("showMax").innerHTML = `<br>Your maximum consumed calorie is ` + maxCal +` on ` + days[maxIndex];
}


window.onload = function() {
    //event handlers
    $("update").onclick = updateCalorie;
    $("average").onclick = showAverageCalories;
    $("show_max").onmouseover = showMax;
};
