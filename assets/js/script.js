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
if (nineAm.format("h") === currentHour.format("h")) {
    $("#nineAmText").removeClass("past");
    $("#nineAmText").removeClass("future");
    $("#nineAmText").addClass("present");
};


// var tenSet = new Date();
// tenSet.setHours(10, 0, 0, 0);
// var tenAm = moment(tenSet).format("hA");
// document.getElementById("tenAm").innerHTML = tenAm;


// refresh page every 15 minutes
function reloadPage() {
    setInterval(function () {
        location.reload;
    }, (15 * 60 * 1000));
};

$("#nineAmText").click(function () {
    var nineAmTaskText = prompt("Please enter a task.", "Call Client");
    if (nineAmTaskText != null) {
        document.getElementById("nineAmText").innerHTML = nineAmTaskText;
        var nineAmTaskTextJSON = JSON.stringify(nineAmTaskText);
        localStorage.setItem("nineAmTextLocalStorage", nineAmTaskTextJSON);
    };
});

// var nineAmTaskText = JSON.parse(nineAmTaskTextJSON)

var loadText = function () {
    nineAmTaskText = JSON.parse(localStorage.getItem("nineAmTextLocalStorage"));
    document.getElementById("nineAmText").innerHTML = nineAmTaskText;
};

loadText();



//   $(this).innerHTML = nineAmTaskText;

//  return console.log(nineAmTaskText);

// });

// $("#nineAmText").on(function(){
//     $("#fieldNine").change(function(){
//       $(this).css("background-color", "#D6D6FF");
//     });
// });