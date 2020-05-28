
var currentDay = moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = currentDay;


  // convert to moment object at 5:00pm
//   var time = moment(date, "L").set("hour", 17);

    // // convert to moment object at 9am
    // var timeNine = moment(date,"hh:A").set("hour", 9);
    // console.log(timeNine);

    // var m = moment();
    // m.set({hour:9,minute:0,second:0});
    // // m.toISOString();
    // m.format('H: A');
    // console.log(m);

//     var m = moment().utcOffset(0);
// m.set({hour:0,minute:0,second:0,millisecond:0})
// m.toISOString()
// m.format()

// var nineAm = toString= moment().set("h:A", 9);
var nineSet = new Date();
    nineSet.setHours(9, 0, 0, 0);
var nineAm = moment(nineSet).format("hA");
document.getElementById("nineAm").innerHTML = nineAm;

var tenSet = new Date();
    tenSet.setHours(10, 0, 0, 0);
var tenAm = moment(tenSet).format("hA");
document.getElementById("tenAm").innerHTML = tenAm;


// var date = $(taskEl).find("span").text().trim();
// var time = moment(date, "L").set("hour", 17);
// console.log(time);


// var tenAm = moment(date, "L").set("hour", 10);
// document.getElementById("tenAm").innerHTML = tenAm;
// console.log(nineAm);
// console.log(tenAm);

// var auditTask = function(taskEl) {
//     // get date from task element
//     var date = $(taskEl).find("span").text().trim();
  
//     // convert to moment object at 5:00pm
//     var time = moment(date, "L").set("hour", 17);
//     console.log(time);
  
//     // remove any old classes from element
//     $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
  
//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//       $(taskEl).addClass("list-group-item-danger");
//     } 
//     else if (Math.abs(moment().diff(time, "days")) <= 2) {
//       $(taskEl).addClass("list-group-item-warning");
//     }};
  



