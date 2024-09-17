document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("video");

  // Create an IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If the video is in the viewport, play it
        video.play();
      } else {
        // If the video is out of the viewport, pause it
        video.pause();
      }
    });
  }, {
    threshold: 0.1 // Adjust as needed, 0.5 means 50% of the video must be visible
  });

  // Observe the video element
  observer.observe(video);
});



window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Fade out the loader and display the content
  loader.style.opacity = "0";

  // Give the loader some time to fade out before removing it
  setTimeout(() => {
    loader.style.display = "none";
    content.classList.remove("hidden"); // Show the main content
    content.style.opacity = "1"; // Fade in the main content
  }, 500); // Adjust the time as needed to match your design
});

document.addEventListener("DOMContentLoaded", function () {
  new fullpage("#fullpage", {
    anchors: [
      "section1",
      "section2",
      "section3",
      "section4",
      "section5",
      "section6",
      "section7",
      "section8",
    ], // Section anchors for URL
    scrollingSpeed: 1000, // Smooth scrolling speed
    scrollOverflow: true, // Enable scroll for overflowing content in sections
  });

  document.getElementById("arrow-down1").addEventListener("click", function () {
    fullpage_api.moveSectionDown();
  });
  document.getElementById("arrow-down2").addEventListener("click", function () {
    fullpage_api.moveSectionDown();
  });
  document.getElementById("arrow-down3").addEventListener("click", function () {
    fullpage_api.moveSectionDown();
  });
  document.getElementById("arrow-down4").addEventListener("click", function () {
    fullpage_api.moveSectionDown();
  });
  document.getElementById("arrow-down5").addEventListener("click", function () {
    fullpage_api.moveSectionDown();
  });
  document.getElementById("arrow-down6").addEventListener("click", function () {
    fullpage_api.moveSectionDown();
  });
  document.getElementById("arrow-down7").addEventListener("click", function () {
    fullpage_api.moveSectionDown();
  });
  document.getElementById("arrow-down8").addEventListener("click", function () {
    fullpage_api.moveTo(1);
  });
});

gsap.to(".circle-2", {
  scale: 1.2, // Scale up to 120%
  duration: 2, // Duration for the animation
  ease: "power1.inOut", // Smooth easing in and out
  repeat: -1, // Infinite repeat
  yoyo: true, // Reverse the animation to scale down
});

gsap.to(".circle-1", {
  scale: 1.2, // Scale up to 120%
  duration: 2, // Duration for the animation
  ease: "power1.inOut", // Smooth easing in and out
  repeat: -1, // Infinite repeat
  yoyo: true, // Reverse the animation to scale down
});

document.addEventListener("DOMContentLoaded", function () {
  // Select the logo slide container
  const slideContainer = document.querySelector(".vertical-scroll");

  // Duplicate the logos for seamless looping
  const logos = slideContainer.innerHTML;
  slideContainer.innerHTML += logos; // Duplicate logos to create an endless loop

  // Get the height of a single logo item
  const logoHeight =
    document.querySelectorAll(".vertical-scroll a").offsetHeight + 40; // Add the margin height (20px * 2)

  // Create GSAP animation
  gsap.to(slideContainer, {
    y: `-${slideContainer.scrollHeight / 2}px`, // Move half the container height upwards
    duration: 100, // Adjust the speed of the animation
    ease: "none", // Linear animation
    repeat: -1, // Infinite loop
  });
});

const knob = document.getElementById("knob");
const audio = document.getElementById("audio");

let currentRotation = 0;
let isDragging = false;

// Play audio by default
audio.volume = 0.5; // Default volume (50%)

// Mouse events for rotating the knob
knob.addEventListener("mousedown", () => {
  isDragging = true;
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    rotateKnob(event.clientX, event.clientY);
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

function rotateKnob(mouseX, mouseY) {
  const knobRect = knob.getBoundingClientRect();
  const centerX = knobRect.left + knobRect.width / 2;
  const centerY = knobRect.top + knobRect.height / 2;

  const angle =
    Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
  const newRotation = angle + 90; // Adjust angle to fit the knob

  currentRotation = Math.max(-135, Math.min(newRotation, 135)); // Limit rotation between -135 and 135 degrees

  // Rotate the knob and smoothly adjust the shadow
  updateKnobRotation(currentRotation);

  // Adjust volume based on rotation
  updateVolumeBasedOnRotation(currentRotation);
}

function updateKnobRotation(rotation) {
  // Adjust shadow dynamically based on rotation angle
  const shadowOffsetX = 10 + rotation / 10;
  const shadowOffsetY = 10 + rotation / 10;
  knob.style.transform = `rotate(${rotation}deg)`;
  knob.style.boxShadow = `${shadowOffsetX}px ${shadowOffsetY}px 20px #EC9784, -10px -10px 20px rgba(255, 255, 255, 0.7)`;
}

function updateVolumeBasedOnRotation(rotation) {
  const volume = (rotation + 135) / 200; // Normalize rotation to volume (0-1)
  audio.volume = volume;
}

// Add keyboard control for volume (Up/Down arrow keys)
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    // Increase volume
    currentRotation = Math.min(currentRotation + 10, 135); // Cap at max rotation
    updateKnobRotation(currentRotation);
    updateVolumeBasedOnRotation(currentRotation);
  } else if (event.key === "ArrowDown") {
    // Decrease volume
    currentRotation = Math.max(currentRotation - 10, -135); // Cap at min rotation
    updateKnobRotation(currentRotation);
    updateVolumeBasedOnRotation(currentRotation);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");

  // Event listener for Play button
  playBtn.addEventListener("click", function() {
    audio.play();
    playBtn.classList.add("hidden");  // Hide Play button
    pauseBtn.classList.remove("hidden"); // Show Pause button
  });

  // Event listener for Pause button
  pauseBtn.addEventListener("click", function() {
    audio.pause();
    pauseBtn.classList.add("hidden"); // Hide Pause button
    playBtn.classList.remove("hidden"); // Show Play button
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll('.links');
  const newsItems = document.querySelectorAll('.news');

  // Function to hide the news with fade-out and translate-down animation
  function hideNews(item) {
      item.classList.remove('fade-in');
      item.classList.add('fade-out');
      setTimeout(() => {
          item.style.display = 'none'; // Set display to none after the animation finishes
      }, 500); // Matches the duration of the animation
  }

  // Function to show the news with fade-in and translate-up animation
  function showNews(item) {
      item.style.display = 'block'; // First make it visible
      // Trigger the animation in the next frame
      requestAnimationFrame(() => {
          item.classList.remove('fade-out');
          item.classList.add('fade-in');
      });
  }

  // Add click event to all filter buttons
  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          const category = button.getAttribute('data-category');

          // Remove active class from all buttons and add to the clicked one
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          // Filter news items based on the category
          newsItems.forEach(item => {
              if (category === 'all' || item.getAttribute('data-category') === category) {
                  showNews(item);
              } else {
                  hideNews(item);
              }
          });
      });
  });

  // Default behavior: Show all news items
  filterButtons[0].click(); // This triggers the "All" button by default
});

