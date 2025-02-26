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
                    <h2>Hi! I'm Philip Cai</h2>
                    <p>
                        I am a recent graduate with a Master of Computing degree from The Australian National University,
                        specialising in Machine Learning & Professional Computing, and I hold a Bachelor of Data
                        Science from The University of Melbourne, graduating with First Class Honours.
                    </p>
                    <p>
                        Recently, I developed a MERN-based web application for a second-hand market. I gained extensive full-stack developement experience 
                        such as UI/UX design, client-server communications through REST APIs and database administration. 
                        Previously, I worked as an XAI research assistant at ANU Research School of Biology, optimising machine learning models 
                        and implementing Explainable AI (XAI) methods to analyse community participation in renewable energy projects.
                        I also worked as a Quantitative Methods Tutor at Jiawen Education, a Marketplace Operations Intern at DiDi Mobility, and a Data Mining Intern at Deputy.
                    </p>
                    <p>
                        My best programming languages include Python, Java, JavaScript, SQL, and I have proficiency in AWS Cloud Computing.
                        I am bilingual in Cantonese and Mandarin, with full professional proficiency in English.
                    </p>
                </div>
            </div>
        </div>
      );
  }
export default Home;