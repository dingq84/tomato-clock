import React, { useState } from 'react';

import { Form } from './Form';
import { TodoList } from './TodoList';

import svgUrl from './Assets/images/sprite.svg';
import chart from './Assets/images/chart.png';

import './_ModalDetail.scss';

export default function ModalDetail({
    data,
    bookMark,
    handleSubmitTodo,
    handleChange,
    setTarget,
    playControl,
    workBreakMusic
}) {
    const [expand, setExpand] = useState({
        'todo': true,
        'done': true
    });

    function expandOrCollapse(type) {
        setExpand({
            ...expand,
            [type]: !expand[type]
        })
    }

    let modalDetail;
    switch (bookMark) {
        case 1:
            renderTodoList();
            break;
        case 2:
            renderChart();
            break;
        case 3:
            renderMusic();
            break;
        default:
            modalDetail = '';
    }

    function renderTodoList() {
        const itemsTODODOM = [];
        const itemsDONEDOM = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].done)
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

        modalDetail =
            <>
                <Form
                    className="Modal__detail__section1"
                    onSubmitTodo={handleSubmitTodo}
                />
                <div className="Modal__detail__section2">
                    <div
                        className="Modal__detail__section2__header"
                        onClick={() => expandOrCollapse('todo')}
                    >
                        <svg >
                            {
                                expand['todo'] ?
                                    <use xlinkHref={`${svgUrl}#icon-down`} /> :
                                    <use xlinkHref={`${svgUrl}#icon-up`} />
                            }

                        </svg>
                        TODO
                </div>
                    <div
                        className="Modal__detail__section2__detail"
                        style={{
                            display: expand['todo'] ? 'block' : 'none',
                            transition: '.5s'
                        }}
                    >
                        {itemsTODODOM}
                    </div>
                </div>
                <div className="Modal__detail__section3">
                    <div
                        className="Modal__detail__section3__header"
                        onClick={() => expandOrCollapse('done')}
                    >
                        <svg >
                            {
                                expand['done'] ?
                                    <use xlinkHref={`${svgUrl}#icon-down`} /> :
                                    <use xlinkHref={`${svgUrl}#icon-up`} />
                            }

                        </svg>
                        DONE
                </div>
                    <div
                        className="Modal__detail__section3__detail"
                        style={{ display: expand['done'] ? 'block' : 'none' }}
                    >
                        {itemsDONEDOM}
                    </div>
                </div>
            </>
    }

    function renderChart() {
        modalDetail =
            <>
                <div className="Modal__detail__section2">
                    <div
                        className="Modal__detail__section2__header"
                    >
                        FOCUS TIME
                    </div>
                    <div
                        className="Modal__detail__section2__detail"
                    >
                        <div
                            style={{
                                width: '200px',
                                height: '100%',
                                float: 'left',
                                fontSize: '16px',
                                color: '#fff'
                            }}
                        >
                            TODAY
                            <div>
                                <span
                                    style={{
                                        color: '#FF4384',
                                        fontSize: '64px'
                                    }}
                                >
                                    20
                                </span>
                                <span
                                    style={{
                                        color: 'rgba(255, 255, 255, 0.2)',
                                        fontSize: '16px',
                                        marginLeft: '8px'
                                    }}
                                >
                                    /TOMATO
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                width: '200px',
                                height: '100%',
                                float: 'right',
                                fontSize: '16px',
                                color: '#fff'
                            }}
                        >
                            WEEK
                            <div>
                                <span
                                    style={{
                                        color: '#FF4384',
                                        fontSize: '64px'
                                    }}
                                >
                                    108
                                    </span>
                                <span
                                    style={{
                                        color: 'rgba(255, 255, 255, 0.2)',
                                        fontSize: '16px',
                                        marginLeft: '8px'
                                    }}
                                >
                                    /TOMATO
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Modal__detail__section3">
                    <div
                        className="Modal__detail__section3__header"
                    >
                        <div
                            style={{ float: 'left' }}
                        >
                            CHART
                        </div>
                        <div
                            style={{
                                float: 'right',
                                fontSize: '16px',
                                marginRight: '30px'
                            }}
                        >
                            &lt; 2019.7.1 - 2019.7.7 &gt;
                        </div>
                    </div>
                    <div
                        className="Modal__detail__section3__detail"
                    >
                        <img
                            src={chart}
                            alt="this is tomato chart"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            </>
    }

    function renderMusic() {
        modalDetail =
            <>
                <div className="Modal__detail__section2">
                    <div
                        className="Modal__detail__section2__header"
                    >
                        WORK
                    </div>
                    <div
                        className="Modal__detail__section2__detail"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <label>
                            <input
                                type="radio"
                                checked={workBreakMusic.work === 'none'}
                                name="work__music"
                                onChange={() => playControl('work', 'none')}
                            />
                            <span>NONE</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'default'}
                                onChange={() => playControl('work', 'default')}
                            />
                            <span>DEFAULT</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'alarm'}
                                onChange={() => playControl('work', 'alarm')}
                            />
                            <span>ALARM</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'alert'}
                                onChange={() => playControl('work', 'alert')}
                            />
                            <span>ALERT</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'beep'}
                                onChange={() => playControl('work', 'beep')}
                            />
                            <span>BEEP</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'bell'}
                                onChange={() => playControl('work', 'bell')}
                            />
                            <span>BELL</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'weapon'}
                                onChange={() => playControl('work', 'weapon')}
                            />
                            <span>WEAPON</span>
                        </label>
                        <label >
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'bugle'}
                                onChange={() => playControl('work', 'bugle')}
                            />
                            <span>BUGLE</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'digital'}
                                onChange={() => playControl('work', 'digital')}
                            />
                            <span>DIGITAL</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'drop'}
                                onChange={() => playControl('work', 'drop')}
                            />
                            <span>DROP</span>
                        </label>
                        <label >
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'horn'}
                                onChange={() => playControl('work', 'horn')}
                            />
                            <span>HORN</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'music'}
                                onChange={() => playControl('work', 'music')}
                            />
                            <span>MUSIC</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'ring'}
                                onChange={() => playControl('work', 'ring')}
                            />
                            <span>RING</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'warning'}
                                onChange={() => playControl('work', 'warning')}
                            />
                            <span>WARNING</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="work__music"
                                checked={workBreakMusic.work === 'whistle'}
                                onChange={() => playControl('work', 'whistle')}
                            />
                            <span>WHISTLE</span>
                        </label>
                    </div>
                </div>
                <div className="Modal__detail__section3">
                    <div
                        className="Modal__detail__section3__header"
                    >
                        BREAK
                    </div>
                    <div
                        className="Modal__detail__section3__detail"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-end'
                        }}
                    >

                        <label>
                            <input
                                type="radio"
                                checked={workBreakMusic.break === 'none'}
                                name="break__music"
                                onChange={() => playControl('break', 'none')}
                            />
                            <span>NONE</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'default'}
                                onChange={() => playControl('break', 'default')}
                            />
                            <span>DEFAULT</span>
                        </label>
                        <label >
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'alarm'}
                                onChange={() => playControl('break', 'alarm')}
                            />
                            <span>ALARM</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'alert'}
                                onChange={() => playControl('break', 'alert')}
                            />
                            <span>ALERT</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'beep'}
                                onChange={() => playControl('break', 'beep')}
                            />
                            <span>BEEP</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'bell'}
                                onChange={() => playControl('break', 'bell')}
                            />
                            <span>BELL</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'weapon'}
                                onChange={() => playControl('break', 'weapon')}
                            />
                            <span>WEAPON</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'bugle'}
                                onChange={() => playControl('break', 'bugle')}
                            />
                            <span>BUGLE</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'digital'}
                                onChange={() => playControl('break', 'digital')}
                            />
                            <span>DIGITAL</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'drop'}
                                onChange={() => playControl('break', 'drop')}
                            />
                            <span>DROP</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'horn'}
                                onChange={() => playControl('break', 'horn')}
                            />
                            <span>HORN</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'music'}
                                onChange={() => playControl('break', 'music')}
                            />
                            <span>MUSIC</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'ring'}
                                onChange={() => playControl('break', 'ring')}
                            />
                            <span>RING</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'warning'}
                                onChange={() => playControl('break', 'warning')}
                            />
                            <span>WARNING</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="break__music"
                                checked={workBreakMusic.break === 'whistle'}
                                onChange={() => playControl('break', 'whistle')}
                            />
                            <span>WHISTLE</span>
                        </label>
                    </div>
                </div>
            </>
    }

    return modalDetail;
}