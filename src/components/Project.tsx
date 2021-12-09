import { FC } from "react";
import wirehead01 from "../assets/wirehead01.png";
import socialClub01 from "../assets/socialClub01.png";
import cvs01 from "../assets/cvs01.png";
import { ProjectTitle } from "../lib/types/types";


interface ProjectProps {
  message: string,
  technologies: string[],
  title: ProjectTitle,
  toggleModal: () => void
}

const findImage = (title: ProjectTitle) => {
  switch (title) {
    case ProjectTitle.CVS:
      return cvs01;
    case ProjectTitle.SocialClub:
      return socialClub01;
    case ProjectTitle.Wirehead:
      return wirehead01;
    default:
      break;
  };    
};

export const Project: FC<ProjectProps> = ({ message, technologies, title, toggleModal }) => {


  return (
    <div className="project">
      <div className="project_backdrop" onClick={toggleModal}>
        <div className="project_modal-container">
          <div className="project_gallery">
            <img src={findImage(title)} alt="project thumbnail" />
          </div>
          <div className="project_content">
            <h3>{title}</h3>
            <p>{message}</p>
            <p>{technologies.join(', ')}</p>
          </div>          
        </div>
      </div>  
    </div>
  )
};