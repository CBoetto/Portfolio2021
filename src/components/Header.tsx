import { FC } from "react";
import macStub from "../assets/macStub.png";
import downArrow from "../assets/downArrow.png";

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="header_content">
        <img src={macStub} alt="self portrait" />
        <h1>Calvin Boetto</h1>
        <p>Web Developer</p>
      </div>
      <img className="header_arrow" src={downArrow} alt="scroll down" onClick={() => window.scroll(0, window.innerHeight / 1.53)} />
    </div>
  )
}