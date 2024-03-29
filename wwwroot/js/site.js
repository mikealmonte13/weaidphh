﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
// Alternative function
function scrolledNav(header) {
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(`${header}`);
    var scrollYValue = window.scrollY;

    if (scrollYValue > 10 ) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

scrolledNav("header");

window.onscroll = function () {
  // scrollFunction();
};

$("#Home").click(function () {
    $('html, body').animate({
        scrollTop: $("#coverPage").offset().top
    }, 'slow');
});



function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
