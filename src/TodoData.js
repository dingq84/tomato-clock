import { useState } from 'react';

export default function TodoData() {
  const [items, setItems] = useState([
    { idx: 0, value: 'THE FIRST THING TO DO TODAY', done: false, 'time': 5 },
    { idx: 1, value: 'THE SECOND THING TO DO TODAY', done: false, 'time': 1500 },
    { idx: 2, value: 'THE THIRD THING TO DO TODAY', done: false, 'time': 1500 },
    { idx: 3, value: 'THE FORTH THING TO DO TODAY', done: false, 'time': 1500 }
  ]);
  function handleSubmitTodo(e, value) {
    e.preventDefault();
    const newItems = [...items, {
      idx: Math.max(...items.map(item => item.idx)) + 1,
      value: value,
      time: 1500,
      done: false
    }];
    setItems(newItems);
  }

  function handleChange(e, idx) {
    const newItems = [...items];
    newItems[idx].done = !newItems[idx].done;
    setItems(newItems);
  }

  function countdown(value) {
    value.time = value.time - 1;
    setItems([
      ...items
    ]);
  }

  return [items, handleSubmitTodo, handleChange, countdown];
}
