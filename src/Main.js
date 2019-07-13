import React, {useState} from 'react';

import FetchData from './FetchData';
import Todo from './Todo';
import Sidebar from './Sidebar';
import Modal from './Modal';

import './_Main.scss';

let timer ='';

export default function Main(){
    const [items, handleSubmitTodo, handleChange, countdown] = FetchData();
    const [onOff, setOnOff] = useState(false);
    const [target, setTarget] = useState(items[0]);

    clearTimeout(timer);
    if(onOff){
        timer = setTimeout(() => {
        countdown(target)
        }, 1000);
    }

    function formatMinute(secs){
        const min = parseInt(secs / 60);
        const sec = secs % 60 || '00';
        return min.toString() + ':' + sec.toString();
    }

    function handleOnOffClick(){
        setOnOff(!onOff);
    }

    const [ModalDOM, handleModalOpen] = Modal({
      data: items,
      handleSubmitTodo: handleSubmitTodo,
      handleChange: handleChange,
      formatMinute: formatMinute,
      target: target,
      setTarget: setTarget,
      onOff: onOff,
      handleOnOffClick: handleOnOffClick
    });
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
                handleModalOpen={handleModalOpen}
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
                handleModalOpen={handleModalOpen}
            />
            {ModalDOM}
        </div>
    );
}
