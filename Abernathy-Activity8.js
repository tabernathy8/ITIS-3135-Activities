/*
 * Program: Activity 8
 * Name: Tanner Abernathy
 * Date: 10-19-2020
 */

var days = [];
var temperature = [];

var $ = function (id) {
  return document.getElementById(id);
};

function displayResults() {
  //Average Calculation
  var total = 0;
  var avg = 0;
  var high = 0;
  var highIndex = 0;

  //Loop through array and add all elements to get total
  for (var i = 0; i < temperature.length; i++) {
    total = total + temperature[i];
  }

  //After looping, calculate average
  avg = total / temperature.length;

  //High Calculation
  for (var i = 0; i < temperature.length; i++) {
    //If current index is higher than highest, set current to highest
    if (temperature[i] > high) {
      high = temperature[i];
      highIndex = i;
    }
  }

  //Print results to page
  $("result").innerHTML =`
       <h2>Results</h2>
      <p>Average temperature = ` + avg + `F</p>
      <p>Highest temperature was on ` + days[highIndex] + ` with a temperature of ` + high + `F</p>`
}

function displayTemperature() {
  //Print header
  $("temperature_table").innerHTML = "<h2>Temperatures</h2>";

  //Print column headers
  $("temperature_table").innerHTML += `<tr>
  <th align = "left">Day</th>
  <th align = "left">Temperature</th>
  </tr>`;

  //Loop through and print elements from array into table
  for (var i = 0; i < temperature.length; i++) {
    $("temperature_table").innerHTML += `<tr>
        <td> `+ days[i] + `</td>
        <td> `+ temperature[i] + `F</td>
        </tr>`;
  }
}


function addTemperature() {

  //Set variables dy and tmp equal to day and temperature values
  var dy = $("Day").value;
  var tmp = Number($("Temperature").value);

  //Make sure there is a value for day and that temperature is a number
  if(isNaN(tmp) || dy == "") {
    alert("You must enter a day and a valid temperature");

    //If everything is right, assign data to array elements, make textbox blank, and set cursor to textbox
  } else {
    $("Temperature").value = "";
    days.push(dy);
    temperature.push(tmp)
    $("Temperature").focus();
  }
}


window.onload = function () {
  $("displayResults").onclick = displayResults;
  $("addTemperature").onclick = addTemperature;
  $("displayTemperature").onclick = displayTemperature;
};
