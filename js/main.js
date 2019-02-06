// Hide Navbar on scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


// Smooth Scrolling

$(".products-arrow").click(function() {
    document.querySelector('.landing-products-section').scrollIntoView({ behavior: 'smooth' });
});

