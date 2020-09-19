var About = document.getElementById('about');
var Education = document.getElementById('education');
var Works = document.getElementById('works');
var Contact = document.getElementById('contact');



var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

function displayAbout(){
    About.style.transform="translateX(0)";
    Education.style.transform="translateX(100%)";
    Works.style.transform="translateX(100%)";
    Contact.style.transform="translateX(100%)";

    btn1.style.color="#02fde8"
    btn2.style.color="#fff"
    btn3.style.color="#fff"
    btn4.style.color="#fff"

    About.style.transitionDelay=".5s";
    Education.style.transitionDelay="0s";
    Works.style.transitionDelay="0s";
    Contact.style.transitionDelay="0s";
}
function displayEducation(){
    About.style.transform="translateX(100%)";
    Education.style.transform="translateX(0)";
    Works.style.transform="translateX(100%)";
    Contact.style.transform="translateX(100%)";

    btn1.style.color="#fff"
    btn2.style.color="#02fde8"
    btn3.style.color="#fff"
    btn4.style.color="#fff"

    About.style.transitionDelay="0s";
    Education.style.transitionDelay=".5s";
    Works.style.transitionDelay="0s";
    Contact.style.transitionDelay="0s";
}
function displayWorks(){
    About.style.transform="translateX(100%)";
    Education.style.transform="translateX(100%)";
    Works.style.transform="translateX(0)";
    Contact.style.transform="translateX(100%)";

    btn1.style.color="#fff"
    btn2.style.color="#fff"
    btn3.style.color="#02fde8"
    btn4.style.color="#fff"

    About.style.transitionDelay="0s";
    Education.style.transitionDelay="0s";
    Works.style.transitionDelay=".5s";
    Contact.style.transitionDelay="0s";
}

function displayContact(){
    About.style.transform="translateX(100%)";
    Education.style.transform="translateX(100%)";
    Works.style.transform="translateX(100%)";
    Contact.style.transform="translateX(0)";

    btn1.style.color="#fff"
    btn2.style.color="#fff"
    btn3.style.color="#fff"
    btn4.style.color="#02fde8"

    About.style.transitionDelay="0s";
    Education.style.transitionDelay="0s";
    Works.style.transitionDelay="0s";
    Contact.style.transitionDelay=".5s";
}