import { useNavigate } from "react-router-dom";
import "./PdfGallery.css";

const pdfFiles = [
    {
        name: "VOL. 1 2025", file: "/magazine/VOL. 1 2025.pdf",

    },


];

export default function MagazineGallery() {
    const navigate = useNavigate();

    return (

        <>

            <div style={{ marginTop: "60px" }}> </div>

            <div className="pdf-gallery-container">
                <h1 className="gallery-title">Magazine Gallery</h1>

                <div className="pdf-grid">
                    {pdfFiles.map((pdf, index) => (
                        <div
                            key={index}
                            className="pdf-card"
                            onClick={() =>
                                navigate(`/magazine/${encodeURIComponent(pdf.file)}/${encodeURIComponent(pdf.name)}`)
                            }
                        >
                            {pdf.name}
                            <div className="pdf-preview">
                                <embed
                                    src={`${pdf.file}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                                    type="application/pdf"
                                />
                            </div>

                            <div className="pdf-info">
                                <button className="btn btn-info">Click To View</button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
