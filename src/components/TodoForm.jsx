import  { useState } from 'react';


function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert('Enter a task.');
      return;
    }
    if (!time) {
      alert('Please set a time for the task.');
      return;
    }

    onAddTodo(text,time);
    setText('');
    setTime('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;