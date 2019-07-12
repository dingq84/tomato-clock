import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import Sidebar from './Sidebar';

import "./_base.scss";
import './_index.scss';

ReactDOM.render(
  <div className="clock">
    <Todo />
    <Sidebar />
  </div>
  ,
  document.getElementById('root'));
