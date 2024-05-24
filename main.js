// Get the height of the first section
const heroSection = document.getElementById('hero-section');
const heroSectionHeight = heroSection.clientHeight;

// Function to toggle shadow effect and white background based on scroll position
function toggleEffects() {
  const scrollTop = window.scrollY;
  const navbar = document.getElementById('navbar');

  // Check if scroll position is past the bottom of the first section
  if (scrollTop > heroSectionHeight) {
    // Add white background to navigation bar
    navbar.classList.add('white-bg');
  } else {
    // Remove shadow effect from navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('shadow');
    });

    // Remove white background from navigation bar
    navbar.classList.remove('white-bg');
  }
}

// Listen for scroll events and call toggleEffects function
window.addEventListener('scroll', toggleEffects);

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// Scroll Number Counter 
const counters= document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
//Variable that tracks if the counters have been activated
let activated = false;

window.addEventListener("scroll", () => {
  /*If the page is scrolled to the containers element and the counters are not activated*/
  if(
    pageYOffset > container.offsetTop - container.offsetHeight - 200
    && activated === false
  ) {
    //Select all counters
    counters.forEach(counter => {
      //Set counter values to zero
      counter.innerText = 0;
      /*Set count variable to
      track the count*/
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);
        //As Long as the count is below the target number
        if(count < target) {
          //Increment the count
          count++;
          //Set the counter text to the count
          counter.innerText = count;
          //Repeat this every 10 miliseconds
          setTimeout(updateCount, 10); /*Count Speed*/
        //And when the target is reached
        } else {
          //Set the counter text to the target number
          counter.innerText = target;
        }
      }
      //Run the function initialy
      updateCount();  
      //Set activated to true
      activated = true;
    });
/*If the page is scrolled back a
certain amount or to the top and activated is true*/
} else if(  
  pageYOffset < container.offsetTop - container.offsetHeight - 500
  || pageYOffset === 0
  && activated === true
) {
//Select all counters
counters.forEach(counter => {
  //Set counter text back to 0
  counter.innerText = 0;
});
//Set activated to false
activated = false;
}
});

// Navigation 2 
// Get the height of the first section
const heroSection1 = document.getElementById('hero-section1');
const heroSectionHeight1 = heroSection.clientHeight;

// Function to toggle shadow effect and white background based on scroll position
function toggleEffects1() {
  const scrollTop1 = window.scrollY;
  const navbar1 = document.getElementById('navbar1');

  // Check if scroll position is past the bottom of the first section
  if (scrollTop1 > heroSectionHeight1) {
    // Add white background to navigation bar
    navbar1.classList.add('white-bg');
  } else {
    // Remove shadow effect from navigation links
    document.querySelectorAll('.nav-link1').forEach(link => {
      link.classList.remove('shadow');
    });

    // Remove white background from navigation bar
    navbar1.classList.remove('white-bg');
  }
}

window.addEventListener('scroll', toggleEffects1);