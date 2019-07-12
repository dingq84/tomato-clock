import React from 'react';

import svgUrl from "./Assets/images/sprite.svg";

export const TodoList = (props) => {
  return(
    <div className="clock__container--list--item">
      <input
        type='checkbox'
        checked ={props.data.done}
        onChange={(e) => props.onChange(e, props.data.idx)}
      />
      {props.data.value}
      <svg
        className="clock__container--list--item--btn"
        onClick={props.onClick}
      >
        <use xlinkHref={`${svgUrl}#icon-play`}/>
      </svg>
    </div>
  )
};
