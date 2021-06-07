var i = 0;
var txt = "Hi! My name is Javier. I am a communication designer from Berlin. Get in touch!"; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */
var scrwidth;
var item = document.getElementById('ready');
var currentSite = "home";

var currentYear = new Date().getFullYear();
var experienceTime = currentYear - 2019;
document.getElementById("year").innerHTML = experienceTime;

//welcome animation
function typeWriter() {
    if (window.screen.width < 689) {
        scrwidth = "mobile";
    }
    if (window.screen.width > 688) {
        scrwidth = "desktop";
    }
    if (scrwidth == "desktop") {
        if (i < txt.length) {
            document.getElementById("welcome").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            document.getElementById("welcome").style.display = "none";
            document.getElementById("ready").style.display = "block";
            document.getElementById("ready").style.opacity = "1";

        }
    }
    if (scrwidth == "mobile") {
        if (i < txt.length) {
            document.getElementById("welcome").innerHTML += txt.charAt(i);
            i++;
            if (i == 4 || i == 22 || i == 66) {
                document.getElementById("welcome").innerHTML += "<br />";
            }
            setTimeout(typeWriter, speed);
        } else {
            document.getElementById("ready").style.display = "block";
            item.classList.add('is-visible');
            setTimeout(function() {
                item.classList.add('is-open');
            }, 20);
            document.getElementById("welcome").style.display = "none";
        }
    }
}


function fade(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function() {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.3;
    }, 50);
}

function unfade(element) {
    var op = 0.1; // initial opacity
    element.style.display = 'grid';
    var timer = setInterval(function() {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.05;
    }, 10);
}

function toggleAbout() {
    document.getElementById("homescreen").style.display = "none";
    unfade(document.getElementById("aboutscreen"));
    categoryColor("rgb(0, 192, 0)");
    document.getElementById("title-container").style.visibility = "visible";
    document.getElementById("current-title").innerHTML = "About";
    currentSite = "about";
}

function toggleWork() {
    document.getElementById("homescreen").style.display = "none";
    unfade(document.getElementById("workscreen"));
    categoryColor("goldenrod");
    document.getElementById("title-container").style.visibility = "visible";
    document.getElementById("current-title").innerHTML = "Work";
    currentSite = "work";
}

function toggleLocation() {
    document.getElementById("homescreen").style.display = "none";
    unfade(document.getElementById("locationscreen"));
    categoryColor("crimson");
    document.getElementById("title-container").style.visibility = "visible";
    document.getElementById("current-title").innerHTML = "Location";
    currentSite = "location";
}

function toggleContact() {
    document.getElementById("homescreen").style.display = "none";
    unfade(document.getElementById("contactscreen"));
    categoryColor("orchid");
    document.getElementById("title-container").style.visibility = "visible";
    document.getElementById("current-title").innerHTML = "Contact";
    currentSite = "contact";
}

function toggleHome() {
    if (currentSite == "about") {
        document.getElementById("aboutscreen").style.display = "none";
    }
    if (currentSite == "work") {
        document.getElementById("workscreen").style.display = "none";
    }
    if (currentSite == "location") {
        document.getElementById("locationscreen").style.display = "none";
    }
    if (currentSite == "contact") {
        document.getElementById("contactscreen").style.display = "none";
    }
    document.getElementById("title-container").style.visibility = "hidden";
    document.getElementById("current-title").innerHTML = "Home";
    unfade(document.getElementById("homescreen"));
    currentSite = "home";
}

function categoryColor(c) {
    document.getElementById("title-container").style.backgroundColor = c;
    document.getElementById("x").onmouseover = function() {
        document.getElementById("x").style.color = c;
    };
    document.getElementById("x").onmouseout = function() {
        document.getElementById("x").style.color = "ghostwhite";
    };
}