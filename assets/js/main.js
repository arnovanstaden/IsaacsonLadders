// -------------------------------------------------------------------------

// GENERAL


// NAVBAR


// Hide Navbar on scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

// Mobile Nav
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


// Navbar Overlay Dropdown

$(".overlay-dropdown-btn").click(function () {
  $(this).next().toggle("500");
});



// ---------------------------------------------------------------------------------

// CONTACT PAGE

// Form Modal 

$(".submit-button").click(function () {
  $(".form-modal").fadeIn(1000);
});

$(".form-modal-close").click(function () {
  window.location.replace("./contact.html");
});


// Quote Modal


// LADDER CAROUSEL

$(".contact-modal > i").click(function () {
  $(".contact-modal").fadeOut(500);
});

// FOOTER TEMPLATE
$(document).ready(() => {

  if (window.location.pathname.includes("/products/ladders/") || window.location.pathname.includes("/products/trolleys/")) {
    $.get("../../footer.html", function (data) {
      $("#footer").replaceWith(data);
    });
  } else if (window.location.pathname.includes("/products/")) {
    $.get("../footer.html", function (data) {
      $("#footer").replaceWith(data);
    });
  } else {
    $.get("./footer.html", function (data) {
      $("#footer").replaceWith(data)
    });
  }

});