
var name = [];
var price = [];
var detail = [];


var $ = function(id) {
	return document.getElementById(id);
};


function addEspresso() {
	price.push(1.95);
	detail.push("Espresso - Delicious Espresso.  Wanna try it?");
	displayOrder();
}

function addCappuccino() {
	price.push(3.45);
	detail.push("Cappuccino - Delicious Cappuccino!");
	displayOrder();
}

function clearOrder() {
	name = [];
	price = [];
	detail = [];
	$("order").innerHTML = `<br>`;
	$("total").innerHTML = ``;
}

function displayOrder() {
	console.log("start of displayOrder");
		$("order").innerHTML += `$` + price[price.length - 1] +` - ` + detail[detail.length - 1] + `<br>`;
		console.log("running1");

	
	var total = 0;
	for (i = 0; i < price.length; i++) {
		total = total + price[i];
	}
	
	$("total").innerHTML = `Total: $` + total;
}

window.onload = function() {
	$("espresso").onclick = addEspresso;
	$("cappuccino").onclick = addCappuccino;
	$("clear_order").onclick = clearOrder;
}; // end onload