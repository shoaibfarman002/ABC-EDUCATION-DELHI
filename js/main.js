/* ════════════════════════════════════════════
   ABC INSTITUTE — SHARED JAVASCRIPT
   js/main.js  (runs on every page)
════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  /* ── NAVBAR SCROLL EFFECT ── */
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 60);
    });
  }

  /* ── MOBILE HAMBURGER MENU ── */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("open");
    });
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => mobileMenu.classList.remove("open"));
    });
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove("open");
      }
    });
  }

  /* ── ACTIVE NAV HIGHLIGHT ── */
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  /* ── SCROLL REVEAL ── */
  const revObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => revObs.observe(el));

  /* ── SMOOTH ANCHOR SCROLL (for same-page #links) ── */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
