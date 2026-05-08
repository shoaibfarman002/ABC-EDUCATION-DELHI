/* ════════════════════════════════════════════
   HOME PAGE JAVASCRIPT — js/home.js
════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  /* ── HERO PHOTO SLIDESHOW (background) ── */
  const photos = [
    "hero_1.jpg",
    "hero_2.jpg",
    "hero_3.jpg",
    "hero_4.jpg",
    "hero_5.jpg",
  ];
  const ss = document.getElementById("heroSlideshow");
  if (ss) {
    photos.forEach((p, i) => {
      const d = document.createElement("div");
      d.className = "hero-slide" + (i === 0 ? " active" : "");
      d.style.backgroundImage = `url(images/${p})`;
      ss.appendChild(d);
    });
    let cur = 0;
    setInterval(() => {
      const all = ss.querySelectorAll(".hero-slide");
      all[cur].classList.remove("active");
      cur = (cur + 1) % all.length;
      all[cur].classList.add("active");
    }, 3500);
  }

  /* ── HERO RIGHT: PHOTO SCROLL PANEL (duplicate for seamless loop) ── */
  const hpsTrack = document.getElementById("hpsTrack");
  if (hpsTrack) {
    [...hpsTrack.children].forEach((c) =>
      hpsTrack.appendChild(c.cloneNode(true)),
    );
  }

  /* ── CAMPUS SCROLLER — duplicate both rows for seamless loop ── */
  ["csTrack1", "csTrack2"].forEach((id) => {
    const t = document.getElementById(id);
    if (t) {
      [...t.children].forEach((ch) => t.appendChild(ch.cloneNode(true)));
    }
  });

  /* ── 3D ROTATING CUBE PARTICLES ── */
  const particleWrap = document.getElementById("cubeParticles");
  if (particleWrap) {
    for (let i = 0; i < 22; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.setProperty("--d", 3 + Math.random() * 5 + "s");
      p.style.setProperty("--x", Math.random() * 100 + "%");
      p.style.setProperty("--y", Math.random() * 100 + "%");
      p.style.setProperty("--dl", Math.random() * 5 + "s");
      particleWrap.appendChild(p);
    }
  }

  /* ── 3D SCENE CARD + CUBE FACE CAROUSEL ── */
  const sceneCards = [
    {
      emoji: "🎓",
      title: "ABC INSTITUTE",
      text: "19 Years of shaping brilliant minds in Jamia Nagar, New Delhi",
    },
    {
      emoji: "📚",
      title: "REGULAR CLASSES",
      text: "Class 6th to 12th — All Subjects, All Streams covered",
    },
    {
      emoji: "🏆",
      title: "ENTRANCE COACHING",
      text: "JEE • NEET • CUET • JMI • AMU • DU • IPU & more",
    },
    {
      emoji: "✅",
      title: "100% SUCCESS RATE",
      text: "Consistent admissions in top colleges year after year",
    },
    {
      emoji: "🆓",
      title: "FREE MOCK TEST",
      text: "10,000+ Questions with Solutions — Weekly Test Series",
    },
  ];
  const cubeEmojiEl = document.getElementById("cubeEmoji");
  const cubeTitleEl = document.getElementById("cubeTitle");
  const cubeTextEl = document.getElementById("cubeText");
  const cubeWrapEl = document.getElementById("cubeWrap");
  if (cubeTitleEl && cubeTextEl) {
    let ci = 0;
    setInterval(() => {
      if (cubeWrapEl) {
        cubeWrapEl.style.opacity = "0";
        cubeWrapEl.style.transform = "scale(.88)";
        cubeWrapEl.style.transition = "all .35s";
      }
      setTimeout(() => {
        ci = (ci + 1) % sceneCards.length;
        if (cubeEmojiEl) cubeEmojiEl.textContent = sceneCards[ci].emoji;
        cubeTitleEl.textContent = sceneCards[ci].title;
        cubeTextEl.textContent = sceneCards[ci].text;
        if (cubeWrapEl) {
          cubeWrapEl.style.opacity = "1";
          cubeWrapEl.style.transform = "scale(1)";
        }
      }, 370);
    }, 3200);
  }

  /* ── ABOUT IMAGE CLICK SWAP ── */
  const mainImg = document.getElementById("aboutMainImg");
  document.querySelectorAll(".about-img-row img").forEach((img) => {
    img.addEventListener("click", () => {
      if (mainImg) {
        const tmp = mainImg.src;
        mainImg.src = img.src;
        img.src = tmp;
      }
    });
  });
});
