import React from 'react';

import {TodoList} from './TodoList';

export default function todo(){
  const dataList = [1, 2, 3].map((item, index) => {
    return TodoList({key: index, content: item})
  })
  return(
    <div className="container-todo">
      {dataList}
    </div>
  )
}
