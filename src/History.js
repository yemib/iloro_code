import { color } from "framer-motion";
import React, { useEffect } from "react";

export default function HistoryPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <section  > 
        <div style={styles.page}>
            {/* HERO SECTION */}
            <section style={styles.hero}>
                <div style={styles.overlay}></div>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>History of Iloro-Ekiti</h1>
                    <p style={styles.heroSubtitle}>
                        A land of tradition, courage, unity, and timeless heritage.
                    </p>
                </div>
            </section>

            {/* SECTION 1 */}
            <Section
                title="Origins of Iloro-Ekiti"
                text="Iloro-Ekiti is one of the historic towns in Ekiti State, known for its deep cultural roots. The community traces its origin to early Yoruba settlers who migrated to the region centuries ago. These pioneers established the foundation of the town through farming, hunting, and traditional craftsmanship."
                img="/gallery/by.jpg"
                reverse={false}
            />

            {/* SECTION 2 */}
            <Section
                title="Growth, Culture, and Leadership"
                text="Over the decades, Iloro-Ekiti has grown into a peaceful and vibrant town. The people are known for their unity, strong traditional leadership system, and respect for culture. Festivals, age-grade systems, and community gatherings remain powerful symbols of Iloro’s identity. The town has produced notable leaders, scholars, and cultural ambassadors."
                img="/gallery/rere.jpg"
                reverse={true}
            />

            {/* SECTION 3 */}
            <Section
                title="Iloro Today"
                text="Modern Iloro-Ekiti is a blend of history and development. The community is advancing in education, agriculture, religion, infrastructure, and social engagement. With a shared vision for progress, Iloro continues to preserve its cultural values while embracing modern innovation."
                img="/gallery/yhh.jpg"
                reverse={false}
            />



        </div>
        </section>
    );
}

/* SECTION COMPONENT */
function Section({ title, text, img, reverse }) {
    return (
        <div
            style={{
                ...styles.section,
                flexDirection: reverse ? "row-reverse" : "row",
            }}
        >
            <div style={styles.imageBox}>
                <img src={img} alt={title} style={styles.image} />
            </div>

            <div style={styles.textBox}>
                <h2 style={styles.sectionTitle}>{title}</h2>
                <p style={styles.sectionText}>{text}</p>
            </div>
        </div>
    );
}

/* STYLES */
const styles = {
    page: {
        width: "100%",
        fontFamily: "Arial, sans-serif",
        color: "#222",
        lineHeight: 1.6,
    },

    hero: {
        height: "70vh",
        width: "100%",
        backgroundImage:
            "url('/gallery/nmi.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    overlay: {
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
    },

    heroContent: {
        position: "relative",
        textAlign: "center",
        color: "#fff",
        width: "85%",
    },

    heroTitle: {
        fontSize: "60px",
        fontWeight: "800",
        marginBottom: "15px",
        color: "#fff",
    },

    heroSubtitle: {
        fontSize: "22px",
        maxWidth: "600px",
        margin: "0 auto",
        opacity: 0.9,
    },

    section: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "70px 6%",
        gap: "50px",
        flexWrap: "wrap",
    },

    imageBox: {
        flex: 1,
        minWidth: "300px",
    },

    image: {
        width: "100%",
        borderRadius: "20px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    },

    textBox: {
        flex: 1,
        minWidth: "300px",
    },

    sectionTitle: {
        fontSize: "38px",
        fontWeight: "700",
        marginBottom: "20px",
    },

    sectionText: {
        fontSize: "18px",
        opacity: 0.9,
        lineHeight: 1.8,
    },

    footer: {
        textAlign: "center",
        padding: "20px",
        background: "#111",
        color: "#fff",
        marginTop: "40px",
    },
};
