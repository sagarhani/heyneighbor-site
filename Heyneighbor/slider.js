var numSlides = 3,
		$slide = document.querySelector(".slides"),
    $prev = document.querySelector(".arrow-prev"),
    $next = document.querySelector(".arrow-next");

function getSlide() {
  var classnames = $slide.className,
      matches = classnames.match(/slide-page-[0-9]-visible/) || [ "" ],
  		current = parseInt(matches[0].replace(/[a-z\-]/g, "")) || 1;
  
  return current;
}

function changeSlide(num) {
  var classnames = $slide.className,
  		page = getSlide() + num;
  
  if (page < 1) {
    page = 3;
  } else if (page > 3) {
    page = 1;
  }

  
  classnames = classnames.replace(/slide-page-[0-9]-visible/, "");
  
  classnames += " slide-page-" + page + "-visible";
  
  $slide.className = classnames;
}

$prev.addEventListener("click", function() {
  changeSlide(-1);
});

$next.addEventListener("click", function() {
  changeSlide(1);
});

setInterval(function() {
  var current = getSlide();
  
  if (current === numSlides) {
    changeSlide((numSlides - 1) * -1);
  } else {
    changeSlide(1);
  }
}, 4000)

