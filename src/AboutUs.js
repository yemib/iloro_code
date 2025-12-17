import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Mountain, Users, HeartHandshake } from "lucide-react";

export default function AboutIloroEkiti() {
  return (
    <div style={{ minHeight: "100vh", width: "100%", padding: "40px", display: "flex", justifyContent: "center", background: "#f2f4f7" }}>
      <style>{`
        .container {
          width: 100%;
          max-width: 1300px;
        }

        .hero-box {
          position: relative;
          width: 100%;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0px 25px 60px rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .hero-img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          transform: scale(1.25);
          animation: zoomIn 2.5s ease-out forwards;
        }
        @keyframes zoomIn {
          to { transform: scale(1); }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-title {
          color: white;
          font-size: 60px;
          font-weight: 900;
          text-align: center;
          letter-spacing: 2px;
          text-shadow: 0 8px 20px rgba(0,0,0,0.8);
        }

        .section {
          margin-top: 80px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 50px;
        }

        .text-block {
          font-size: 19px;
          line-height: 1.8;
          color: #374151;
        }
        .title2 {
          font-size: 45px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 20px;
        }

        .mv-box {
          background: rgba(255,255,255,0.85);
          padding: 40px;
          border-radius: 28px;
          border: 1px solid #e5e7eb;
          box-shadow: 0px 20px 45px rgba(0,0,0,0.15);
          backdrop-filter: blur(8px);
        }
        .mv-title {
          font-size: 32px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
        }
        .mv-text {
          font-size: 18px;
          color: #444;
          margin-bottom: 25px;
        }

        .values-title {
          text-align: center;
          margin-top: 100px;
          font-size: 48px;
          font-weight: 800;
          color: #111827;
        }

        .values-grid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 45px;
        }
        .value-card {
          background: rgba(255,255,255,0.93);
          padding: 40px;
          border-radius: 30px;
          box-shadow: 0px 20px 40px rgba(0,0,0,0.15);
          border: 1px solid #ededed;
          text-align: center;
          transition: 0.4s ease;
        }
        .value-card:hover {
          transform: translateY(-12px);
          box-shadow: 0px 30px 60px rgba(0,0,0,0.18);
        }
        .value-title {
          font-size: 28px;
          font-weight: 700;
          margin-top: 20px;
          color: #111827;
        }
        .value-text {
          margin-top: 10px;
          font-size: 17px;
          color: #374151;
          line-height: 1.7;
        }

        .footer {
          margin-top: 120px;
          text-align: center;
          color: #6b7280;
          font-size: 15px;
          padding-bottom: 50px;
        }
     
        /* RESPONSIVENESS */

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 45px;
          }
          .section {
            grid-template-columns: 1fr;
          }
          .mv-box {
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .hero-img {
            height: 330px;
          }
          .hero-title {
            font-size: 36px;
            padding: 0 20px;
          }

          .title2 {
            font-size: 32px;
          }
          .text-block {
            font-size: 17px;
          }

          .mv-title {
            font-size: 26px;
          }
          .mv-text {
            font-size: 16px;
          }

          .values-title {
            font-size: 36px;
          }
        }

        @media (max-width: 500px) {
          .hero-img {
            height: 260px;
          }
          .hero-title {
            font-size: 28px;
            line-height: 1.2;
          }

          .container {
            padding: 0 10px;
          }

          .value-card {
            padding: 25px;
          }

          .value-title {
            font-size: 22px;
          }
          .value-text {
            font-size: 15px;
          }
             `
        } 
      </style>
      <section style={{ marginTop:"100px"}}>

      <div className="container">

        {/* HERO */}
        <motion.div className="hero-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <motion.img src="/gallery/fre.jpg" className="hero-img" />

          <div className="hero-overlay">
            <motion.h1 className="hero-title" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              Iloro‑Ekiti Community
            </motion.h1>
          </div>
        </motion.div>

        {/* ABOUT SECTION */}
        <motion.div className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div>
            <h2 className="title2">Our Heritage</h2>
            <p className="text-block">Iloro-Ekiti is a deeply historic, peaceful and culturally rich town in Ekiti State, Nigeria. Our people are known for unity, strength, wisdom and cultural greatness.</p>
            <p className="text-block">From our sacred hills to our timeless festivals, Iloro-Ekiti represents resilience, heritage and a progressive spirit passed from generation to generation.</p>
            <p className="text-block">Today, the community embraces development, education, technology and innovation—while proudly holding on to its cultural identity.</p>
          </div>

          <motion.div className="mv-box" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <h3 className="mv-title">Vision</h3>
            <p className="mv-text">To build a united, globally respected community rooted in heritage, innovation and sustainable progress.</p>

            <h3 className="mv-title">Mission</h3>
            <ul style={{ paddingLeft: "20px", fontSize: "18px", lineHeight: "1.8", color: "#374151" }}>
              <li>Promote unity and community development.</li>
              <li>Preserve our cultural identity.</li>
              <li>Empower the youth with knowledge and creativity.</li>
              <li>Encourage innovation and sustainable growth.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* VALUES */}
        <h2 className="values-title">Our Core Values</h2>

        <div className="values-grid">
          {[
            { title: "Unity", text: "We stand together as one strong family.", icon: <Users size={50} color="#4f46e5" /> },
            { title: "Culture", text: "Our heritage defines our identity.", icon: <Mountain size={50} color="#4f46e5" /> },
            { title: "Progress", text: "We embrace leadership, growth and modernization.", icon: <Sparkles size={50} color="#4f46e5" /> },
          /*   { title: "Service", text: "We serve our land and people with honour.", icon: <HeartHandshake size={50} color="#4f46e5" /> } */
          ].map((v, i) => (
            <motion.div key={i} className="value-card" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: i * 0.2 }}>
              <div>{v.icon}</div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-text">{v.text}</p>
            </motion.div>
          ))}
        </div>

       
      </div>

      </section>
    </div>
  );
}
