import React, { useState } from "react";
import { Link } from "react-router-dom";
import { APPNAME } from './util/api';
import logoImg from "./logo.jpeg"; // <-- ADD YOUR LOGO HERE

const Navbar = () => {
  const appName = APPNAME;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={styles.navbar} role="navigation" aria-label="Main navigation">
        
        {/* BRAND WITH LOGO */}
        <div style={styles.brandWrap}>
          <img
            src={logoImg}
            alt="Logo"
            style={styles.logoImg}
          />
          <div style={styles.logoTextWrap}>
            <div style={styles.logo}>Iloro-Ekiti</div>
            <div style={styles.tag}>Pride of Ekiti</div>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <ul style={styles.desktopLinks} className="navDesktop" aria-hidden={false}>
          <li style={styles.navItem}><Link style={styles.navItem} to="/">Home</Link></li>
          <li style={styles.navItem}><Link style={styles.navItem} to="/iloro-history">Iloro History</Link></li>
          <li style={styles.navItem}><Link style={styles.navItem} to="/ipu_history">IPU History</Link></li>
          <li style={styles.navItem}><Link style={styles.navItem} to="/ipu_members">IPU Members</Link></li>
           <li style={styles.navItem}><Link style={styles.navItem} to="/constitution">IPU Constitution</Link></li>
          <li style={styles.navItem}><Link style={styles.navItem} to="/gallery">Gallery</Link></li>

        </ul>

        {/* ACTIONS + MOBILE TOGGLE */}
        <div style={styles.actions}>
          <div
            style={styles.menuIcon}
            className="navMobileToggle"
            onClick={() => setMenuOpen((s) => !s)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span style={{ fontSize: 20 }}>{menuOpen ? "✕" : "☰"}</span>
          </div>
        </div>

        {/* MOBILE PANEL */}
        <div
          className={`mobilePanel ${menuOpen ? "open" : "closed"}`}
          style={{ ...styles.mobilePanel, top: 74 }}
          role="menu"
        >
          <ul style={styles.mobileLinks}>
            <li style={styles.mobileItem}>
              <Link style={styles.mobileItem} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li style={styles.mobileItem}>
              <Link style={styles.mobileItem} to="/iloro-history" onClick={() => setMenuOpen(false)}>Iloro History</Link>
            </li>
            <li style={styles.mobileItem}>
              <Link style={styles.mobileItem} to="/ipu_history" onClick={() => setMenuOpen(false)}>IPU History</Link>
            </li>
            <li style={styles.mobileItem}>
              <Link style={styles.mobileItem} to="/ipu_members" onClick={() => setMenuOpen(false)}>IPU Members</Link>

              
            </li> 
            
            <li style={styles.mobileItem}>
              <Link style={styles.mobileItem} to="/constitution" onClick={() => setMenuOpen(false)}>IPU Constitution</Link>
            </li>


            <li style={styles.mobileItem}>
              <Link style={styles.mobileItem} to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const styles = {
  /* NAVBAR */
  navbar: {
    position: "fixed",
    top: 12,
    left: 12,
    right: 12,
    zIndex: 3000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 18px",
    borderRadius: 14,
    background: "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.26))",
    boxShadow: "0 12px 40px rgba(6,18,28,0.08)",
    backdropFilter: "blur(10px) saturate(110%)",
    border: "1px solid rgba(255,255,255,0.6)",
  },

  /* LOGO AREA */
  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  logoImg: {
    width: 40,
    height: 40,
    objectFit: "cover",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.7)",
  },

  logoTextWrap: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.1,
  },

  logo: {
    fontWeight: 900,
    fontSize: 18,
    color: "#062834",
  },

  tag: {
    fontSize: 11,
    color: "#0A3D62",
    opacity: 0.8,
    fontWeight: 700,
  },

  /* DESKTOP LINKS */
  desktopLinks: {
    display: "flex",
    gap: 24,
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  navItem: {
    fontWeight: 700,
    fontSize: 15,
    color: "#0A3D62",
    cursor: "pointer",
    padding: "8px 10px",
    borderRadius: 10,
    transition: "all 180ms ease",
  },

  /* ACTIONS */
  actions: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  menuIcon: {
    display: "block",
    padding: "8px 10px",
    borderRadius: 10,
    cursor: "pointer",
    marginLeft: 6,
    background: "rgba(255,255,255,0.35)",
    border: "1px solid rgba(255,255,255,0.5)",
    boxShadow: "0 8px 18px rgba(8,22,34,0.06)",
  },

  /* MOBILE PANEL */
  mobilePanel: {
    position: "fixed",
    right: 12,
    zIndex: 2500,
    width: 260,
    background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(248,252,255,0.95))",
    borderRadius: 12,
    boxShadow: "0 20px 60px rgba(4,14,30,0.12)",
    padding: 18,
  },

  mobileLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  mobileItem: {
    padding: "10px 12px",
    borderRadius: 8,
    fontWeight: 800,
    color: "#08324A",
    cursor: "pointer",
  },
};

export default Navbar;
