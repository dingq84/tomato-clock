import React from 'react';

export const TodoList = (props) => {
  return(
    <div>
      <input
        type='checkbox'
        checked ={props.data.done}
        onChange={(e) => props.onChange(e, props.data.idx)}
      />
      {props.data.value}
    </div>
  )
};
