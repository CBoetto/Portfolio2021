import { FC, useState } from "react";
import { isInViewport } from "../lib/helpers";
import { ProjectTitle, ProjectType } from "../lib/types/types";
import { Project } from "./index";
import { ProjectTile } from "./ProjectTile";
import { SubjectHeader } from "./SubjectHeader";

interface ProjectsProps {
  highlightRange: Number[]
}

const ProjectList: ProjectType[] = [
  {
    title: ProjectTitle.CVS,
    message: "Desktop and mobile e-commerce",
    technologies: ["TypeScript", "React", "React-Native", "Redux", "HTML", "CSS"]
  },
  {
    title: ProjectTitle.SocialClub,
    message: "A modern web forum",
    technologies: ["JavaScript", "React", "Redux", "Node", "GraphQL", "PostgreSQL", "Apollo"]
  },
  {
    title: ProjectTitle.Wirehead,
    message: "A Google Chrome extension to track behavior patterns",
    technologies: ["JavaScript", "React", "Redux", "D3.JS"]
  }
]

export const Projects: FC<ProjectsProps> = ({ highlightRange }) => {

  const [ project, setProject ] = useState<ProjectType | undefined>();

  const [ highlight, setHighlight ] = useState(false);

  document.addEventListener("scroll", (e) => handleOnScrollDocument(e), true);

   const handleOnScrollDocument = (e: any) => {
    if (isInViewport(highlightRange[0], highlightRange[1]) && !highlight) {            
        setHighlight(true); 
    } else if (!isInViewport(highlightRange[0], highlightRange[1]) && !!highlight) {
        setHighlight(false);
    }
}

  const renderProjectModal = () => {
    return project ? (
      <Project title={project.title} message={project.message} technologies={project.technologies} toggleModal={toggleModal} />
    ) : null;
  }

  const toggleModal = () => {
      setProject(undefined);
  }

  return (
    <div className="projects">
      {project && renderProjectModal()}
      <SubjectHeader isHighlighted={highlight} text='Work' />
      <div className='projects-tile_container'>
          {ProjectList.map( (project, index) => {
            return (
                <ProjectTile title={project.title} message={project.message} technologies={project.technologies} key={index} handleModal={() => setProject(project)} />
            )
          })}        
      </div>
    </div>
  )
}