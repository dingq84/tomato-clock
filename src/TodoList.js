import React from 'react';

import svgUrl from "./Assets/images/sprite.svg";

export const TodoList = (props) => {
  return(
    <div className="clock__container--list--item">
      {
        (props.data.done) ?
        <svg 
          // className="clock__container--list--item--circle"
          onClick={(e) => props.onChange(e, props.data.idx)}
        >
          <use xlinkHref={`${svgUrl}#icon-check`}/>
        </svg>
        :
        <div 
          className="clock__container--list--item--circle"
          onClick={(e) => props.onChange(e, props.data.idx)}
        >

        </div>
      }
      <span
        className={
          (props.data.done) ? 'clock__container--list--item--text':''
        }
      >
        {props.data.value}
      </span>  
      <svg
        className="clock__container--list--item--btn"
        onClick={props.onClick}
      >
        <use xlinkHref={`${svgUrl}#icon-play`}/>
      </svg>
    </div>
  )
};
