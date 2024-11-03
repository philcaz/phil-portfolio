import androidPhoto from "../../src/assets/media/HomePage.png"
import posterPhoto from "../../src/assets/media/poster.png"
import posterPDF from "../../src/assets/media/final_poster.pdf"
import dsPhoto from "../../src/assets/media/ds_project.png"
import dsPDF from "../../src/assets/media/ds_project.pdf"
import daPhoto from "../../src/assets/media/bellabeat.png"

const projectList = [
    {
      imageSrc: androidPhoto,
      title: "Android Project",
      description: "An Android app that offers exhaustive browsing capabilities for users to view and save their favourite games, while allowing users to connect and chat with friends.",
      buttonLabel: "App Demo",
      videoUrl: "https://www.youtube.com/embed/g0HyjkvVENo?si=GoHK9_1UpFHl55Np",
    },
    {
      imageSrc: posterPhoto,
      title: "XAI Project",
      description: "A Python-based project that utilises Explainable AI (XAI) methods to provide insights for renewable energy stakeholders as to how (optimal) machine learning models reach certain decisions.",
      buttonLabel: "Project Pitch",
      videoUrl: "https://www.youtube.com/embed/Knzk_9TG-bk?si=9cY-5gQdcqWMuonF",
      linkUrl: posterPDF,
    },
    {
      imageSrc: dsPhoto,
      title: "Housing Prediction Project",
      description: "A data science project that uses web-scraping, RESTful API and machine learning to predict housing prices and assess real estate trends from extensive data.",
      buttonLabel: "GitHub Link",
      linkUrl: dsPDF,
      externalUrl: "https://github.com/MAST30034-Applied-Data-Science/generic-real-estate-consulting-project-group-43"
    },
    {
      imageSrc: daPhoto,
      title: "Bellabeat Project",
      description: "A data analytic project in R that helps a health tracker company better design and deliver fitness advice for customers with diverse health needs.",
      buttonLabel: "Kaggle Link",
      externalUrl: "https://www.kaggle.com/phikho/bellabeat-project"
    }
  ];
  
  export default projectList;