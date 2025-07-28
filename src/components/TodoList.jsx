
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) return <p>No tasks yet !!!</p>;

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={onToggleTodo}
          deleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
