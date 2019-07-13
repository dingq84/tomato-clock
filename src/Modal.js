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
const [bookMark, setBookMark] = useState('');
const [expand, setExpand] = useState({
  'todo': true,
  'done': true
});
function handleModalOpen(value){
    setOpenOrClose(!openOrClose);
    setBookMark(value);
}

function expandOrCollapse(type){
  setExpand({
    ...expand,
    [type]: !expand[type]
  })
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
                    <div
                      className="Modal__sidebar__btn--1"
                      onClick={() => setBookMark(1)}
                    >
                        <svg
                          style={{fill: bookMark === 1 ? '#FF4384' : ''}}
                        >
                            <use xlinkHref={`${svgUrl}#icon-sidebar`} />:
                        </svg>
                        <div
                          style={{color: bookMark === 1 ? '#FF4384' : ''}}
                        >TO-DO LIST</div>
                    </div>
                    <div
                      className="Modal__sidebar__btn--2"
                      onClick={() => setBookMark(2)}
                    >
                        <svg
                          style={{fill: bookMark === 2 ? '#FF4384' : ''}}
                        >
                            <use xlinkHref={`${svgUrl}#icon-assessment`} />:
                        </svg>
                        <div
                          style={{color: bookMark === 2 ? '#FF4384' : ''}}
                        >ANALYTICS</div>
                    </div>
                    <div
                      className="Modal__sidebar__btn--3"
                      onClick={() => setBookMark(3)}
                    >
                        <svg
                          style={{fill: bookMark === 3 ? '#FF4384' : ''}}
                        >
                            <use xlinkHref={`${svgUrl}#icon-musicplay`} />:
                        </svg>
                        <div
                          style={{color: bookMark === 3 ? '#FF4384' : ''}}
                        >RINGTONES</div>
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
                    <div
                      className="Modal__tododetail__todo__header"
                      onClick={() => expandOrCollapse('todo')}
                    >
                      <svg >
                          {
                            expand['todo'] ?
                            <use xlinkHref={`${svgUrl}#icon-down`} />:
                            <use xlinkHref={`${svgUrl}#icon-up`} />
                          }

                      </svg>
                        TODO
                    </div>
                    <div
                      className="Modal__tododetail__todo__detail"
                      style={{
                        display: expand['todo'] ? 'block' : 'none',
                        transition: '.5s'
                      }}
                    >
                        {itemsTODODOM}
                    </div>
                </div>
                <div className="Modal__tododetail__done">
                    <div
                      className="Modal__tododetail__done__header"
                      onClick={() => expandOrCollapse('done')}
                    >
                      <svg >
                          {
                            expand['done'] ?
                            <use xlinkHref={`${svgUrl}#icon-down`} />:
                            <use xlinkHref={`${svgUrl}#icon-up`} />
                          }

                      </svg>
                        DONE
                    </div>
                    <div
                      className="Modal__tododetail__done__detail"
                      style={{display: expand['done'] ? 'block' : 'none'}}
                    >
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
