//! date display

var today = new Date();
var dd = today.getDate();
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var mm = monthNames[today.getMonth()];
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}

document.getElementById('date1').innerHTML = dd + ' ' + mm;


