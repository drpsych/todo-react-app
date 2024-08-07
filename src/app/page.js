//  src/app/page.js

"use client";
import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TodoHero from "@/components/TodoHero";
import TodoList from "@/components/TodoList";
import Footer from "@/components/Footer";

function Home() {
  const [todos, setTodos] = React.useState([]);
  
  // Retrieve todos from localStorage when the component mounts
  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

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
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}
export default Home;