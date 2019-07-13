import React from 'react';

import {Form} from './Form';
import {TodoList} from './TodoList';

import svgUrl from "./Assets/images/sprite.svg";

import './_Todo.scss';

export default function Todo({
  data, 
  handleSubmitTodo, 
  handleChange, 
  formatMinute,
  target,
  setTarget,
  onOff,
  handleOnOffClick
}){

  const itemsDOM = [];
  for (let i = 0; i < data.length; i++){
    if (i === 4)
      break;

    if(data[i] === target)
      continue;
    
    itemsDOM.push(
      <TodoList
        key={data[i].idx}
        data={data[i]}
        onChange={handleChange}
        onClick={() => setTarget(data[i])}
      />
    );
  }

  return(
    <div className="clock__container">
      <Form
        className="clock__container--inputBar"
        onSubmitTodo={handleSubmitTodo}
      />
      <div className="clock__container--time">
        <div className="clock__container--time--title">
          <div className="clock__container--time--title--circle"></div>
          <div className="clock__container--time--title--text">
            {target.value}
          </div>
        </div>
        <div className="clock__container--time--content">
          <svg
            onClick={handleOnOffClick}
          >
            {
              (onOff)?
                <use xlinkHref={`${svgUrl}#icon-pause`}/>
                :
                <use xlinkHref={`${svgUrl}#icon-play`}/>
            }
          </svg>
          {formatMinute(target.time)}
        </div>
      </div>
      <div className="clock__container--list">
        {itemsDOM}
        <button className="clock__container--list--btn">
          MORE
        </button>
      </div>
    </div>
  )
}
