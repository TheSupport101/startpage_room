/*function init() {
    $('#main').css({opacity: 1});
}*/

$(function fadeIn() {
    $("#main").css({opacity: 1});
});

$(function displayTime() {
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
    var clock = document.getElementById("clock");
    clock.innerHTML = "<p>" + h + ":" + m + "</p>";
    t = setTimeout(function() {
        displayTime()
    }, 500);
});

$(function showMenu(){
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

$(function showNews(){
    $("")
});

var backgroundImage = new Image();
backgroundImage.src = $(".main").css("background-image").replace(/"/g,"").replace(/url\(|\)$/ig, "");

backgroundImage.onload = function() {
    var width = this.width;
    var height = this.height;

    var object = $("body");

    var imageRatio = width/height;
    var windowRatio = object.outerWidth()/object.outerHeight();

    if (imageRatio >= windowRatio) {
        // height
        var windowHeight = object.outerHeight();
        var scale = (windowHeight / height);
        var windowWidth = width * scale;
    } else {
        // width
        var windowWidth = object.outerWidth();
        var scale = (windowWidth / width);
        var windowHeight = height * scale;
    }
    // adjust clock position
    var clockX = 0.34;
    var clockY = 0.17;
    // adjust newsfeed position
    var feedX = 0.875;
    var feedY = 0.12;

    var midpointx = object.outerWidth()/2;
    var midpointy = object.outerHeight()/2;
    var clock_xPos = midpointx - (clockX*windowWidth);
    var clock_yPos = midpointy - (clockY*windowHeight);
    var feed_xPos = midpointx - (feedX*windowHeight);
    var feed_yPos = midpointy - (feedY*windowWidth);

    $("#clock").css({position: "fixed"});
    $("#clock").css({top: clock_yPos, left: clock_xPos});
    $("#newswindow").css({position: "fixed"});
    $("#newswindow").css({top: feed_yPos, right: feed_xPos});
};