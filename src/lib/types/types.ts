import React from "react";

export interface ProjectType {
  title: ProjectTitle,
  message: string,
  technologies: string[];
}

export enum ProjectTitle {
  CVS = 'CVS',
  SocialClub = 'Social Club',
  Wirehead = 'Wirehead'
}

export enum InfoType {
  About = 'about',
  Contact = 'contact'
}

export interface InfoPropsType {
  header: string,
  infoType: InfoType,
}