document.body.addEventListener('click', function(event) {
  // Check if the clicked element is a link
  if (event.target.tagName === 'A') {
    event.preventDefault();
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

