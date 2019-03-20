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
$(".products-nav a").click(function () {
  $(".products-nav a").removeClass("active-product");
  $(this).addClass("active-product");
});

$("#ladder-tab").click(function () {
  $(".products-section").fadeOut();
  $(".ladder-products-section").fadeIn();
  $(".products-page-header").css("background-image", "url(../images/section-headers/ladder-page-header.jpg)");
  $(".products-page-header > img").attr("src", "../images/section-headers/ladders.png");

});

$("#trolley-tab").click(function () {
  $(".products-section").fadeOut();
  $(".trolley-products-section").fadeIn();
  $(".products-page-header").css("background-image", "url(../images/section-headers/castor-page-header.jpg)");
  $(".products-page-header > img").attr("src", "../images/section-headers/trolleys.png");
});





// filter
$("#single-sided-label").click(function () {
  $(".product").fadeOut(1);
  $(".single-sided").fadeIn(500);
});

$("#multi-purpose-label").click(function () {
  $(".product").fadeOut(1);
  $(".multi-purpose").fadeIn(500);
});

$("#extension").click(function () {
  $(".product").fadeOut(1);
  $(".extension").fadeIn(500);
});

$("#lean-to").click(function () {
  $(".product").fadeOut(1);
  $(".lean-to").fadeIn(500);
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