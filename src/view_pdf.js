import React from "react";
import { useParams } from "react-router-dom";

export default function PDFViewer() {
   // place your PDF in public folder
  const{file , name}  =  useParams();
  const pdfUrl = file;

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    card: {
      background: "#ffffff",
      borderRadius: "16px",
      width: "100%",
      maxWidth: "900px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      overflow: "hidden",
    },
    header: {
      padding: "20px",
      borderBottom: "1px solid #eee",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#333",
    },
    button: {
      background: "#20c997",
      color: "#fff",
      padding: "10px 18px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      transition: "0.3s",
    },
    iframeWrapper: {
      width: "100%",
      height: "75vh",
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
    },
    footer: {
      padding: "12px",
      textAlign: "center",
      fontSize: "13px",
      color: "#777",
      background: "#fafafa",
    },
  };

  return (
    <>
    <div  style={{marginTop :"80px"}}></div>
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.title}>📄 {name}</div>

          <a href={pdfUrl} download style={{ textDecoration: "none" }}>
            <button
              style={styles.button}
              onMouseOver={(e) =>
                (e.target.style.background = "#17b38a")
              }
              onMouseOut={(e) =>
                (e.target.style.background = "#20c997")
              }
            >
              ⬇️ Download PDF
            </button>
          </a>
        </div>

        <div style={styles.iframeWrapper}>
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            style={styles.iframe}
          />
        </div>

        {/* <div style={styles.footer}>
          Powered by React • Secure PDF Viewer
        </div> */}
      </div>
    </div>
    </>
  );
}
