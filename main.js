function sendInfo() {
  alert("Info succesfully sent! Hooray!");
}

function printTicket() {
  alert("You have succesfully gotten a ticket! Please check your email.");
}

function changeTextColor(button){
	button.style.color = "purple";
	button.style.background = "white";
}

function resetTextColor(button){
	button.style.color = "white";
	button.style.background = "#007BFF";
}

var regularPrice = 2895;
var discountRates = {
  Student: 0.5,
  Family: 0.2,
  Normal: 0
};

function showPrice(type) {
	var discount = discountRates[type];
	var finalPrice = regularPrice - (regularPrice * discount);
	alert("The amount is " + finalPrice + " pesos in total.");
}