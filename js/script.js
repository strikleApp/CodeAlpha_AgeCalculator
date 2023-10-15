var text = document.getElementById("age");
var selectedDate = document.getElementById("picker");
var ageButton = document.getElementById("calculate");
var resetButton = document.getElementById("reset");

ageButton.addEventListener("click", function () {
  if (selectedDate.value == null || selectedDate.value == "") {
    text.innerText = "Please select a date of birth";
    return;
  }
  var dob = moment(selectedDate.value, "YYYY-MM-DD"); 
  console.log(dob);
  var currentDate = moment();
  var years = currentDate.diff(dob, "years");
  dob.add(years, "years");
  var months = currentDate.diff(dob, "months");
  dob.add(months, "months");
  var days = currentDate.diff(dob, "days");
  var message = "You are ";
  if (years > 0) {
    message += years + " years, ";
  }
  if (months > 0) {
    message += months + " months,";
  }
  if (days > 0) {
    message += days + " days";
  }
  text.innerText = message + " old.";
});

resetButton.addEventListener("click", function () {
  text.innerText = "";
});

function calcDate(date1, date2) {
  var diff = Math.floor(date1.getTime() - date2.value);
  var day = 1000 * 60 * 60 * 24;

  var days = Math.floor(diff / day);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);

  var message = date2.toDateString();
  message += " was ";
  message += days + " days ";
  message += months + " months ";
  message += years + " years ago \n";

  return message;
}
