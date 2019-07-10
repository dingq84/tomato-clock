import React from 'react';

export const TodoList = (props) => {
  return(
    <div
      key={props.key}
    >
      {props.content}
    </div>
  )
};
