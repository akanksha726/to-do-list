
function TodoItem({ todo, toggleTodo, deleteTodo }) {
 const formattedTime = new Date(todo.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="todo-item">
     
      <span onClick={() => toggleTodo(todo.id)}   className={todo.completed ? 'completed' : ''}>
      
        {todo.text} {todo.timestamp && (
         <span style={{ marginLeft: '10px', fontSize: '0.85rem', color: '#00ffc8aa' }}>
            🕒 {formattedTime}
          </span>
          )}
          </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "10px" }}>
        ❌
      </button>
   </div>
  );
}

export default TodoItem;
