import React, { useState } from 'react';

import Todo from './Todo';
import Sidebar from './Sidebar';
import Modal from './Modal';
import TodoData from './TodoData';
import MusicData from './MusicData';

import './_Main.scss';

let timer = '';

export default function Main() {
    const [items, handleSubmitTodo, handleChange, countdown] = TodoData();
    const [audioDOM, playControl, workBreakMusic] = MusicData();
    const [onOff, setOnOff] = useState(false);
    const [target, setTarget] = useState(items[0]);

    clearTimeout(timer);
    if (onOff) {
        if (target.time === 0) {
            playControl('work', workBreakMusic['work']);
            setOnOff(!onOff);
        } else {
            timer = setTimeout(() => {
                countdown(target)
            }, 1000);
        }
    }

    function formatMinute(secs) {
        const min = parseInt(secs / 60);
        let sec = secs % 60 || '00';
        sec = sec.toString().length === 1 ? '0' + sec.toString() : sec;
        return min.toString() + ':' + sec.toString();
    }

    function handleOnOffClick() {
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
        handleOnOffClick: handleOnOffClick,
        playControl: playControl,
        workBreakMusic: workBreakMusic
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
            {audioDOM}
        </div>
    );
}
