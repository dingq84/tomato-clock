import React, {useState} from 'react';

import {Form} from './Form';
import {TodoList} from './TodoList';

import svgUrl from "./Assets/images/sprite.svg";

import './_Todo.scss';

let timer ='';

export default function Todo(){
  const [items, setItems] = useState([
    {idx: 0, value: '寫程式', done: true, 'time': 1500},
    {idx: 1, value: '練英文', done: true, 'time': 1500},
    {idx: 2, value: '看直播', done: false, 'time': 1500},
    {idx: 3, value: '打電玩', done: true, 'time': 1500}
  ]);
  const [onOff, setOnOff] = useState(false);
  const [target, setTarget] = useState(items[0]);

  clearTimeout(timer);
  
  if(onOff){
    timer = setTimeout(() => {
      countdown(target)
    }, 1000);
  }


  function countdown(value){
    const newItem = value;
    newItem.time = value.time -1;
    setItems([
      ...items,
      newItem
    ]);
  }

  function formatMinute(secs){
    const min = parseInt(secs / 60);
    const sec = secs % 60 || '00';
    return min.toString() + ':' + sec.toString();
  }

  function handleSubmitTodo(e, value){
    e.preventDefault();
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

  const itemsDOM = [];
  for (let i = 0; i < items.length; i++){
    itemsDOM.push(
      <TodoList
        key={items[i].idx}
        data={items[i]}
        onChange={handleChange}
        onClick={() => setTarget(items[i])}
      />
    );
    if (i === 3)
      break;
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
            onClick={() => setOnOff(!onOff)}
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
