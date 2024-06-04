
  const elements = document.querySelectorAll(".rolagem");
  
  elements.forEach((element) => myObserver.observe(element));
  
  //rolagem
  const menuItems = document.querySelectorAll(".nav-menu a");
  
  menuItems.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
  
  function scrollToSection(event) {
    event.preventDefault();
  
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
  
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  
  //Carrossel
  let currentIndex = 0;
  let intervalId;
  
  function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
  
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
  
    const offset = -currentIndex * 100;
    document.querySelector(
      ".carousel"
    ).style.transform = `translateX(${offset}%)`;
  }
  
  function nextSlide() {
    showSlide(currentIndex + 1);
  }
  
  function prevSlide() {
    showSlide(currentIndex - 1);
  }
  
  function startCarousel() {
    intervalId = setInterval(nextSlide, 5000);
  }
  
  startCarousel();
  
  document.querySelector(".prev").addEventListener("click", () => {
    clearInterval(intervalId);
    startCarousel();
  });
  
  document.querySelector(".next").addEventListener("click", () => {
    clearInterval(intervalId);
    startCarousel();
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const boatoenviar = document.getElementById("boatoenviar");
  
    boatoenviar.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Mensagem enviada com sucesso!");
    });
  });