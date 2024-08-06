//  src/app/page.js

"use client";
import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TodoHero from "@/components/TodoHero";
import TodoList from "@/components/TodoList";

function Home() {
  const [todos, setTodos] = React.useState([]);
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;
  // console.log(todos);
  // console.log(todos_completed);
  // console.log(total_todos);
  return (
    <div className="wrapper">
      <Header />
      <TodoHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default Home;