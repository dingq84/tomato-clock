import React from 'react';

import Modal from './Modal';
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
  handleOnOffClick
}){
  const [ModalDOM, handleModalOpen] = Modal({
    data: data, 
    handleSubmitTodo: handleSubmitTodo,
    handleChange: handleChange,
    formatMinute: formatMinute,
    target: target,
    setTarget: setTarget,
    onOff: onOff,
    handleOnOffClick: handleOnOffClick
  });
  return (
    <div className="clock__sidebar">
      <svg 
        className="clock__sidebar--button-1"
        onClick={handleModalOpen}
      >
        <use xlinkHref={`${svgUrl}#icon-sidebar`} />:
      </svg>
      <svg 
        className="clock__sidebar--button-2"
        onClick={handleModalOpen}
      >
        <use xlinkHref={`${svgUrl}#icon-assessment`} />:
      </svg>
      <svg 
        className="clock__sidebar--button-3"
        onClick={handleModalOpen}
      >
        <use xlinkHref={`${svgUrl}#icon-musicplay`} />:
      </svg>
      <div className="clock__sidebar--picture">

      </div>
      <div className="clock__sidebar--text">
        PROMODORO
      </div>
      {ModalDOM}
    </div>
  )
}
