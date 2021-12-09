import React, { FC } from "react";

export const ContactText: FC = () => {
  return (
    <div className='contact_text-container'>
      <p style={{marginBottom: '10px'}}>
        Contact me at:
      </p>
      <p style={{fontWeight: 'bold'}}>cmitchellboetto<wbr></wbr>@gmail.com</p>
      <a href="https://www.linkedin.com/in/cboetto/">LinkedIn</a>
    </div>
  )
}