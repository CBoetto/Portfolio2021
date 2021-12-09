import React, { FC, useEffect, useState } from "react";
import linesIcon from "../assets/lines.png";

window.addEventListener('resize', function() {
  // your custom logic
})

export const AboutText: FC = () => {

    let [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const resizeListener = () => {
        setWidth(window.innerWidth)
      };
      window.addEventListener('resize', resizeListener);
      return () => {
        window.removeEventListener('resize', resizeListener);
      }
    }, [])

  return (
    <div className="about-text">
      { width > 700 && <img className="about_decoration" alt='decorative lines' src={linesIcon} /> }
      <p style={{marginBottom: 10}}>
        Hi, my name is <b>Calvin Boetto</b>.
      </p>
      <p>
        I've been making websites for over ten years now.  Recently I've worked on web and mobile applications for companies such as CVS and BJs Wholesale Club.
      </p>
    </div>
  )
}