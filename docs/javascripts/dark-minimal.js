/* Dark Minimal interactive shell:
 *  - Injects the persistent sidebar onto Markdown subpages (projects, tutorials)
 *  - Tracks scroll state and active home-page sections
 *  - Drives the skills accordion and ambient character-matrix canvas
 */
(function () {
  function initDarkMinimal() {
    ensureSubpageNavbar();
    initNavbar();
    initSkillsAccordion();
    initLetterGlitch();
  }

  // --- Subpage sidebar injection ---
  // NOTE: Home pages embed #dm-main-nav directly in their HTML wrapper, whereas
  // standalone Markdown subpages (including Git-submodule tutorials) render
  // through the standard Zensical template and receive the sidebar at runtime.
  function ensureSubpageNavbar() {
    if (document.getElementById("dm-main-nav")) return;
    document.body.classList.add("dm-subpage");

    const path = window.location.pathname || "/";
    const isPl = path.indexOf("/pl/") === 0 || path === "/pl";
    const isProjects = path.indexOf("/projekty") !== -1 || path.indexOf("/projects") !== -1;
    const isTutorial = path.indexOf("/boost-python") !== -1;

    const homeHref = isPl ? "/pl/" : "/";
    const projectsHref = isPl ? "/pl/projekty/" : "/projects/";
    const tutorialHref = isPl ? "/pl/boost-python/" : "/boost-python/";
    const contactHref = isPl ? "/pl/#contact" : "/#contact";

    const enHref = isProjects
      ? "/projects/"
      : isTutorial
        ? "/boost-python/"
        : "/";
    const plHref = isProjects
      ? "/pl/projekty/"
      : isTutorial
        ? "/pl/boost-python/"
        : "/pl/";

    const wrap = document.createElement("div");
    wrap.className = "dm-nav-wrap";
    wrap.innerHTML =
      '<nav id="dm-main-nav" aria-label="' + (isPl ? "Nawigacja główna" : "Main navigation") + '">' +
      '<div class="dm-nav-inner">' +
      '<div class="dm-nav-brand">' +
      '<a class="dm-brand-link" href="' + homeHref + '">Przemysław Stawczyk</a>' +
      '<span class="dm-brand-sub">C++ / Python Engineer</span>' +
      "</div>" +
      '<ul class="dm-nav-list">' +
      '<li><a class="dm-nav-link" href="' + homeHref + '"><span class="dm-nav-indicator"></span><span>' + (isPl ? "Start" : "Home") + "</span></a></li>" +
      '<li><a class="dm-nav-link' + (isProjects ? " active" : "") + '" href="' + projectsHref + '"><span class="dm-nav-indicator"></span><span>' + (isPl ? "Projekty" : "Projects") + "</span></a></li>" +
      '<li><a class="dm-nav-link' + (isTutorial ? " active" : "") + '" href="' + tutorialHref + '"><span class="dm-nav-indicator"></span><span>Boost.Python</span></a></li>' +
      '<li><a class="dm-nav-link" href="' + contactHref + '"><span class="dm-nav-indicator"></span><span>' + (isPl ? "Kontakt" : "Contact") + "</span></a></li>" +
      '<li class="dm-lang-item">' +
      '<div class="dm-lang-switch" role="group" aria-label="Language selector">' +
      '<a class="dm-lang-opt' + (!isPl ? " is-active" : "") + '" href="' + enHref + '"' + (!isPl ? ' aria-current="true"' : "") + ">EN</a>" +
      '<a class="dm-lang-opt' + (isPl ? " is-active" : "") + '" href="' + plHref + '"' + (isPl ? ' aria-current="true"' : "") + ">PL</a>" +
      "</div>" +
      "</li>" +
      "</ul>" +
      "</div>" +
      "</nav>";

    document.body.insertBefore(wrap, document.body.firstChild);
  }

  // --- Navigation scroll & active-section tracking ---
  function initNavbar() {
    const nav = document.getElementById("dm-main-nav");
    if (!nav || nav.dataset.dmInit === "true") return;
    nav.dataset.dmInit = "true";

    let rafId = null;

    function updateNav() {
      nav.style.removeProperty("width");
      if (window.scrollY > 0) {
        nav.classList.add("scrolling");
      } else {
        nav.classList.remove("scrolling");
      }
      rafId = null;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!rafId) {
          rafId = requestAnimationFrame(updateNav);
        }
      },
      { passive: true }
    );
    window.addEventListener("resize", updateNav);
    updateNav();

    document.querySelectorAll('.dm-page a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        const href = anchor.getAttribute("href");
        if (!href || href.length < 2) return;
        const targetElement = document.getElementById(href.substring(1));
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const sections = document.querySelectorAll(".dm-page section[id]");
    const navLinks = document.querySelectorAll('#dm-main-nav a[href^="#"]');
    if (sections.length && navLinks.length && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              navLinks.forEach(function (link) {
                link.classList.remove("active");
              });
              const id = entry.target.getAttribute("id");
              const activeLink = document.querySelector(
                '#dm-main-nav a[href="#' + id + '"]'
              );
              if (activeLink) {
                activeLink.classList.add("active");
              }
            }
          });
        },
        { threshold: 0.35 }
      );
      sections.forEach(function (section) {
        observer.observe(section);
      });
    }
  }

  // --- Skills accordion ---
  function initSkillsAccordion() {
    const items = document.querySelectorAll("[data-skill-item]");
    items.forEach(function (item) {
      if (item.dataset.dmBound === "true") return;
      item.dataset.dmBound = "true";
      const header = item.querySelector("[data-skill-toggle]");
      if (!header) return;
      header.addEventListener("click", function () {
        const isOpen = item.classList.contains("is-open");
        items.forEach(function (other) {
          other.classList.remove("is-open");
        });
        if (!isOpen) {
          item.classList.add("is-open");
        }
      });
    });
  }

  // --- Ambient letter-glitch canvas ---
  function initLetterGlitch() {
    const canvas = document.querySelector("[data-letter-glitch]");
    if (!canvas || canvas.dataset.dmBound === "true") return;
    canvas.dataset.dmBound = "true";

    const glitchColors = ["#14532d", "#22c55e", "#4ade80", "#1f1f1f"];
    const glitchSpeed = 33;
    const fontSize = 16;
    const charWidth = 10;
    const charHeight = 20;
    const lettersAndSymbols = [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
      "!", "@", "#", "$", "&", "*", "(", ")", "-", "_", "+", "=", "/",
      "[", "]", "{", "}", ";", ":", "<", ">", ",", "0", "1", "2", "3",
      "4", "5", "6", "7", "8", "9"
    ];

    let letters = [];
    let grid = { columns: 0, rows: 0 };
    let lastGlitchTime = Date.now();
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function getRandomChar() {
      return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
    }

    function getRandomColor() {
      return glitchColors[Math.floor(Math.random() * glitchColors.length)];
    }

    function hexToRgb(hex) {
      if (hex.startsWith("rgb")) {
        const m = hex.match(/\d+/g);
        return m ? { r: Number(m[0]), g: Number(m[1]), b: Number(m[2]) } : null;
      }
      const clean = hex.replace("#", "");
      if (clean.length !== 6) return null;
      return {
        r: parseInt(clean.slice(0, 2), 16),
        g: parseInt(clean.slice(2, 4), 16),
        b: parseInt(clean.slice(4, 6), 16),
      };
    }

    function interpolateColor(start, end, factor) {
      const r = Math.round(start.r + (end.r - start.r) * factor);
      const g = Math.round(start.g + (end.g - start.g) * factor);
      const b = Math.round(start.b + (end.b - start.b) * factor);
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }

    function initializeLetters(columns, rows) {
      grid = { columns: columns, rows: rows };
      const total = columns * rows;
      letters = Array.from({ length: total }, function () {
        const c = getRandomColor();
        return {
          char: getRandomChar(),
          color: c,
          targetColor: getRandomColor(),
          colorProgress: 1,
        };
      });
    }

    function drawLetters() {
      const parent = canvas.parentElement;
      if (!parent || !letters.length) return;
      const rect = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.font = fontSize + "px monospace";
      ctx.textBaseline = "top";

      for (let i = 0; i < letters.length; i++) {
        const x = (i % grid.columns) * charWidth;
        const y = Math.floor(i / grid.columns) * charHeight;
        ctx.fillStyle = letters[i].color;
        ctx.fillText(letters[i].char, x, y);
      }
    }

    // NOTE: Scale backing store by devicePixelRatio so glyph edges stay crisp on HiDPI screens.
    function resizeCanvas() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      const width = Math.max(240, rect.width);
      const height = Math.max(240, rect.height);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columns = Math.ceil(width / charWidth);
      const rows = Math.ceil(height / charHeight);
      initializeLetters(columns, rows);
      drawLetters();
    }

    function updateLetters() {
      if (!letters.length) return;
      const updateCount = Math.max(1, Math.floor(letters.length * 0.05));
      for (let i = 0; i < updateCount; i++) {
        const idx = Math.floor(Math.random() * letters.length);
        if (!letters[idx]) continue;
        letters[idx].char = getRandomChar();
        letters[idx].targetColor = getRandomColor();
        letters[idx].colorProgress = 0;
      }
    }

    function handleSmoothTransitions() {
      let needsRedraw = false;
      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if (letter.colorProgress < 1) {
          letter.colorProgress = Math.min(1, letter.colorProgress + 0.05);
          const startRgb = hexToRgb(letter.color);
          const endRgb = hexToRgb(letter.targetColor);
          if (startRgb && endRgb) {
            letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
            needsRedraw = true;
          }
        }
      }
      if (needsRedraw) {
        drawLetters();
      }
    }

    function animate() {
      const now = Date.now();
      if (now - lastGlitchTime >= glitchSpeed) {
        updateLetters();
        drawLetters();
        lastGlitchTime = now;
      }
      handleSmoothTransitions();
      requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();
    window.addEventListener("resize", resizeCanvas);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDarkMinimal);
  } else {
    initDarkMinimal();
  }
})();
