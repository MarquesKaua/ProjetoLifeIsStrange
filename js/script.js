
document.addEventListener("DOMContentLoaded", function() {

    const section1 = document.getElementById("Section1");
    const section2 = document.getElementById("Section2");
    const section3 = document.getElementById("Section3");
    const section4 = document.getElementById("Section4");
    const buttonSeanDaniSec = document.getElementById("SeanDaniSec");
    const buttonMaxSec2 = document.getElementById("MaxSec2");
    const buttonSeanDaniSec3 = document.getElementById("SeanDaniSec3");
    const buttonSeanDaniSec4 = document.getElementById("SeanDaniSec4");
    const buttonMaxSec3 = document.getElementById("MaxSec3");
    const buttonMaxSec4 = document.getElementById("MaxSec4");
    const buttonChloeSec = document.getElementById("ChloeSec");
    const buttonChloeSec2 = document.getElementById("ChloeSec2");
    const buttonChloeSec4 = document.getElementById("ChloeSec4");
    const buttonAlexSec = document.getElementById("AlexSec");
    const buttonAlexSec2 = document.getElementById("AlexSec2");
    const buttonAlexSec3 = document.getElementById("AlexSec3");

    buttonSeanDaniSec.addEventListener("click", function() {
        section1.style.display = "none";
        section2.style.display = "block";
        section3.style.display = "none";
        section4.style.display = "none";
        document.body.style.background = 'linear-gradient(to right, #271515, #352924)';
    });

    buttonSeanDaniSec3.addEventListener("click", function() {
        section1.style.display = "none";
        section2.style.display = "block";
        section4.style.display = "none";
        section3.style.display = "none";
        document.body.style.background = 'linear-gradient(to right, #271515, #352924)';
    });

    buttonSeanDaniSec4.addEventListener("click", function() {
        section1.style.display = "none";
        section2.style.display = "block";
        section4.style.display = "none";
        section3.style.display = "none";
        document.body.style.background = 'linear-gradient(to right, #271515, #352924)';
    });

    buttonMaxSec2.addEventListener("click", function() {
        section1.style.display = "block";
        section2.style.display = "none";
        section4.style.display = "none";
        section3.style.display = "none";
        document.body.style.background = 'linear-gradient(to right, #0f5274, #277599)';
    });

    buttonMaxSec3.addEventListener("click", function() {
        section1.style.display = "block";
        section2.style.display = "none";
        section4.style.display = "none";
        section3.style.display = "none";
        document.body.style.background = 'linear-gradient(to right, #0f5274, #277599)';
    });

    buttonMaxSec4.addEventListener("click", function() {
        section1.style.display = "block";
        section2.style.display = "none";
        section4.style.display = "none";
        section3.style.display = "none";
        document.body.style.background = 'linear-gradient(to right, #0f5274, #277599)';
    });

    buttonChloeSec.addEventListener("click", function(){
        section1.style.display = "none";
        section2.style.display = "none";
        section4.style.display = "none";
        section3.style.display = "block";
        document.body.style.background = 'linear-gradient(to right, #4d1358, #c92daf)';
    })

    buttonChloeSec2.addEventListener("click", function(){
        section1.style.display = "none";
        section2.style.display = "none";
        section4.style.display = "none";
        section3.style.display = "block";
        document.body.style.background = 'linear-gradient(to right, #4d1358, #c92daf)';
    })

    buttonChloeSec4.addEventListener("click", function(){
        section1.style.display = "none";
        section2.style.display = "none";
        section4.style.display = "none";
        section3.style.display = "block";
        document.body.style.background = 'linear-gradient(to right, #4d1358, #c92daf)';
    })

    buttonAlexSec.addEventListener("click", function(){
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "block";
        document.body.style.background = 'conic-gradient(rgb(100, 4, 4), rgb(102, 13, 35), rgb(129, 16, 35), rgb(94, 11, 11))';
    })

    buttonAlexSec2.addEventListener("click", function(){
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "block";
        document.body.style.background = 'conic-gradient(rgb(100, 4, 4), rgb(102, 13, 35), rgb(129, 16, 35), rgb(94, 11, 11))';
    })

    buttonAlexSec3.addEventListener("click", function(){
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "block";
        document.body.style.background = 'conic-gradient(rgb(100, 4, 4), rgb(102, 13, 35), rgb(129, 16, 35), rgb(94, 11, 11))';
    })
});
