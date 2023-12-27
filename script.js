document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".animated-image");

  function handleScroll() {
    images.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (imageTop < windowHeight) {
        image.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
