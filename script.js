const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", () => {
  alert("send email to behnam.sep@gmail.com");
});

const favoriteItems = document.querySelectorAll(".other-favorites ul li");
const favoriteImage = document.querySelector(".favorite-item img");
const favoriteCaption = document.querySelector(".favorite-item figcaption");

const favoriteData = {
  Cats: {
    src: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Cats are my favorites! They are cute and adorable.",
  },
  "Video Games": {
    src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Gaming is my way of unwinding and exploring new worlds.",
  },
  Movies: {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Movies inspire me with their stories and visuals.",
  },
  Books: {
    src: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Books open up endless possibilities and knowledge.",
  },
};

let currentIndex = 0;
const intervalTime = 5000; 

const updateFavorite = (index) => {
  favoriteItems.forEach((item) => item.classList.remove("active"));

  const currentItem = favoriteItems[index];
  currentItem.classList.add("active");

  const key = currentItem.textContent.trim();
  if (favoriteData[key]) {
    favoriteImage.src = favoriteData[key].src;
    favoriteCaption.textContent = favoriteData[key].caption;
  }
};

const startAutoCycle = () => {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % favoriteItems.length; 
    updateFavorite(currentIndex);
  }, intervalTime);
};


document.addEventListener("DOMContentLoaded", () => {
  updateFavorite(currentIndex);
  startAutoCycle(); 
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamburger.classList.toggle("open");
  });
});

const contactForm = document.getElementById("contact");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  console.log("Form submitted!");

  successMessage.style.display = "block";

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 5000);
});

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
});
