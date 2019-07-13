import React, {useState} from 'react';

import {Form} from './Form';
import {TodoList} from './TodoList';

import svgUrl from './Assets/images/sprite.svg';

import './_Modal.scss';

export default function Modal({
    data, 
    handleChange,
    handleSubmitTodo,
    target, 
    formatMinute, 
    setTarget, 
    onOff, 
    handleOnOffClick
}){
const [openOrClose, setOpenOrClose] = useState(false);
function handleModalOpen(){
    setOpenOrClose(!openOrClose);
}

const itemsTODODOM = [];
const itemsDONEDOM = [];
  for (let i = 0; i < data.length; i++){
    if(data[i].done)
        itemsDONEDOM.push(
            <TodoList
            key={data[i].idx}
            data={data[i]}
            onChange={handleChange}
            onClick={() => setTarget(data[i])}
            />
        )
    else
        itemsTODODOM.push(
        <TodoList
            key={data[i].idx}
            data={data[i]}
            onChange={handleChange}
            onClick={() => setTarget(data[i])}
        />
        );
  }

    const ModalDOM = 
        <div 
            className="Modal"
            style={{display: (openOrClose) ? 'block' : 'none'}}
        >
            <div className="Modal__sidebar">
                <div className="Modal__sidebar__btn">
                    <div className="Modal__sidebar__btn--1">
                        <svg 
                    
                        >
                            <use xlinkHref={`${svgUrl}#icon-sidebar`} />:
                        </svg>
                        <div>TO-DO LIST</div>
                    </div>
                    <div className="Modal__sidebar__btn--2">
                        <svg 
            
                        >
                            <use xlinkHref={`${svgUrl}#icon-assessment`} />:
                        </svg>
                        <div>ANALYTICS</div>
                    </div>
                    <div className="Modal__sidebar__btn--3">
                        <svg 
                        
                        >
                            <use xlinkHref={`${svgUrl}#icon-musicplay`} />:
                        </svg>
                        <div>RINGTONES</div>
                    </div>
                </div>
                <div 
                    className="Modal__sidebar__clock" 
                    onClick={handleOnOffClick}
                >
                    <svg
                        className="Modal__sidebar__clock--btn"
                        // onClick={handleOnOffClick}
                    >
                        {
                        (onOff)?
                            <use xlinkHref={`${svgUrl}#icon-pause`}/>
                            :
                            <use xlinkHref={`${svgUrl}#icon-play`}/>
                        }
                    </svg>
                    <div className="Modal__sidebar__clock--text">
                        <div className="Modal__sidebar__clock--text--time">
                            {formatMinute(target.time)}
                        </div>
                        <div className="Modal__sidebar__clock--text--thing">
                            {target.value}
                        </div>
                    </div>
                </div>
            </div>
            <div className="Modal__tododetail">
                <Form 
                     className="Modal__tododetail__form"
                     onSubmitTodo={handleSubmitTodo}
                />
                <div className="Modal__tododetail__todo">
                    <div className="Modal__tododetail__todo__header">
                        TODO
                    </div> 
                    <div className="Modal__tododetail__todo__detail">
                        {itemsTODODOM}
                    </div>
                </div>
                <div className="Modal__tododetail__done">
                    <div className="Modal__tododetail__done__header">
                        DONE
                    </div>
                    <div className="Modal__tododetail__done__detail">
                        {itemsDONEDOM}
                    </div>
                </div>
            </div>
            <svg 
                className="Modal__close"
                onClick={handleModalOpen}
            >
                <use xlinkHref={`${svgUrl}#icon-close`} />
            </svg>
        </div>;

    return [ModalDOM, handleModalOpen];
}