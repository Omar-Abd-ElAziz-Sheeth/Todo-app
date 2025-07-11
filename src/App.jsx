import React from "react";
import Todo from "./components/Todo";
const App = () => {
  return (
    <div className="min-h-screen ">
      <h1 className=" bg-blue-400 p-4 text-2xl text-white  font-bold">
        <p className="welcome-title ">Welcome To Task Add App !</p>
      </h1>
      <Todo />
    </div>
  );
};

export default App;
