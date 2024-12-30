// JavaScript for interactivity

// Handle "Watch my video" button click
document.querySelector(".video-btn").addEventListener("click", () => {
  alert("This feature is under construction. Stay tuned!");
});

// Scroll to contact section
const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", () => {
  alert("send email to behnam.sep@gmail.com");
});

// Toggle favorite list items
const favoriteItems = document.querySelectorAll(".other-favorites ul li");
// Add event listeners to each list item
favoriteItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const key = item.textContent.trim(); // Get the text of the hovered item
    if (favoriteData[key]) {
      favoriteImage.src = favoriteData[key].src;
      favoriteCaption.textContent = favoriteData[key].caption;
    }
  });
});
const favoriteImage = document.querySelector(".favorite-item img");
const favoriteCaption = document.querySelector(".favorite-item figcaption");

// Map of items to their corresponding images and captions
const favoriteData = {
  Cats: {
    src: "./assets/images/cat.jpg",
    caption: "Cats are my favorites! They are cute and adorable.",
  },
  "Video Games": {
    src: "./assets/images/video-game.jpg",
    caption: "Gaming is my way of unwinding and exploring new worlds.",
  },
  Movies: {
    src: "./assets/images/movies.jpg",
    caption: "Movies inspire me with their stories and visuals.",
  },
  Books: {
    src: "./assets/images/books.jpg",
    caption: "Books open up endless possibilities and knowledge.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamburger.classList.toggle("open");
  });
});
// Get form and success message elements
const contactForm = document.getElementById("contact");
const successMessage = document.getElementById("successMessage");

// Handle form submission
contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from refreshing the page
  console.log("Form submitted!");

  // Show the success message
  successMessage.style.display = "block";

  // Hide the success message after 5 seconds (optional)
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 5000);
});

// Get the Scroll to Top button
const scrollToTopButton = document.getElementById("scrollToTop");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
});
