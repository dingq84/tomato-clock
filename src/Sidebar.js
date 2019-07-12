import React from 'react';

import svgUrl from "./Assets/images/sprite.svg";
import './_Sidebar.scss';

export default function Sidebar(){

  return (
    <div className="clock__sidebar">
      <svg className="clock__sidebar--button-1">
        <use xlinkHref={`${svgUrl}#icon-sidebar`} />:
      </svg>
      <svg className="clock__sidebar--button-2">
        <use xlinkHref={`${svgUrl}#icon-assessment`} />:
      </svg>
      <svg className="clock__sidebar--button-3">
        <use xlinkHref={`${svgUrl}#icon-musicplay`} />:
      </svg>
      <div className="clock__sidebar--picture">

      </div>
      <div className="clock__sidebar--text">
        PROMODORO
      </div>
    </div>
  )
}
