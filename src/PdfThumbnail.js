import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function PdfThumbnail({ file }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      const pdf = await pdfjsLib.getDocument(file).promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 0.4 });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: context, viewport }).promise;
    };

    loadPdf();
  }, [file]);

  return <canvas ref={canvasRef} style={{ width: "100%" }} />;
}
