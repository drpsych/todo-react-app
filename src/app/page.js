//  src/app/page.js

import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TodoHero from "@/components/TodoHero";
import TodoList from "@/components/TodoList";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <TodoHero todos_completed={0} total_todos={0} />
      <Form />
      <TodoList todos={[]} />
    </div>
  );
}
export default Home;