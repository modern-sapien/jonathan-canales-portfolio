$(document).ready(function() {

// ===============
// GLOBAL VARIABES
// ===============

// Top Nav Target
// =================
var contactNav = $("#contact-html");
var portfolioNav = $("#portfolio-html");
var indexNav = $("#index-html");
var contactNav = $("#contact-html");

var leftContainer = $("#left-container");
var rightContainer = $("#right-container");

// Button Target
var projectBtn = $("#projects-button");

console.log("ready to do things");

// PROJECTS BUTTON CLICK LISTENER
projectBtn.on("click", function()   {
    console.log("I've been clicked!!!")
    leftContainer.empty();
    rightContainer.empty();
});








});