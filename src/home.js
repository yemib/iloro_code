import React, { useEffect, useState } from "react";
import HeroSlider from "./components/slidder";
import IloroMap from "./components/iloromap";
import { Link } from "react-router-dom";

/**
 * Home.jsx
 * Fully responsive Home page with:
 * - HeroSlider
 * - Responsive About Iloro-Ekiti section
 * - Iloro map
 * - Features section
 * - CTA section
 */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    document.body.style.background = "#f3f7fb";
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.body.style.opacity = 1;

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <HeroSlider />

      {/* ABOUT */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.aboutLeft} className="fadeInUp delay-100">
            <h2 style={styles.sectionTitle}>About Iloro-Ekiti</h2>
            <p style={styles.sectionText}>
              Nestled among the rolling hills of Ekiti State, Iloro-Ekiti is a
              peaceful town known for its vibrant festivals, scenic trails and
              warm hospitality. A place to reconnect with culture, nature and
              relaxed living.
            </p>
            <div style={{ marginTop: 18 }}>
              <Link style={styles.ghostOutline} to="/iloro-history">
                Learn More
              </Link>
            </div>
          </div>

          <div style={styles.aboutRight} className="fadeInUp delay-200" aria-hidden="true">
            <div style={styles.previewCard}>
              <img
                src="/gallery/King's Palace.jpg"
                alt="Iloro landscape"
                style={styles.previewImg}
              />
              <div style={styles.previewBadge}>Festivals & Culture</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <IloroMap />
      </section>

      {/* FEATURES */}
      <section style={styles.featuresSection}>
        <h2 style={styles.featuresHeading}>Highlights</h2>
        <p style={styles.featuresSub}>
          Handpicked experiences that show Iloro at its best — celebrations, nature and
          community life.
        </p>

        <div style={styles.featuresGrid}>
          <article style={{ ...styles.featureCard }} className="fadeInUp delay-100" tabIndex={0}>
            <div style={styles.featureIcon}>🎭</div>
            <h3 style={styles.featureTitle}>Vibrant Festivals</h3>
            <p style={styles.featureText}>
              Colourful ceremonies, drumming, dance and food that bring everyone together.
            </p>
          </article>

          <article style={{ ...styles.featureCard }} className="fadeInUp delay-200" tabIndex={0}>
            <div style={styles.featureIcon}>🌿</div>
            <h3 style={styles.featureTitle}>Nature Trails</h3>
            <p style={styles.featureText}>
              Gentle hikes and lookout points with peaceful picnic spots.
            </p>
          </article>

          <article style={{ ...styles.featureCard }} className="fadeInUp delay-300" tabIndex={0}>
            <div style={styles.featureIcon}>🤝</div>
            <h3 style={styles.featureTitle}>Warm Community</h3>
            <p style={styles.featureText}>
              Friendly locals who welcome visitors with open arms and stories to share.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaInner}>
          <div>
            <h3 style={styles.ctaTitle}>Plan your visit</h3>
            <p style={styles.ctaDesc}>Guided tours, local stays and unforgettable experiences await.</p>
          </div>

          <div style={styles.ctaButtons}>
            {/* Uncomment buttons if needed */}
            {/* <button style={styles.ctaPrimary} onClick={() => alert("Book guide")}>Book a Guide</button>
            <button style={styles.ctaSecondary} onClick={() => alert("Contact us")}>Contact Us</button> */}
          </div>
        </div>
      </section>
    </>
  );
}

/* ======================
   Style object
   ====================== */
const styles = {
  container: {
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#08324A",
    lineHeight: 1.5,
    overflowX: "hidden",
  },

  /* ABOUT */
  section: {
    padding: "80px 28px",
    background: "#fff",
  },
  sectionInner: {
    display: "flex",
    flexWrap: "wrap", // stack on smaller screens
    gap: 36,
    alignItems: "center",
    maxWidth: 1180,
    margin: "0 auto",
    justifyContent: "space-between",
  },
  aboutLeft: {
    flex: "1 1 300px",
    minWidth: 280,
  },
  aboutRight: {
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "center",
    minWidth: 280,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 900,
    color: "#0A3D62",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: "#264653",
    lineHeight: 1.7,
    maxWidth: 640,
  },
  previewCard: {
    width: "100%",
    maxWidth: 420,
    borderRadius: 14,
    overflow: "hidden",
    boxShadow: "0 18px 60px rgba(6,18,28,0.08)",
    position: "relative",
  },
  previewImg: {
    width: "100%",
    display: "block",
    height: 300,
    objectFit: "cover",
  },
  previewBadge: {
    position: "absolute",
    left: 18,
    bottom: 18,
    background: "linear-gradient(90deg, rgba(255,255,255,0.92), rgba(255,255,255,0.8))",
    padding: "8px 12px",
    borderRadius: 10,
    fontWeight: 800,
    color: "#0A3D62",
    boxShadow: "0 8px 24px rgba(6,18,28,0.08)",
  },
  ghostOutline: {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid rgba(10,61,98,0.08)",
    background: "transparent",
    cursor: "pointer",
    fontWeight: 800,
    color: "black",
  },

  /* FEATURES */
  featuresSection: {
    padding: "56px 28px",
    background: "linear-gradient(180deg,#fbfdff,#ffffff)",
  },
  featuresHeading: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: 900,
    color: "#0A3D62",
    marginBottom: 6,
  },
  featuresSub: {
    textAlign: "center",
    marginBottom: 22,
    color: "#32545c",
    opacity: 0.9,
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
    gap: 22,
    maxWidth: 1180,
    margin: "0 auto",
    paddingTop: 8,
  },
  featureCard: {
    background: "linear-gradient(180deg,#ffffff,#f7fbff)",
    padding: 22,
    borderRadius: 16,
    boxShadow: "0 14px 36px rgba(10,61,98,0.06)",
    textAlign: "center",
    transition: "transform 260ms ease, box-shadow 260ms ease",
    cursor: "pointer",
    border: "1px solid rgba(10,61,98,0.04)",
  },
  featureIcon: {
    fontSize: 34,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 900,
    color: "#08324A",
    marginBottom: 8,
  },
  featureText: {
    color: "#32545c",
    fontSize: 14.5,
  },

  /* CTA */
  ctaSection: {
    padding: "42px 28px",
    background: "linear-gradient(90deg,#fffdf6,#eef8ff)",
    borderTop: "1px solid rgba(6,18,28,0.02)",
    borderBottom: "1px solid rgba(6,18,28,0.02)",
  },
  ctaInner: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
    padding: "6px 0",
  },
  ctaTitle: { fontSize: 22, fontWeight: 900, color: "#0A3D62" },
  ctaDesc: { color: "#2b4b56" },
  ctaButtons: { display: "flex", gap: 12, flexWrap: "wrap" },
  ctaPrimary: {
    padding: "12px 20px",
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(90deg,#0A3D62,#145A88)",
    color: "#fff",
    fontWeight: 900,
    cursor: "pointer",
  },
  ctaSecondary: {
    padding: "10px 18px",
    borderRadius: 12,
    border: "1px solid rgba(10,61,98,0.12)",
    background: "transparent",
    color: "#0A3D62",
    fontWeight: 800,
    cursor: "pointer",
  },
};

/* =========================
   Feature Card Hover Enhancements
   ========================= */
(function addFeatureCardHover() {
  if (typeof window === "undefined") return;
  requestAnimationFrame(() => {
    try {
      const style = document.createElement("style");
      style.textContent = `
        .feature-card-hover:hover, .feature-card-hover:focus {
          transform: translateY(-10px) scale(1.01);
          box-shadow: 0 28px 60px rgba(4,20,30,0.12);
        }
      `;
      document.head.appendChild(style);

      setTimeout(() => {
        const area = document.querySelectorAll("article[tabindex='0']");
        area.forEach((el) => {
          el.classList.add("feature-card-hover");
          el.setAttribute("role", "article");
        });
      }, 400);
    } catch (e) {}
  });
})();
