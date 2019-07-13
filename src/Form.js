import React, {useState} from 'react';

import svgUrl from "./Assets/images/sprite.svg";

export const Form = (props) => {
  const [text, setText] = useState('ADD A NEW MISSION...');

  function handleChange(e){
    setText(e.target.value);
  }

  function handleClick(e){
    if(text === 'ADD A NEW MISSION...' || !text)
      return;

    setText('');
    props.onSubmitTodo(e, text);
  }
  return(
    <form className={props.className}>
      <label className={props.className + '--text'}>
        <input
          type='text'
          onChange={handleChange}
          onClick={() => setText('')}
          value={text}
        />
      </label>
      <label 
        className={props.className + '--btn'}
        onClick={handleClick}
      >
        <svg>
          <use
            xlinkHref={`${svgUrl}#icon-add`}
          />:
        </svg>
      </label>
    </form>
  )
}
