import React from "react";
import profileImage from '../assets/media/resume_photo.jpg';
import "../styles/Home.css"
import Header from "./Header";
import Layout from "./Layout";
function Home() {
    return (
        <div className="home">
            <div className="content">
                <img
                src={profileImage} 
                alt="Philip Cai"
                className="profile-image"
                />
                <div className="intro">
                    <h2>Hi! <br /> I'm Philip Cai</h2>
                    <p>
                        I am currently pursuing a Master of Computing at The Australian National University,
                        specialising in Machine Learning & Professional Computing, and I hold a Bachelor of Data
                        Science from The University of Melbourne, graduating with First Class Honours.
                    </p>
                    <p>
                        Recently, I gained extensive experience as a Research Assistant Intern at ANU,
                        optimising machine learning models and implementing Explainable AI (XAI) methods to
                        analyse community participation in renewable energy projects. Previously, I worked as a
                        Quantitative Methods Tutor, an Operations Intern at DiDi Mobility, and a Data Mining Intern at Deputy.
                    </p>
                    <p>
                        My technical skills include Python, Java, JavaScript, SQL, and proficiency in AWS Cloud Computing.
                        I am bilingual in Cantonese and Mandarin, with full professional proficiency in English.
                    </p>
                </div>
            </div>
        </div>
      );
  }
export default Home;