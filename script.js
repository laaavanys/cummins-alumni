/* ==============================
   CCEW Alumni — script.js
   - Mobile menu
   - Smooth scroll
   - Swiper (Events)
   - Hover pause / resume
   - Simple reveal animations
============================== */

// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Mobile Menu Toggle ---------- */
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  /* ---------- Smooth Scrolling for in-page links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const targetId = a.getAttribute("href");
      if (targetId.length > 1) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  /* ---------- Swiper: Upcoming Events ---------- */
  // Make sure Swiper library is loaded
const swiper = new Swiper(".event-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,   // 👈 "auto" ki jagah fixed number
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  speed: 800,
});


  /* ---------- Simple Reveal on Scroll ---------- */
  

  /* ---------- (Optional) Duplicate alumnae cards for smooth marquee ---------- */
  const track = document.querySelector(".alumnae-track");
  if (track && track.children.length) {
    // If few cards, clone to make the loop feel continuous
    const minTotalWidth = track.parentElement.offsetWidth * 2;
    let totalWidth = 0;
    const originals = Array.from(track.children);
    let i = 0;
    while (totalWidth < minTotalWidth && i < 20) {
      originals.forEach((node) => {
        const clone = node.cloneNode(true);
        track.appendChild(clone);
      });
      totalWidth = track.scrollWidth;
      i++;
    }
  }
});
