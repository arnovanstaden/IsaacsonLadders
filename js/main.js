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


// ------------------------------------------
// PRODUCT PAGE

// Change Active Tab


// Ladder Filters
$("#single").click(function () {
  $(".product").fadeOut(1);
  $(".single").fadeIn(500);
});

$("#double").click(function () {
  $(".product").fadeOut(1);
  $(".double").fadeIn(500);
});

$("#multi").click(function () {
  $(".product").fadeOut(1);
  $(".multi").fadeIn(500);
});

$("#extension").click(function () {
  $(".product").fadeOut(1);
  $(".extension").fadeIn(500);
});

$("#lean").click(function () {
  $(".product").fadeOut(1);
  $(".lean").fadeIn(500);
});

$(".clear-filter-button").click(function () {
  location.reload();
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

function openQuoteModal() {
  $(".quote-modal").fadeIn();
  var productName = $(".ladder-product-name").text();
  $(".quote-modal h3").html(productName);
  $(".quote-product-name").val(productName);
}

$(".quote-modal .submit-button").click(function() {
  $(".quote-modal form").fadeOut();
  $(".quote-modal h2").fadeIn();
});

function closeQuoteModal() {
  $(".quote-modal").fadeOut();
}