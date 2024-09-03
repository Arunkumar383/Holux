const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__content .about__grid", {
  ...scrollRevealOption,
  delay: 2000,
});

// contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("sendWhatsApp").addEventListener("click", function() {
      // Get the values from the form fields
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;

      // Create the WhatsApp message
      const whatsappMessage = `Name: ${firstName} ${lastName}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

      // Set the WhatsApp link with your number
      const whatsappLink = `https://wa.me/916382184993?text=${whatsappMessage}`;

      // Redirect to WhatsApp with the prefilled message
      window.open(whatsappLink, "_blank");

      // Optionally, clear the form after submission
      document.getElementById("contactForm").reset();
  });
});

