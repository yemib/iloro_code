import React, { useState, useEffect, useRef } from "react";

export default function FolderGalleryWithLightbox() {
  const [allImages, setAllImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const loadIndex = useRef(0);
  const IMAGES_PER_LOAD = 30;

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const imageRefs = useRef([]);

  // ==================================================
  // AUTO LOAD IMAGES FROM FOLDER
  // ==================================================
  const importAll = (r) =>
    r.keys().map((key) => ({
      src: r(key),
      label: key.replace("./", "").replace(/\.(png|jpe?g|svg|webp)$/i, ""),
    }));

  useEffect(() => {
    const images = importAll(
      require.context("/public/gallery", false, /\.(png|jpe?g|svg|webp)$/)
    );

    setAllImages(images);
    setVisibleImages(images.slice(0, IMAGES_PER_LOAD));
    loadIndex.current = IMAGES_PER_LOAD;
  }, []);

  // ==================================================
  // INFINITE SCROLL
  // ==================================================
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const loadMoreImages = () => {
    if (loadIndex.current >= allImages.length) return;

    const nextImages = allImages.slice(
      loadIndex.current,
      loadIndex.current + IMAGES_PER_LOAD
    );

    setVisibleImages((prev) => [...prev, ...nextImages]);
    loadIndex.current += IMAGES_PER_LOAD;
  };

  // ==================================================
  // LIGHTBOX FUNCTIONS
  // ==================================================
  const openViewer = (index) => {
    setActiveIndex(index);
    setZoom(1);
  };

  const closeViewer = () => setActiveIndex(null);

  const nextImage = () => {
    setZoom(1);
    setActiveIndex((i) => (i + 1) % allImages.length);
  };

  const prevImage = () => {
    setZoom(1);
    setActiveIndex((i) => (i - 1 + allImages.length) % allImages.length);
  };

  const zoomIn = () => setZoom((z) => Math.min(z + 0.2, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.2, 1));

  // ==================================================
  // CLICK OUTSIDE TO CLOSE
  // ==================================================
  const handleOutsideClick = (e) => {
    if (e.target.id === "lightbox-bg") closeViewer();
  };

  // ==================================================
  // KEYBOARD NAVIGATION
  // ==================================================
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeViewer();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  // ==================================================
  // MOBILE SWIPE
  // ==================================================
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) nextImage();
    else if (diff < -50) prevImage();

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // ==================================================
  // LAZY LOADING WITH ANIMATION
  // ==================================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const highResSrc = img.dataset.src;

            const loader = new Image();
            loader.src = highResSrc;

            loader.onload = () => {
              img.src = highResSrc;
              img.classList.remove("loading");
            };

            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((img) => img && observer.observe(img));

    return () => observer.disconnect();
  }, [visibleImages]);

  return (
    <section style={{ marginTop: "100px" }}>
      <h2 style={styles.title}>Our Gallery</h2>

      <div style={styles.gallery}>
        {visibleImages.map((img, index) => (
          <div key={index} style={styles.card} onClick={() => openViewer(index)}>
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              data-src={img.src}
              src={img.src}
              alt={img.label}
              className="loading"
              style={styles.image}
            />

            <div style={styles.label}>{img.label}</div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          id="lightbox-bg"
          style={styles.viewer}
          onClick={handleOutsideClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div style={{...styles.viewerContent, zIndex:3000}}>
            <img
              src={visibleImages[activeIndex].src}
              alt=""
              style={{
                ...styles.viewerImage,
                transform: `scale(${zoom})`,
              }}
            />

            <button style={{...styles.closeBtn , color:"red"}} onClick={closeViewer}>✕</button>

            <div style={styles.controls}>
              <button style={styles.ctrlBtn} onClick={zoomOut}>−</button>
              <button style={styles.ctrlBtn} onClick={zoomIn}>＋</button>
              <button style={styles.ctrlBtn} onClick={prevImage}>←</button>
              <button style={styles.ctrlBtn} onClick={nextImage}>→</button>
            </div>
          </div>
        </div>
      )}

      {/* LOADING EFFECT */}
      <style>{`
        .loading {
          filter: blur(20px);
          background: #f0f0f0;
          animation: pulse 1.3s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }

        @media (max-width: 768px) {
          .gallery {
            column-count: 2 !important;
          }
        }

        @media (max-width: 480px) {
          .gallery {
            column-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

// ===================== STYLES =====================
const styles = {
  title: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
  },

  gallery: {
    columnCount: 3,
    columnGap: "20px",
  },

  card: {
    marginBottom: "20px",
    position: "relative",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
    breakInside: "avoid",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    transition: "transform .25s",
  },

  image: {
    width: "100%",
    display: "block",
    borderRadius: "10px",
  },

  label: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    padding: "10px 12px",
    background: "rgba(0,0,0,0.55)",
    color: "white",
    fontSize: "14px",
    textTransform: "capitalize",
  },

  viewer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },

  viewerContent: {
    position: "relative",
    maxWidth: "90%",
    maxHeight: "90%",
  },

  viewerImage: {
    maxWidth: "100%",
    maxHeight: "90vh",
    transition: "transform .3s",
    borderRadius: "12px",
  },

  closeBtn: {
    position: "absolute",
    top: "-55px",
    right: "0",
    background: "white",
    padding: "10px 12px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
  },

  controls: {
    position: "absolute",
    bottom: "-70px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "12px",
  },

  ctrlBtn: {
    padding: "10px 15px",
    background: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "20px",
    cursor: "pointer",
  },
};
