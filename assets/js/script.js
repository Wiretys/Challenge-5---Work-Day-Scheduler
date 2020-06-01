$(document).ready(function () {
    var currentDay = moment().format('dddd, MMMM Do YYYY');
    var currentHour = moment();
    document.getElementById("currentDay").innerHTML = currentDay;

    // set nine am
    var nineSet = new Date();
    nineSet.setHours(9, 0, 0, 0);
    var nineAm = moment(nineSet);
    document.getElementById("nineAm").innerHTML = nineAm.format("hA");
    // reset classes
    $("#nineAmText").removeClass("past");
    $("#nineAmText").removeClass("present");
    $("#nineAmText").removeClass("future");
    // set to change class based on time
    if (moment(nineAm).isBefore(moment(currentHour))) {
        $("#nineAmText").removeClass("future");
        $("#nineAmText").removeClass("present");
        $("#nineAmText").addClass("past");
    } else {
        $("#nineAmText").addClass("future");
    };
    if (nineAm.format("h") === currentHour.format("h") && ninePm.format("A") === currentHour.format("A")) {
        $("#nineAmText").removeClass("past");
        $("#nineAmText").removeClass("future");
        $("#nineAmText").addClass("present");
    };
    // setup div event function
    $("#nineAmText").click(function () { });
    // setup button to save to local storage
    $("#ninesaveBtnClick").click(function () {
        var nineAmTaskText = $("#nineAmText").val();
        var nineAmTaskTextJSON = JSON.stringify(nineAmTaskText);
        localStorage.setItem("nineAmTextLocalStorage", nineAmTaskTextJSON);
    });
    // recall local storage
    var nineloadText = function () {
        nineAmTaskText = JSON.parse(localStorage.getItem("nineAmTextLocalStorage"));
        document.getElementById("nineAmText").value = nineAmTaskText;
    };
    nineloadText();

    // set ten am
    var tenSet = new Date();
    tenSet.setHours(10, 0, 0, 0);
    var tenAm = moment(tenSet);
    document.getElementById("tenAm").innerHTML = tenAm.format("hA");
    // reset classes
    $("#tenAmText").removeClass("past");
    $("#tenAmText").removeClass("present");
    $("#tenAmText").removeClass("future");
    // set to change class based on time
    if (moment(tenAm).isBefore(moment(currentHour))) {
        $("#tenAmText").removeClass("future");
        $("#tenAmText").removeClass("present");
        $("#tenAmText").addClass("past");
    } else {
        $("#tenAmText").addClass("future");
    };
    if (tenAm.format("h") === currentHour.format("h") && tenPm.format("A") === currentHour.format("A")) {
        $("#tenAmText").removeClass("past");
        $("#tenAmText").removeClass("future");
        $("#tenAmText").addClass("present");
    };
    // setup div event function
    $("#tenAmText").click(function () { });
    // setup button to save to local storage
    $("#tensaveBtnClick").click(function () {
        var tenAmTaskText = $("#tenAmText").val();
        var tenAmTaskTextJSON = JSON.stringify(tenAmTaskText);
        localStorage.setItem("tenAmTextLocalStorage", tenAmTaskTextJSON);
    });
    // recall local storage
    var tenloadText = function () {
        tenAmTaskText = JSON.parse(localStorage.getItem("tenAmTextLocalStorage"));
        document.getElementById("tenAmText").value = tenAmTaskText;
    };
    tenloadText();

    // set eleven am
    var elevenSet = new Date();
    elevenSet.setHours(11, 0, 0, 0);
    var elevenAm = moment(elevenSet);
    document.getElementById("elevenAm").innerHTML = elevenAm.format("hA");
    // reset classes
    $("#elevenAmText").removeClass("past");
    $("#elevenAmText").removeClass("present");
    $("#elevenAmText").removeClass("future");
    // set to change class based on time
    if (moment(elevenAm).isBefore(moment(currentHour))) {
        $("#elevenAmText").removeClass("future");
        $("#elevenAmText").removeClass("present");
        $("#elevenAmText").addClass("past");
    } else {
        $("#elevenAmText").addClass("future");
    };
    if (elevenAm.format("h") === currentHour.format("h") && elevenPm.format("A") === currentHour.format("A")) {
        $("#elevenAmText").removeClass("past");
        $("#elevenAmText").removeClass("future");
        $("#elevenAmText").addClass("present");
    };
    // setup div event function
    $("#elevenAmText").click(function () { });
    // setup button to save to local storage
    $("#elevensaveBtnClick").click(function () {
        var elevenAmTaskText = $("#elevenAmText").val();
        var elevenAmTaskTextJSON = JSON.stringify(elevenAmTaskText);
        localStorage.setItem("elevenAmTextLocalStorage", elevenAmTaskTextJSON);
    });
    // recall local storage
    var elevenloadText = function () {
        elevenAmTaskText = JSON.parse(localStorage.getItem("elevenAmTextLocalStorage"));
        document.getElementById("elevenAmText").value = elevenAmTaskText;
    };
    elevenloadText();

    // set twelve pm
    var twelveSet = new Date();
    twelveSet.setHours(12, 0, 0, 0);
    var twelvePm = moment(twelveSet);
    document.getElementById("twelvePm").innerHTML = twelvePm.format("hA");
    // reset classes
    $("#twelvePmText").removeClass("past");
    $("#twelvePmText").removeClass("present");
    $("#twelvePmText").removeClass("future");
    // set to change class based on time
    if (moment(twelvePm).isBefore(moment(currentHour))) {
        $("#twelvePmText").removeClass("future");
        $("#twelvePmText").removeClass("present");
        $("#twelvePmText").addClass("past");
    } else {
        $("#twelvePmText").addClass("future");
    };
    if (twelvePm.format("h") === currentHour.format("h") && twelvePm.format("A") === currentHour.format("A")) {
        $("#twelvePmText").removeClass("past");
        $("#twelvePmText").removeClass("future");
        $("#twelvePmText").addClass("present");
    };
    // setup div event function
    $("#twelvePmText").click(function () { });
    // setup button to save to local storage
    $("#twelvesaveBtnClick").click(function () {
        var twelvePmTaskText = $("#twelvePmText").val();
        var twelvePmTaskTextJSON = JSON.stringify(twelvePmTaskText);
        localStorage.setItem("twelvePmTextLocalStorage", twelvePmTaskTextJSON);
    });
    // recall local storage
    var twelveloadText = function () {
        twelvePmTaskText = JSON.parse(localStorage.getItem("twelvePmTextLocalStorage"));
        document.getElementById("twelvePmText").value = twelvePmTaskText;
    };
    twelveloadText();

    // set one pm
    var oneSet = new Date();
    oneSet.setHours(13, 0, 0, 0);
    var onePm = moment(oneSet);
    document.getElementById("onePm").innerHTML = onePm.format("hA");
    // reset classes
    $("#onePmText").removeClass("past");
    $("#onePmText").removeClass("present");
    $("#onePmText").removeClass("future");
    // set to change class based on time
    if (moment(onePm).isBefore(moment(currentHour))) {
        $("#onePmText").removeClass("future");
        $("#onePmText").removeClass("present");
        $("#onePmText").addClass("past");
    } else {
        $("#onePmText").addClass("future");
    };
    if (onePm.format("h") === currentHour.format("h") && onePm.format("A") === currentHour.format("A")) {
        $("#onePmText").removeClass("past");
        $("#onePmText").removeClass("future");
        $("#onePmText").addClass("present");
    };
    // setup div event function
    $("#onePmText").click(function () { });
    // setup button to save to local storage
    $("#onesaveBtnClick").click(function () {
        var onePmTaskText = $("#onePmText").val();
        var onePmTaskTextJSON = JSON.stringify(onePmTaskText);
        localStorage.setItem("onePmTextLocalStorage", onePmTaskTextJSON);
    });
    // recall local storage
    var oneloadText = function () {
        onePmTaskText = JSON.parse(localStorage.getItem("onePmTextLocalStorage"));
        document.getElementById("onePmText").value = onePmTaskText;
    };
    oneloadText();

    // set two pm
    var twoSet = new Date();
    twoSet.setHours(14, 0, 0, 0);
    var twoPm = moment(twoSet);
    document.getElementById("twoPm").innerHTML = twoPm.format("hA");
    // reset classes
    $("#twoPmText").removeClass("past");
    $("#twoPmText").removeClass("present");
    $("#twoPmText").removeClass("future");
    // set to change class based on time
    if (moment(twoPm).isBefore(moment(currentHour))) {
        $("#twoPmText").removeClass("future");
        $("#twoPmText").removeClass("present");
        $("#twoPmText").addClass("past");
    } else {
        $("#twoPmText").addClass("future");
    };
    if (twoPm.format("h") === currentHour.format("h") && twoPm.format("A") === currentHour.format("A")) {
        $("#twoPmText").removeClass("past");
        $("#twoPmText").removeClass("future");
        $("#twoPmText").addClass("present");
    };
    // setup div event function
    $("#twoPmText").click(function () { });
    // setup button to save to local storage
    $("#twosaveBtnClick").click(function () {
        var twoPmTaskText = $("#twoPmText").val();
        var twoPmTaskTextJSON = JSON.stringify(twoPmTaskText);
        localStorage.setItem("twoPmTextLocalStorage", twoPmTaskTextJSON);
    });
    // recall local storage
    var twoloadText = function () {
        twoPmTaskText = JSON.parse(localStorage.getItem("twoPmTextLocalStorage"));
        document.getElementById("twoPmText").value = twoPmTaskText;
    };
    twoloadText();

    // set three pm
    var threeSet = new Date();
    threeSet.setHours(15, 0, 0, 0);
    var threePm = moment(threeSet);
    document.getElementById("threePm").innerHTML = threePm.format("hA");
    // reset classes
    $("#threePmText").removeClass("past");
    $("#threePmText").removeClass("present");
    $("#threePmText").removeClass("future");
    // set to change class based on time
    if (moment(threePm).isBefore(moment(currentHour))) {
        $("#threePmText").removeClass("future");
        $("#threePmText").removeClass("present");
        $("#threePmText").addClass("past");
    } else {
        $("#threePmText").addClass("future");
    };
    if (threePm.format("h") === currentHour.format("h") && threePm.format("A") === currentHour.format("A")) {
        $("#threePmText").removeClass("past");
        $("#threePmText").removeClass("future");
        $("#threePmText").addClass("present");
    };
    // setup div event function
    $("#threePmText").click(function () { });
    // setup button to save to local storage
    $("#threesaveBtnClick").click(function () {
        var threePmTaskText = $("#threePmText").val();
        var threePmTaskTextJSON = JSON.stringify(threePmTaskText);
        localStorage.setItem("threePmTextLocalStorage", threePmTaskTextJSON);
    });
    // recall local storage
    var threeloadText = function () {
        threePmTaskText = JSON.parse(localStorage.getItem("threePmTextLocalStorage"));
        document.getElementById("threePmText").value = threePmTaskText;
    };
    threeloadText();

    // set four pm
    var fourSet = new Date();
    fourSet.setHours(16, 0, 0, 0);
    var fourPm = moment(fourSet);
    document.getElementById("fourPm").innerHTML = fourPm.format("hA");
    // reset classes
    $("#fourPmText").removeClass("past");
    $("#fourPmText").removeClass("present");
    $("#fourPmText").removeClass("future");
    // set to change class based on time
    if (moment(fourPm).isBefore(moment(currentHour))) {
        $("#fourPmText").removeClass("future");
        $("#fourPmText").removeClass("present");
        $("#fourPmText").addClass("past");
    } else {
        $("#fourPmText").addClass("future");
    };
    if (fourPm.format("h") === currentHour.format("h") && fourPm.format("A") === currentHour.format("A")) {
        $("#fourPmText").removeClass("past");
        $("#fourPmText").removeClass("future");
        $("#fourPmText").addClass("present");
    };
    // setup div event function
    $("#fourPmText").click(function () { });
    // setup button to save to local storage
    $("#foursaveBtnClick").click(function () {
        var fourPmTaskText = $("#fourPmText").val();
        var fourPmTaskTextJSON = JSON.stringify(fourPmTaskText);
        localStorage.setItem("fourPmTextLocalStorage", fourPmTaskTextJSON);
    });
    // recall local storage
    var fourloadText = function () {
        fourPmTaskText = JSON.parse(localStorage.getItem("fourPmTextLocalStorage"));
        document.getElementById("fourPmText").value = fourPmTaskText;
    };
    fourloadText();

    // set five pm
    var fiveSet = new Date();
    fiveSet.setHours(17, 0, 0, 0);
    var fivePm = moment(fiveSet);
    document.getElementById("fivePm").innerHTML = fivePm.format("hA");
    // reset classes
    $("#fivePmText").removeClass("past");
    $("#fivePmText").removeClass("present");
    $("#fivePmText").removeClass("future");
    // set to change class based on time
    if (moment(fivePm).isBefore(moment(currentHour))) {
        $("#fivePmText").removeClass("future");
        $("#fivePmText").removeClass("present");
        $("#fivePmText").addClass("past");
    } else {
        $("#fivePmText").addClass("future");
    };
    if (fivePm.format("h") === currentHour.format("h") && fivePm.format("A") === currentHour.format("A")) {
        $("#fivePmText").removeClass("past");
        $("#fivePmText").removeClass("future");
        $("#fivePmText").addClass("present");
    };
    // setup div event function
    $("#fivePmText").click(function () { });
    // setup button to save to local storage
    $("#fivesaveBtnClick").click(function () {
        var fivePmTaskText = $("#fivePmText").val();
        var fivePmTaskTextJSON = JSON.stringify(fivePmTaskText);
        localStorage.setItem("fivePmTextLocalStorage", fivePmTaskTextJSON);
    });
    // recall local storage
    var fiveloadText = function () {
        fivePmTaskText = JSON.parse(localStorage.getItem("fivePmTextLocalStorage"));
        document.getElementById("fivePmText").value = fivePmTaskText;
    };
    fiveloadText();

    // refresh page every 15 minutes
    setTimeout(function () {
        window.location.reload(1);
    }, (15 * 60 * 1000));
});