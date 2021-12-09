import { FC } from "react";

interface SubjectHeaderProps {
  isHighlighted: boolean;
  text: string;
} 

export const SubjectHeader: FC<SubjectHeaderProps> = ({ isHighlighted, text }) => {

  const highlightStyle =  !!isHighlighted ? { borderColor: "rgb(119, 112, 175)", backgroundPosition:'0%', color: 'white' } 
  : { borderColor: "rgb(33, 31, 49)", backgroundPosition:'100%'};


  return (
    <h1 className={"highlighted-header"} style={highlightStyle}>{text}</h1>
  )
}