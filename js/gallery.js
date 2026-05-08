/* ════════════════════════════════════════════
   GALLERY PAGE JAVASCRIPT
   js/gallery.js
════════════════════════════════════════════ */

var photos = [
  { src: "images/hero_1.jpg", cap: "ABC Institute — Main Office" },
  { src: "images/hero_2.jpg", cap: "Counseling Room" },
  { src: "images/hero_3.jpg", cap: "Reception Area" },
  { src: "images/hero_4.jpg", cap: "Classroom" },
  { src: "images/hero_5.jpg", cap: "Study Area" },
];
var curLb = 0;

/* ── LIGHTBOX FUNCTIONS ── */
function openLightbox(idx) {
  curLb = idx;
  document.getElementById("lbImg").src = photos[idx].src;
  document.getElementById("lbCaption").textContent = photos[idx].cap;
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function nextPhoto() {
  curLb = (curLb + 1) % photos.length;
  openLightbox(curLb);
}

function prevPhoto() {
  curLb = (curLb - 1 + photos.length) % photos.length;
  openLightbox(curLb);
}

document.addEventListener("DOMContentLoaded", function () {
  /* ── Wire up gallery images via data-idx ── */
  document.querySelectorAll("[data-idx]").forEach(function (el) {
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
      openLightbox(parseInt(el.getAttribute("data-idx")));
    });
  });

  /* ── Lightbox overlay click to close ── */
  var lb = document.getElementById("lightboxOverlay");
  if (lb) {
    lb.addEventListener("click", function (e) {
      if (e.target === lb) closeLightbox();
    });
  }

  /* ── Lightbox close button ── */
  var lbClose = document.getElementById("lbCloseBtn");
  if (lbClose) lbClose.addEventListener("click", closeLightbox);

  /* ── Lightbox prev/next ── */
  var lbPrev = document.getElementById("lbPrevBtn");
  var lbNext = document.getElementById("lbNextBtn");
  if (lbPrev) lbPrev.addEventListener("click", prevPhoto);
  if (lbNext) lbNext.addEventListener("click", nextPhoto);

  /* ── Keyboard navigation ── */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextPhoto();
    if (e.key === "ArrowLeft") prevPhoto();
  });

  /* ── Duplicate scroll tracks for infinite loop ── */
  ["track1", "track2"].forEach(function (id) {
    var t = document.getElementById(id);
    if (t) {
      Array.from(t.children).forEach(function (child) {
        t.appendChild(child.cloneNode(true));
      });
    }
  });
});
