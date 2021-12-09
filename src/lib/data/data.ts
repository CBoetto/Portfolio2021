import { InfoType, InfoPropsType } from "../types/types"

export const About: InfoPropsType = {
  header: 'About Me',
  infoType: InfoType.About
}

export const Contact: InfoPropsType = {
  header: 'Contact Me',
  infoType: InfoType.Contact,
}

export const HighlightRanges = {
  About: [-10, 25],
  Work: [25, 41.5],
  Contact: [41.5, 220]
}