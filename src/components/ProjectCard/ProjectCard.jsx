import { useState, useEffect } from "react"
import { CardImage } from "../../ui/CardImage/CardImage"
import { ProjectButton } from "../../ui/ProjectButton/ProjectButton"
import { HeaderThree } from "../../ui/Typography/Typography"
import "./ProjectCard.css"
import projectData from "../../../projects.json"

export const ProjectCard = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setProjects(projectData)
  }, [])

  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className="project-card" >
          <CardImage cardImage={project.cardImage} alt={project.alt} />
          <HeaderThree>{project.header}</HeaderThree>
          <div className="button-container">
            <ProjectButton label="Live demo" background="primary"></ProjectButton>
            <ProjectButton label="View Code" background="neutral"></ProjectButton>
          </div>
        </div>
      ))}
    </>
  )
}