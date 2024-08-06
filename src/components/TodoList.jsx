// src/components/TodoList.jsx

function TodoList({ todos, setTodos }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={index} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

function Item({ item, setTodos }) {
  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };
  return (
    <li className="todo_item" id={item?.id}>
      <button className="todo_items_left" onClick={completeTodo}>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={34}
          height={34}
          stroke="#22C55E"
          fill={item.is_completed ? "#22C55E" : "#0d0d0d"}
        >
          <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        </svg>
        <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>
          {item?.title}
        </p>
      </button>
      <div className="todo_items_right">
        <button>
          <span className="visually-hidden">Edit</span>
          <svg>
            <path d="" />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default TodoList;
