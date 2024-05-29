// js/script.js
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos
    const section1 = document.getElementById("Section1");
    const section2 = document.getElementById("Section2");
    const buttonSeanDaniSec = document.getElementById("SeanDaniSec");
    const buttonMaxSec2 = document.getElementById("MaxSec2");

    // Adiciona um ouvinte de evento ao botão SeanDaniSec
    buttonSeanDaniSec.addEventListener("click", function() {
        // Altera as propriedades de exibição das seções
        section1.style.display = "none";
        section2.style.display = "block";
        document.body.style.background = 'linear-gradient(to right, #271515, #352924)';
    });

    // Adiciona um ouvinte de evento ao botão MaxSec
    buttonMaxSec2.addEventListener("click", function() {
        // Altera as propriedades de exibição das seções
        section1.style.display = "block";
        section2.style.display = "none";
        document.body.style.background = 'linear-gradient(to right, #0f5274, #277599)';
    });
});
