import { FC } from "react";
import { ProjectTitle } from "../lib/types/types";
import cvsIcon from "../assets/cvsIcon.png";
import socialClubIcon from "../assets/socialClubIcon.png";
import wireheadIcon from "../assets/wireheadIcon.png";

interface ProjectTileProps {
  message: string,
  technologies: string[],
  title: ProjectTitle,
  handleModal: () => void,
}

const getIcon = (title: string) => {

  switch (title) {
    case ProjectTitle.CVS:
      return cvsIcon;
    case ProjectTitle.SocialClub:
      return socialClubIcon;
    case ProjectTitle.Wirehead:
      return wireheadIcon;
    default:
      break;
  };

}

export const ProjectTile: FC<ProjectTileProps> = ({handleModal, title}) => {
  return (
    <div className='project-tile' onClick={handleModal}>
      <div className="project-tile_img-container">
        <img className={(title === ProjectTitle.SocialClub || title === ProjectTitle.Wirehead) ? "project-tile_inverse-img" : ""} src={getIcon(title)} alt={'project logo'} />
      </div>
      <div className='project-tile_text'>
        <div className='project-tile_message'>
          <b>{title}</b>
        </div>      
      </div>
    </div>
  )
}