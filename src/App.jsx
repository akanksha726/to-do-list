import React, { useState, useEffect } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from   "./components/TodoList";
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
const [todos, setTodos] = useState([]);

const handleAddTodo = (text, time) => {
  if(!time || !text) return;

  const today = new Date();
  const [hours, minutes] = time.split(':');

  if(!hours || !minutes) {
    alert("Invaild time format.");
    return;
  }
  const taskTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    parseInt(hours),
    parseInt(minutes)
  );

  const newTodo = {
    id: Date.now(),
    text,
    timestamp: taskTime.toISOString(), 
    completed: false,
    notified: false, 
  };
  setTodos((prev) => [newTodo, ...prev]);
};
     

 useEffect(() => {
  const checkReminders = setInterval(() => {
    const now = new Date();
    setTodos((prev) =>
      prev.map((todo) => {
        if (
          !todo.notified &&
          !todo.completed &&
          new Date(todo.timestamp) <= now
        ) {
            if(Notification.permission ==="granted") {
              new Notification("⏰ Task Reminder",{
                body:todo.text,
                  icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
              });
            }else {
              alert(`⏰ Reminder: ${todo.text} is due now!`);
            }
          return { ...todo, notified: true };
            }
        return todo;
      })
    );
  }, 30000); 

  return () => clearInterval(checkReminders);
}, []);

  const handleToggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>📝 daily work To-Do List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;