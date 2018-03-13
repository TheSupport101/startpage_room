//var clock = document.getElementById("clock");

function displayTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // ensuring format is hh:mm
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    document.getElementById("clock").innerHTML = "<p>" + h + ":" + m + "</p>";
    //clock.innerHTML = h + ":" + m;
    t = setTimeout(function() {
        displayTime()
    }, 500);
}

function displayDate() {
    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    document.getElementById("date").innerHTML = "<p>" + day + " " + month + "</p>";
}

$(function(){
    $("#button-icons").mouseover(function(){
        if($(".content").hasClass("active")){
            $(".content").removeClass("active").hide();
        }
        if($(".buttons").hasClass("highlight")){
            $(".buttons").removeClass("highlight");
        }
        $("#button-icons").addClass("highlight");
        $("#icons").addClass("active").show();
    });
    $("#button-weather").mouseover(function(){
        if($(".content").hasClass("active")){
            $(".content").removeClass("active").hide();
        }
        if($(".buttons").hasClass("highlight")){
            $(".buttons").removeClass("highlight");
        }
        $("#button-weather").addClass("highlight");
        $("#weather").addClass("active").show();
    });
    $("#button-feed").mouseover(function(){
        if($(".content").hasClass("active")){
            $(".content").removeClass("active").hide();
        }
        if($(".buttons").hasClass("highlight")){
            $(".buttons").removeClass("highlight");
        }
        $("#button-feed").addClass("highlight");
        $("#feed").addClass("active").show("50");
    });
});


displayTime();
//displayDate();