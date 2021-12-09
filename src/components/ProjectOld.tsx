import { FC, useState } from "react";
import macStub from "../assets/macStub.png";
import wirehead01 from "../assets/wirehead01.png";
import wirehead02 from "../assets/wirehead02.png";
import socialClub01 from "../assets/socialClub01.png";
import socialClub02 from "../assets/socialClub02.png";
import cvs01 from "../assets/wirehead01.png";
import cvs02 from "../assets/wirehead01.png";


interface ProjectProps {
  message: string,
  technologies: string[],
  title: string,
}

export const Project: FC<ProjectProps> = ({ message, technologies, title }) => {


  const [imageIndex, setImageIndex] = useState(0);

  // returns the array of images associated with each project
  const imageGallery = (projectTitle: string) => {
    switch (projectTitle) {
      case 'CVS':
        return [cvs01, cvs02];
      case 'Social Club':
        return [socialClub01, socialClub02];
      case 'Wirehead':
        return [wirehead01, wirehead02];
      default:
        break;
    }
  };

  const getImage = () => {
    const imageArray = imageGallery(title);
    return imageArray ? imageArray[imageIndex] : undefined;
  };

  return (
    <div className="project">
        <div className="project_gallery">
          <img src={getImage()} alt="project_screenshot" />
          <div className="project_button-container">
            <button onClick={() => setImageIndex(0)}>1</button>
            <button onClick={() => setImageIndex(1)}>2</button>
          </div>
        </div>
        <div className="project_message">
        <h1>{title}</h1>
          <p>{message}</p>
          <div className="project_technologies">
            <p>Technologies: </p>
            <p>
              {technologies.join(', ')}
            </p>
          </div>
        </div>        
    </div>
  )
};