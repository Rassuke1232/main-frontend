import React from 'react';
import "./AboutMe.css"
import ShowCVModal from "../show-cv-modal/ShowCVModal.tsx"


const AboutMe: React.FC = () => {
    return (
        <div className="About Me">
            <ShowCVModal></ShowCVModal>
            <header className="personal-details">
                {/*<img src="/MePicture.png" className="me-picture"/>*/}
                <h1>Rasmus Veldemann</h1>
                <h2>Software Developer</h2>
                <p>📍 Tallinn, Estonia</p>
            </header>
            <section className="summary">
                <h3>Ambitions with this Website</h3>
                <p>&#x2022; Learn React</p>
                <p>&#x2022; Learn React</p>
                <p>&#x2022; Learn React</p>
                <p>&#x2022; Learn React</p>


            </section>

        </div>

    )

}

export default AboutMe;