// var currentDay = moment().format('dddd, MMMM Do YYYY');
var currentDay = moment();

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
if (nineAm.format("h") === currentHour.format("h")) {
    $("#nineAmText").removeClass("past");
    $("#nineAmText").removeClass("future");
    $("#nineAmText").addClass("present");
};

$("#nineAmText").click(function () {
});
$("#saveBtnClick").click(function () {
    var nineAmTaskText = $("#nineAmText").val();
    var nineAmTaskTextJSON = JSON.stringify(nineAmTaskText);
    localStorage.setItem("nineAmTextLocalStorage", nineAmTaskTextJSON);
});
var loadText = function () {
    nineAmTaskText = JSON.parse(localStorage.getItem("nineAmTextLocalStorage"));
    document.getElementById("nineAmText").value = nineAmTaskText;
};

// var tenSet = new Date();
// tenSet.setHours(10, 0, 0, 0);
// var tenAm = moment(tenSet).format("hA");
// document.getElementById("tenAm").innerHTML = tenAm;


loadText();

// refresh page every 15 minutes
    setTimeout (function() {
        window.location.reload(1);
    }, (15 * 60 * 1000));



