/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './util/api.js';

import Home from './home.js';
import ElegantGallery from './gallery.js';
import Navbar from './header.js';
import AboutIloroEkiti from './AboutUs.js';
import HistoryPage from './History.js';
import AssociationMembers from './members.js';
import IloroHistoryPage from './newHistory.js';
import IpuHistory from './IpuHistory.js';

import ConstitutionPage from './blogs/constitution.js';
import PDFViewer from './view_pdf.js';
import PdfGallery from './MagazineGallery.js';
import MagazineGallery from './MagazineGallery.js';






function App() {


  return (
    <>

      <BrowserRouter>

        <AuthProvider>
          <div style={styles.container} aria-live="polite">

            <Navbar />

            {/* Component-scoped styles & keyframes */}
            <style>{`
                   /* Keyframes */
                   @keyframes float {
                     0% { transform: translateY(0px) translateX(0); }
                     50% { transform: translateY(-18px) translateX(6px); }
                     100% { transform: translateY(0px) translateX(0); }
                   }
                   @keyframes slowFloat {
                     0% { transform: translateY(0px); }
                     50% { transform: translateY(-10px); }
                     100% { transform: translateY(0px); }
                   }
                   @keyframes fadeInUp {
                     from { opacity:0; transform: translateY(12px); }
                     to { opacity:1; transform: translateY(0); }
                   }
                   @keyframes pulseBtn {
                     0% { box-shadow: 0 8px 32px rgba(10,61,98,0.10); transform: translateY(0); }
                     50% { box-shadow: 0 22px 48px rgba(10,61,98,0.10); transform: translateY(-3px); }
                     100%{ box-shadow: 0 8px 32px rgba(10,61,98,0.10); transform: translateY(0); }
                   }

                   @keyframes sheen {
                     0% { background-position: -200% 0; }
                     100% { background-position: 200% 0; }
                   }
           
                   /* Small utility classes */
                   .fadeInUp { animation: fadeInUp 0.85s ease both; }
                   .delay-100 { animation-delay: 0.1s; }
                   .delay-200 { animation-delay: 0.22s; }
                   .delay-300 { animation-delay: 0.42s; }
                   .pulseBtn { animation: pulseBtn 3.8s ease-in-out infinite; }
           
                   /* Responsive nav display control */
                   @media (min-width: 980px) {
                     .navDesktop { display: flex !important; }
                     .navMobileToggle { display: none !important; }
                   }
                   @media (max-width: 979px) {
                     .navDesktop { display: none !important; }
                     .navMobileToggle { display: block !important; }
                   }
           
                   /* Mobile slide-in */
                   .mobilePanel {
                     transform-origin: right center;
                     transition: transform 400ms cubic-bezier(.17,.67,.83,.67), opacity 300ms;
                   }
                   .mobilePanel.closed { transform: translateX(110%); opacity: 0; pointer-events: none; }
                   .mobilePanel.open { transform: translateX(0%); opacity: 1; pointer-events: auto; }
                 `}</style>

            {/* NAVBAR */}


            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/gallery' element={<ElegantGallery />} />
              <Route path='/about-us' element={<AboutIloroEkiti />} />
              <Route path='/history' element={<HistoryPage />} />
              <Route   path="/iloro-history"   element={<IloroHistoryPage/>} />
              <Route path='/ipu_members' element={<AssociationMembers />} />
              <Route path='/ipu_history' element={<IpuHistory />} />
              <Route  path='/constitution'   element={<ConstitutionPage/>} />
              <Route path='/magazines'   element={<MagazineGallery/>} />
              <Route  path='/magazine/:file/:name'  element={<PDFViewer/>} />




            </Routes>



            {/*  <Footer/> */}
            
      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 18 }}>Iloro-Ekiti Community</div>
            <div style={{ marginTop: 6, opacity: 0.88 }}>Pride of Ekiti State • Nigeria</div>
          </div>

          <div style={styles.socials}>
            <a style={styles.socialLink} href="#instagram" aria-label="Instagram">Instagram</a>
            <a style={styles.socialLink} href="#facebook" aria-label="Facebook">Facebook</a>
            <a style={styles.socialLink} href="#x" aria-label="Twitter">Twitter</a>
          </div>
        </div>

        <div style={styles.copyright}>© {new Date().getFullYear()} Iloro-Ekiti — All rights reserved</div>
      </footer>


          </div>
        </AuthProvider>
      </BrowserRouter>

    </>
  )
}

const styles = {
  container: {
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#08324A",
    lineHeight: 1.5,
    overflowX: "hidden",
  },

    /* FOOTER */
  footer: {
    background: "#0A3D62",
    color: "#fff",
    padding: "34px 28px 40px",
    marginTop: 40,
    borderRadius: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  footerInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
    maxWidth: 1180,
    margin: "0 auto",
  },
  socials: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  socialLink: {
    padding: "8px 12px",
    borderRadius: 8,
    background: "rgba(255,255,255,0.06)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
  },
  copyright: {
    marginTop: 18,
    maxWidth: 1180,
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0.9,
    fontSize: 13,
  },
};

export default App
