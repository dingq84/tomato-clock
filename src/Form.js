import React, {useState} from 'react';

export const Form = (props) => {
  const [text, setText] = useState('');

  function handleChange(e){
    setText(e.target.value);
  }

  function handleClick(e){
    setText('');
    props.onSubmitTodo(e, text);
  }
  return(
    <form>
      <label>
        <input
          type='text'
          onChange={handleChange}
          value={text}
        />
        <button
          onClick={handleClick}
        >
          送出
        </button>
      </label>
    </form>
  )
}
