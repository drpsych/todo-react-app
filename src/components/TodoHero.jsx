// src/components/TodoHero.jsx

import { useEffect } from "react";

/**
 * Renders a section that displays the progress of completed todos.
 *
 * @param {object} props - The component props.
 * @param {number} props.todos_completed - The number of completed todos.
 * @param {number} props.total_todos - The total number of todos.
 * @returns {JSX.Element} - The TodoHero component.
 */
function TodoHero({ todos_completed, total_todos }) {
  // Calculate the progress percentage
  const progress = (todos_completed / total_todos) * 100;
  // Set the width of the progress bar
  useEffect(() => {
    const progressBar = document.getElementById("progress");
    const newProgress =
      total_todos === 0 ? 0 : (todos_completed / total_todos) * 100;
    progressBar.style.width = `${newProgress}%`;
  }, [todos_completed, total_todos]);

  return (
    <section className="todohero_section">
      <div className="stats_text">
        {todos_completed === 0 ? (
          <p className="text_large">No Tasks Done</p>
        ) : todos_completed < total_todos ? (
          <p className="text_large">Tasks Done</p>
        ) : (
          <p className="text_large">Congrats</p>
        )}
        {todos_completed === 0 ? (
          <p className="text_small">Get to work!</p>
        ) : todos_completed < total_todos ? (
          <p className="text_small">Keep it up!</p>
        ) : (
          <p className="text_small">All tasks completed!</p>
        )}
        <div id="progress_bar">
          <div id="progress"></div>
        </div>
      </div>
      <div className="stats_numbers">
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
}

export default TodoHero;
