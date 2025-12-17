import React from "react";

export default function IloroMap() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "40px auto",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
        transform: "scale(1)",
        transition: "0.4s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
       {/*  <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <iframe
        title="Iloro Ekiti Map"
        width="100%"
        height="500"
        style={{
          border: "0",
          filter: "brightness(1.1) contrast(1.1) saturate(1.3)",
        }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed?pb=!4v1763736457629!6m8!1m7!1sQDcLoDRv0nh3BWbNk4fRyA!2m2!1d7.902056244641185!2d5.109908083370056!3f299.36675190443475!4f-11.465551857544455!5f0.7820865974627469`}
      ></iframe>

      <div
        style={{
          padding: "20px",
          background: "linear-gradient(135deg, #0044ff, #00bbff)",
          color: "white",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Iloro-Ekiti, Ekiti State — Nigeria
      </div>
    </div>
  );
}
