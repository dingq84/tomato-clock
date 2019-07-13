import React, {useState} from 'react';

import Todo from './Todo';
import Sidebar from './Sidebar';

import './_Main.scss';

let timer ='';

export default function Main(){
    const [items, setItems] = useState([
        {idx: 0, value: 'THE FIRST THING TO DO TODAY', done: true, 'time': 1500},
        {idx: 1, value: 'THE SECOND THING TO DO TODAY', done: true, 'time': 1500},
        {idx: 2, value: 'THE THIRD THING TO DO TODAY', done: false, 'time': 1500},
        {idx: 3, value: 'THE FORTH THING TO DO TODAY', done: true, 'time': 1500}
    ]);
    const [onOff, setOnOff] = useState(false);
    const [target, setTarget] = useState(items[0]);

    clearTimeout(timer);
  
    if(onOff){
        timer = setTimeout(() => {
        countdown(target)
        }, 1000);
    }

    function handleSubmitTodo(e, value){
        e.preventDefault();
        const newItems = [...items, {
          idx: Math.max(...items.map(item => item.idx)) + 1,
          value: value,
          time: 1500,
          done: false
        }];
        setItems(newItems);
    }

    function handleChange(e, idx){
        const newItems = [...items];
        newItems[idx].done = !newItems[idx].done;
        setItems(newItems);
    }

    function countdown(value){
        console.log(value.idx);
        value.time = value.time -1;
        setItems([
          ...items
        ]);
    }

    function formatMinute(secs){
        const min = parseInt(secs / 60);
        const sec = secs % 60 || '00';
        return min.toString() + ':' + sec.toString();
    }

    function handleOnOffClick(){
        setOnOff(!onOff);
    }

    return (
        <div className="clock">
            <Todo  
                data={items} 
                handleSubmitTodo={handleSubmitTodo} 
                handleChange={handleChange}
                formatMinute={formatMinute}
                onOff={onOff}
                target={target}
                setTarget={setTarget}
                handleOnOffClick={handleOnOffClick} 
            />
            <Sidebar 
                data={items}
                handleSubmitTodo={handleSubmitTodo}
                handleChange={handleChange}
                formatMinute={formatMinute}
                target={target}
                setTarget={setTarget}
                onOff={onOff}
                handleOnOffClick={handleOnOffClick} 
            />
        </div>
    );
}
