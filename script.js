// script.js

document.addEventListener("DOMContentLoaded", function() {
    var title = document.querySelector("h1");

    title.addEventListener("mouseenter", function() {
        title.style.transition = "transform 0.2s ease";
        title.style.transform = "scale(1.1)";
    });

    title.addEventListener("mouseleave", function() {
        title.style.transition = "transform 0.2s ease";
        title.style.transform = "scale(1)";
    });
});
