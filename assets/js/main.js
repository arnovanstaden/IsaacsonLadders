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
$(".filter-options > div").click(function () {
  $(this).toggleClass("active");
  filterLadders();
});

const filterLadders = () => {
  $("#ladder-products-grid .product").removeClass("filter-hide-ladder");

  // Get Active Filters
  let activeFilters = [];
  let filtersLength = $(".filter-options div").length;
  for (let j = 1; j <= filtersLength; j++) {
    if ($(`.filter-options div:nth-child(${j})`).hasClass("active")) {
      let filter = $(`.filter-options div:nth-child(${j})`).attr("data-product-filter");
      activeFilters.push(filter)
    }
  }

  // Filter Ladders
  if (activeFilters.length > 0) {
    let shopLength = $("#ladder-products-grid .product").length;
    for (let i = 1; i <= shopLength; i++) {
      let productType = $(`#ladder-products-grid .product:nth-child(${i})`).attr("data-product-type");
      if (!activeFilters.includes(productType)) {
        $(`#ladder-products-grid .product:nth-child(${i})`).addClass("filter-hide-ladder")
      }
    }
  }
}




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

$(".quote-modal .submit-button").click(function () {
  $(".quote-modal form").fadeOut();
  $(".quote-modal h2").fadeIn();
});

function closeQuoteModal() {
  $(".quote-modal").fadeOut();
}


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