import React, {useState} from 'react';

import {Form} from './Form';
import {TodoList} from './TodoList';

export default function Todo(){
  const [items, setItems] = useState([
    {idx: 0, value: '寫程式', done: true},
    {idx: 1, value: '練英文', done: true},
    {idx: 2, value: '看直播', done: false},
    {idx: 3, value: '打電玩', done: true}
  ])

  function handleSubmitTodo(e, value){
    e.preventDefault();
    if (!value)
      return;

    const newItems = [...items, {
      idx: Math.max(...items.map(item => item.idx)) + 1,
      value: value,
      done: false
    }];
    setItems(newItems);
  }

  function handleChange(e, idx){
    const newItems = [...items];
    newItems[idx].done = !newItems[idx].done;
    setItems(newItems);
  }

  return(
    <div className="container-todo">
      <Form onSubmitTodo={handleSubmitTodo} />
      {
        items.map(item => (
          <TodoList key={item.idx} data={item} onChange={handleChange}/>
        ))
      }
    </div>
  )
}
