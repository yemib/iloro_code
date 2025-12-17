import React, { useState } from "react";

export default function MembersPage() {

  const [zoomImage, setZoomImage] = useState(null); // For zoom preview
  const [loadedImages, setLoadedImages] = useState({}); // For lazy load effects

  const members = [
    {
      name: "Mr. Abereifa Wole",
      role: "National President IPU ",
      image: "/ipu/IMG-20251205-WA0031.jpg",
    },
    {
      name: " Mr. Adeyiola Ibitoye",
      role: "Chairmain Ado Branch",
      image: "/ipu/IMG-20251124-WA0036.jpg",
    },
    {
      name: " Mr. Kunle Omoleye  ",
      role: "Vice Chairman 1",
      image: "/ipu/IMG-20251125-WA0048.jpg",
    },
    {
      name: "Mr. Asefenitomo Sunday ",
      role: " Vice Chairman 2",
      image: "/ipu/IMG-20251124-WA0035.jpg",
    },
    {
      name: "Mr. Oladunni Olarewaju Adekola ",
      role: "Secretary ",
      image: "/ipu/IMG-20251124-WA0007.jpg",
    },
    {
      name: "Mr. Adaralegbe Ifeoluwa ",
      role: " Treasurer ",
      image: "/ipu/IMG-20251123-WA0009.jpg",
    },
    {
      name: "Mr. Asorona Taiwo ",
      role: "IPU Ado Ekiti Zone 1 Chairman ",
      image: "/ipu/IMG-20251123-WA0008.jpg",
    },
    {
      name: "Mr. Ajewole Oluwafemi",
      role: "PRO 2",
      image: "/ipu/IMG-20251124-WA0034.jpg",
    },
    {
      name: "Hon Oluwaseun Babalola ",
      role: " IPU National PRO ",
      image: "/ipu/IMG-20251123-WA0006.jpg",
    },
    {
      name: "Mr. Akomolafe  Sunday Isaac ",
      role: "PRO IPU Ado Zone 1  ",
      image: "/ipu/IMG-20251123-WA0007.jpg",
    },
    {
      name: "Mr. Familusi Taiwo  ",
      role: "Welfare ",
      image: "/ipu/IMG-20251123-WA0031.jpg",
    },
    {
      name: "Mr. Afolabi Toke  ",
      role: "Auditor  ",
      image: "/ipu/IMG-20251205-WA0032.jpg",
    },
    {
      name: "Members",
      role: "  ",
      image: "/ipu/IMG-20251205-WA0033.jpg",
    },
  ];

  // Close zoom on outside click
  const closeZoom = (e) => {
    if (e.target.className === "zoom-overlay") {
      setZoomImage(null);
    }
  };

  return (
    <>
      {/* ------- ZOOM VIEW OVERLAY ------- */}
      {zoomImage && (
        <div
          className="zoom-overlay"
          onClick={closeZoom}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <img
            src={zoomImage}
            alt="Zoomed"
            style={{
              maxWidth: "92%",
              maxHeight: "92%",
              borderRadius: "20px",
              boxShadow: "0 0 25px rgba(255,255,255,0.4)",
              transition: "transform 0.3s ease",
              animation: "fadeInUp 0.4s ease-in-out",
            }}
          />
        </div>
      )}

      <section style={{ marginTop: "100px" }}>
        <div style={styles.page}>
          <style>
            {`
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
              }

              @keyframes glow {
                0% { box-shadow: 0 0 0 rgba(0,0,0,0.1); }
                50% { box-shadow: 0 0 25px rgba(0,0,0,0.2); }
                100% { box-shadow: 0 0 0 rgba(0,0,0,0.1); }
              }

              .lazy-img {
                filter: blur(8px);
                opacity: 0;
                transition: opacity 0.6s ease, filter 0.6s ease;
              }

              .lazy-img.loaded {
                filter: blur(0px);
                opacity: 1;
              }

              @media (max-width: 768px) {
                .member-card {
                  width: 90% !important;
                }

                .title {
                  font-size: 34px !important;
                }
              }
            `}
          </style>

          <h1 className="title" style={styles.title}> </h1>

          <div style={styles.membersContainer}>
            {members.map((m, index) => (
              <div key={index} className="member-card" style={styles.card}>

                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  onLoad={() =>
                    setLoadedImages((prev) => ({ ...prev, [index]: true }))
                  }
                  onClick={() => setZoomImage(m.image)}
                  className={`lazy-img ${loadedImages[index] ? "loaded" : ""}`}
                  style={styles.image}
                />

                <h2 style={styles.name}>{m.name}</h2>
                <p style={styles.role}>{m.role}</p>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f5f5, #ffffff)",
    padding: "50px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: "48px",
    fontWeight: "900",
    marginBottom: "40px",
    color: "#1a1a1a",
    letterSpacing: "1.5px",
    animation: "fadeInUp 1s ease-in-out",
    textAlign: "center",
  },

  membersContainer: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "35px",
  },

  card: {
    width: "280px",
    background: "#ffffff",
    borderRadius: "20px",
    padding: "25px",
    textAlign: "center",
    animation: "fadeInUp 1.3s ease-in-out",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  },

  image: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "20px",
    marginBottom: "20px",
    animation: "glow 3s infinite ease-in-out",
  },

  name: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#222",
  },

  role: {
    fontSize: "16px",
    color: "#777",
    fontWeight: "500",
  },
};
