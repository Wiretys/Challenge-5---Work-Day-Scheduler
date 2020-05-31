var currentDay = moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = currentDay;

var currentHour = moment();

var nineSet = new Date();
nineSet.setHours(9, 0, 0, 0);
var nineAm = moment(nineSet);
document.getElementById("nineAm").innerHTML = nineAm.format("hA");

$("#nineAmText").removeClass("past");
$("#nineAmText").removeClass("present");
$("#nineAmText").removeClass("future");

if (moment(nineAm).isBefore(moment(currentHour))) {
    $("#nineAmText").removeClass("future");
    $("#nineAmText").removeClass("present");
    $("#nineAmText").addClass("past");
} else {
    $("#nineAmText").addClass("future");
};
if (moment(nineAm).isBefore(moment(currentHour))) {
    $("#nineAmText").removeClass ("past");
    $("#nineAmText").removeClass ("future");
    $("#nineAmText").addClass("present");
};

var tenSet = new Date();
tenSet.setHours(10, 0, 0, 0);
var tenAm = moment(tenSet).format("hA");
document.getElementById("tenAm").innerHTML = tenAm;


// refresh page every 15 minutes
function reloadPage() {
    setInterval(function () {
        location.reload;
    }, (15 * 60 * 1000));
};

