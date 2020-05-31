var currentDay = moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = currentDay;

var currentHour = moment().format('hA');

var endofDay = moment('23', 'hA');
var startofDay = moment('2', 'hA');

var nineSet = new Date();
nineSet.setHours(9, 0, 0, 0);
var nineAm = moment(nineSet).format("hA");
document.getElementById("nineAm").innerHTML = nineAm;

$("#nineAmText").removeClass("past");
$("#nineAmText").removeClass("present");
$("#nineAmText").removeClass("future");

// if (currentHour > nineAm && currentHour < endofDay && currentHour > startofDay) {

    if (currentHour<nineAm) {

    $("#nineAmText").removeClass("past");
    $("#nineAmText").removeClass("present");
    $("#nineAmText").addClass("future");

};

if (currentHour>nineAm) {
    $("#nineAmText").removeClass("future");
    $("#nineAmText").removeClass("present");
    $("#nineAmText").addClass("past");
};


if (currentHour === nineAm) {
    // $("#nineAmText").removeClass ("past");
    // $("#nineAmText").removeClass ("future");
    $("#nineAmText").addClass("present");

};

// location.reload;

var tenSet = new Date();
tenSet.setHours(10, 0, 0, 0);
var tenAm = moment(tenSet).format("hA");
document.getElementById("tenAm").innerHTML = tenAm;