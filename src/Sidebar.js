import React from 'react';

import svgUrl from "./Assets/images/sprite.svg";
import './_Sidebar.scss';

export default function Sidebar({
  data,
  handleChange,
  handleSubmitTodo,
  formatMinute,
  target,
  setTarget,
  onOff,
  handleOnOffClick,
  handleModalOpen
}) {
  return (
    <div className="clock__sidebar">
      <input
        type='checkbox'
        id='clock__onoff'
        style={{ display: 'none' }}
      />
      <svg
        className="clock__sidebar--button-1"
        onClick={() => handleModalOpen(1)}
      >
        <use xlinkHref={`${svgUrl}#icon-sidebar`} />:
      </svg>
      <svg
        className="clock__sidebar--button-2"
        onClick={() => handleModalOpen(2)}
      >
        <use xlinkHref={`${svgUrl}#icon-assessment`} />:
      </svg>
      <svg
        className="clock__sidebar--button-3"
        onClick={() => handleModalOpen(3)}
      >
        <use xlinkHref={`${svgUrl}#icon-musicplay`} />:
      </svg>
      <div className="clock__sidebar--picture">
        <label htmlFor="clock__onoff">
          <svg
            onClick={handleOnOffClick}
          >
            {
              (onOff) ?
                <use xlinkHref={`${svgUrl}#icon-pause`} />
                :
                <use xlinkHref={`${svgUrl}#icon-play`} />
            }
          </svg>
        </label>
      </div>
      <div className="clock__sidebar--text">
        PROMODORO
      </div>
    </div>
  )
}
