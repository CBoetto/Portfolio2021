import { FC, useState } from "react";
import mailIcon from "../assets/mailBlue.png";
import aboutIcon from "../assets/aboutIconBlue.png";
import { isInViewport } from "../lib/helpers";
import { InfoType } from "../lib/types/types";
import { AboutText } from "./AboutText";
import { ContactText } from "./ContactText";
import { SubjectHeader } from "./SubjectHeader";

interface InfoProps {
  header: string,
  infoType: InfoType,
  highlightRange: Number[]
}

export const Info: FC<InfoProps> = ({ header, infoType, highlightRange }) => {

  const [highlight, setHighlight] = useState(false);

  const highlightHeaderFunc = () => {
      return isInViewport(highlightRange[0], highlightRange[1])
  }

  document.addEventListener("scroll", (e) => handleOnScrollDocument(e), true);

   const handleOnScrollDocument = (e: any) => {
    if (highlightHeaderFunc() && !highlight) {            
        setHighlight(true); 
    } else if (!highlightHeaderFunc() && !!highlight) {
        setHighlight(false);
    }
}

  const image = () => {
    const imgSrc = infoType === InfoType.About ? aboutIcon : mailIcon;
    const imgClass = infoType === InfoType.About ? 'about-image' : 'contact-image';
    return <img alt="info icon" src={imgSrc} className={imgClass} />
  }

  const alignSelf = infoType === InfoType.Contact ? {alignSelf: 'center'} : undefined;

  return (
    <div className={infoType}>
      <SubjectHeader isHighlighted={highlight} text={header} />
      <div className="about_content">
        <div className="about_left">
          {image()}
        </div>
        <div className="about_right"  style={alignSelf}>
          { infoType === InfoType.About ? <AboutText /> : <ContactText /> }
        </div>
      </div>
    </div>
  )
}