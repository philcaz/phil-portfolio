import React, {useState} from "react";
import "../styles/Portfolio.css"
import projectList from "../constants/ProjectList";
import ProjectCard from "./ProjectCard";
function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
      setVideoUrl(url);
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setVideoUrl("");
  };  
  
  return (
    <div className="portfolio">
      <h2 className="portfolio-head">Portfolio</h2>
      <div className="projects">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onButtonClick={() => project.videoUrl ? openModal(project.videoUrl) : window.open(project.externalUrl, "_blank")}
          />
        ))}
      </div>

      {/* Modal for Embedded Video */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <iframe
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )}
export default Portfolio