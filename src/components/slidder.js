import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/**
 * HeroSlider.js
 *
 * - Picks the first 10 images from /public/gallery
 * - Uses filename to generate text
 * - Keeps all functionalities and animations
 */

export default function HeroSlider() {
  // ---------------------------
  // IMPORT ALL IMAGES
  // ---------------------------
  const importAll = (r) => r.keys().map(r);
  let allImportedImages = [];
  try {
    allImportedImages = importAll(
      require.context("/public/gallery", false, /\.(png|jpe?g|webp|svg)$/)
    );
  } catch (err) {
    console.error("Failed to import gallery images:", err);
    allImportedImages = [];
  }

  // ---------------------------
  // PICK FIRST 10 IMAGES
  // ---------------------------
  const selectedImages = allImportedImages.slice(0, 25);

  // ---------------------------
  // Convert filename to readable text
  // ---------------------------
  const getReadableName = (path) => {
    try {
      const file = path.split("/").pop().split(".")[0]; // remove folders + extension
      const clean = file.replace(/[-_]/g, " ");
      return clean.charAt(0).toUpperCase() + clean.slice(1);
    } catch {
      return "Iloro Ekiti";
    }
  };

  // ---------------------------
  // BUILD SLIDES FROM FILENAMES
  // ---------------------------
  const slides = selectedImages.map((img) => {
    const readable = getReadableName(img);

    return {
      title: readable,
      subtitle: `${readable} in Iloro-Ekiti`,
      image: img,
    };
  });

  // ---------------------------
  // SLIDER STATE + REFS
  // ---------------------------
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const slideRef = useRef(null);

  const next = () => {
    if (!slides.length) return;
    setIndex((i) => (i + 1) % slides.length);
  };
  const prev = () =>
    setIndex((i) => (slides.length ? (i === 0 ? slides.length - 1 : i - 1) : 0));

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => next(), 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Touch handlers
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    setTouchStart(null);
  };

  // Zoom toggle
  const toggleZoom = (e) => {
    const img = e.currentTarget;
    const isZoomed = img.dataset.zoomed === "true";
    if (!isZoomed) {
      img.style.transform = "scale(1.05)";
      img.dataset.zoomed = "true";
    } else {
      img.style.transform = "";
      img.dataset.zoomed = "false";
    }
  };

  const handleImageLoad = (i) => {
    setLoadedImages((prev) => ({ ...prev, [i]: true }));
  };

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, [slides]);

  if (!slides.length) {
    return (
      <div style={{ padding: 40, textAlign: "center", color: "#444" }}>
        <h3>No gallery images found</h3>
        <p>
          Put some images into <code>public/gallery/</code> (jpg, png, webp, svg) and refresh.
        </p>
      </div>
    );
  }

  return (
    <div
      style={styles.wrapper}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={i === index ? slideRef : null}
          style={{
            ...styles.slide,
            opacity: i === index ? 1 : 0,
            transform:
              i === index ? "scale(1) translateZ(0)" : "scale(1.06) translateZ(-50px)",
            zIndex: i === index ? 3 : 1,
          }}
        >
          {/* Blurred placeholder */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${slide.image})`,
              filter: "blur(20px)",
              transform: "scale(1.05)",
              opacity: loadedImages[i] ? 0 : 1,
              transition: "opacity 0.6s ease-in-out",
              zIndex: 0,
            }}
          ></div>

          {/* Parallax lights */}
          <div style={styles.glow1}></div>
          <div style={styles.glow2}></div>

          {/* Dark gradient overlay */}
          <div style={styles.overlay}></div>

          {/* Text */}
          <div style={styles.textBox}>
            <h1 style={{ ...styles.title, color: "white" }}>{slide.title}</h1>
            <p style={styles.subtitle}>{slide.subtitle}</p>
            <Link style={styles.btn} to="/gallery">
              View Gallery
            </Link>
          </div>

          {/* Full-size image */}
          <img
            alt={slide.title}
            src={slide.image}
            onClick={toggleZoom}
            onLoad={() => handleImageLoad(i)}
            data-zoomed="false"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: loadedImages[i] ? 1 : 0,
              transition: "opacity 0.6s ease-in-out",
              cursor: "zoom-in",
            }}
            loading="lazy"
          />
        </div>
      ))}

      {/* Arrows */}
      <div style={styles.arrowLeft} onClick={prev} aria-hidden>
        ‹
      </div>
      <div style={styles.arrowRight} onClick={next} aria-hidden>
        ›
      </div>

      {/* Dots */}
      <div style={styles.dots}>
        {slides.map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.dot,
              background: i === index ? "#fff" : "rgba(255,255,255,0.35)",
              transform: i === index ? "scale(1.3)" : "scale(1)",
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- styles (unchanged) ---------- */
const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "92vh",
    overflow: "hidden",
    perspective: "1800px",
  },
  slide: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "opacity 1.2s ease, transform 2.4s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.65))",
    zIndex: 1,
  },
  glow1: {
    position: "absolute",
    top: "-80px",
    left: "-80px",
    width: "320px",
    height: "320px",
    background: "rgba(255,200,60,0.4)",
    filter: "blur(120px)",
    animation: "moveGlow 12s infinite ease-in-out",
    zIndex: 0,
  },
  glow2: {
    position: "absolute",
    bottom: "-80px",
    right: "-80px",
    width: "340px",
    height: "340px",
    background: "rgba(0,150,255,0.4)",
    filter: "blur(140px)",
    animation: "moveGlow 16s infinite ease-in-out",
    zIndex: 0,
  },
  textBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    textAlign: "center",
    color: "#fff",
    width: "85%",
    maxWidth: "760px",
    animation: "fadeIn 1.2s ease",
  },
  title: {
    fontSize: "64px",
    fontWeight: "900",
    textShadow: "0 15px 40px rgba(236, 221, 221, 0.6)",
  },
  subtitle: {
    fontSize: "22px",
    marginTop: "12px",
    marginBottom: "26px",
    opacity: 0.92,
    lineHeight: 1.6,
  },
  btn: {
    padding: "14px 48px",
    border: "none",
    borderRadius: "14px",
    background: "linear-gradient(90deg,#ffd166,#f59e0b)",
    fontSize: "18px",
    fontWeight: 800,
    color: "#111",
    cursor: "pointer",
    boxShadow: "0px 14px 40px rgba(245,158,11,0.35)",
  },
  arrowLeft: {
    position: "absolute",
    top: "50%",
    left: "26px",
    fontSize: "52px",
    color: "#fff",
    cursor: "pointer",
    zIndex: 5,
    textShadow: "0 8px 24px rgba(0,0,0,0.5)",
  },
  arrowRight: {
    position: "absolute",
    top: "50%",
    right: "26px",
    fontSize: "52px",
    color: "#fff",
    cursor: "pointer",
    zIndex: 5,
    textShadow: "0 8px 24px rgba(0,0,0,0.5)",
  },
  dots: {
    position: "absolute",
    bottom: "32px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    zIndex: 5,
  },
  dot: {
    width: "13px",
    height: "13px",
    borderRadius: "50%",
    transition: "0.35s",
    cursor: "pointer",
  },
};
