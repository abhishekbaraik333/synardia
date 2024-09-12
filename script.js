document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
      anchors: ['section1', 'section2', 'section3', 'section4'], // Section anchors for URL
      scrollingSpeed: 700, // Smooth scrolling speed
      scrollOverflow: true, // Enable scroll for overflowing content in sections
      responsiveWidth: 900, // FullPage.js disables auto scrolling below this width
      responsiveHeight: 600 // FullPage.js disables auto scrolling below this height
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    // Select the logo slide container
    const slideContainer = document.querySelector('.vertical-scroll');
    
    // Duplicate the logos for seamless looping
    const logos = slideContainer.innerHTML;
    slideContainer.innerHTML += logos; // Duplicate logos to create an endless loop
  
    // Get the height of a single logo item
    const logoHeight = document.querySelectorAll('.vertical-scroll a').offsetHeight + 40; // Add the margin height (20px * 2)
  
    // Create GSAP animation
    gsap.to(slideContainer, {
      y: `-${slideContainer.scrollHeight / 2}px`, // Move half the container height upwards
      duration: 200, // Adjust the speed of the animation
      ease: 'none', // Linear animation
      repeat: -1, // Infinite loop
    });
  });
  