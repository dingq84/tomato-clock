import React, { useState } from 'react';

import ModalDetail from './ModalDetail';

import svgUrl from './Assets/images/sprite.svg';

import './_Modal.scss';

export default function Modal({
  data,
  handleChange,
  handleSubmitTodo,
  target,
  formatMinute,
  setTarget,
  onOff,
  handleOnOffClick,
  playControl,
  workBreakMusic
}) {
  const [openOrClose, setOpenOrClose] = useState(false);
  const [bookMark, setBookMark] = useState('');

  const modalDetail = ModalDetail({
    data: data,
    bookMark: bookMark,
    handleSubmitTodo: handleSubmitTodo,
    handleChange: handleChange,
    setTarget: setTarget,
    playControl: playControl,
    workBreakMusic: workBreakMusic
  });

  function handleModalOpen(value) {
    setOpenOrClose(!openOrClose);
    setBookMark(value);
    playControl();
  }

  const ModalDOM =
    <div
      className="Modal"
      style={{
        left: (openOrClose) ? '0' : '-500%',
        transition: '1s'
      }}
    >
      <div className="Modal__sidebar">
        <div className="Modal__sidebar__btn">
          <div
            className="Modal__sidebar__btn--1"
            onClick={() => setBookMark(1)}
          >
            <svg
              style={{ fill: bookMark === 1 ? '#FF4384' : '' }}
            >
              <use xlinkHref={`${svgUrl}#icon-sidebar`} />:
                        </svg>
            <div
              style={{ color: bookMark === 1 ? '#FF4384' : '' }}
            >TO-DO LIST</div>
          </div>
          <div
            className="Modal__sidebar__btn--2"
            onClick={() => setBookMark(2)}
          >
            <svg
              style={{ fill: bookMark === 2 ? '#FF4384' : '' }}
            >
              <use xlinkHref={`${svgUrl}#icon-assessment`} />:
                        </svg>
            <div
              style={{ color: bookMark === 2 ? '#FF4384' : '' }}
            >ANALYTICS</div>
          </div>
          <div
            className="Modal__sidebar__btn--3"
            onClick={() => setBookMark(3)}
          >
            <svg
              style={{ fill: bookMark === 3 ? '#FF4384' : '' }}
            >
              <use xlinkHref={`${svgUrl}#icon-musicplay`} />:
                        </svg>
            <div
              style={{ color: bookMark === 3 ? '#FF4384' : '' }}
            >RINGTONES</div>
          </div>
        </div>
        <div
          className="Modal__sidebar__clock"
          onClick={handleOnOffClick}
        >
          <svg
            className="Modal__sidebar__clock--btn"
          >
            {
              (onOff) ?
                <use xlinkHref={`${svgUrl}#icon-pause`} />
                :
                <use xlinkHref={`${svgUrl}#icon-play`} />
            }
          </svg>
          <div className="Modal__sidebar__clock--text">
            <div className="Modal__sidebar__clock--text--time">
              {formatMinute(target.time)}
            </div>
            <div className="Modal__sidebar__clock--text--thing">
              {target.value}
            </div>
          </div>
        </div>
      </div>
      <div className="Modal__detail">
        {modalDetail}
      </div>
      <svg
        className="Modal__close"
        onClick={handleModalOpen}
      >
        <use xlinkHref={`${svgUrl}#icon-close`} />
      </svg>
    </div>;

  return [ModalDOM, handleModalOpen];
}
