
var currentDay = moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = currentDay;


var currentHour =moment().format('HH');

var nineSet = new Date();
    nineSet.setHours(9, 0, 0, 0);
var nineAm = moment(nineSet).format("hA");
document.getElementById("nineAm").innerHTML = nineAm;

if (currentHour=nineAm) {
    append
    
}

if (currentHour>nineAm) {
    append
}


    





var tenSet = new Date();
    tenSet.setHours(10, 0, 0, 0);
var tenAm = moment(tenSet).format("hA");
document.getElementById("tenAm").innerHTML = tenAm;





