import React, { useState } from 'react';
import { Document, pdfjs, Page} from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import "./ShowCVModal.css"
import {useTranslation} from "react-i18next";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const ShowCVModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();
    const pdfUrl = '/Rasmus_Veldemann_CV.pdf';

    // Open and close modal
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // This function will be called when the PDF is loaded to know the number of pages
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div>
            {/* Button to open the modal */}
            <button className="show-cv-button" onClick={openModal}>{t("View CV")}</button>

            {isOpen && (
                <div className="cv-modal" onClick={closeModal}>
                    <div className="cv-modal-content" onClick={handleContentClick}>
                        <div className="cv-buttons">
                            <a href={pdfUrl} download className="cv-download-button">{t("Download")}</a>
                            <button onClick={closeModal} className="cv-close-btn">X</button>
                        </div>
                        <div>
                            <Document
                                file={pdfUrl}>
                                <Page pageNumber={1}/>
                            </Document>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default ShowCVModal;




