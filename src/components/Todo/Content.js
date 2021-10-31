import { createContext, useState } from "react";

import AddTask from "./AddTask";
import TodoBox from "./TodoBox";

export const TaskContext = createContext(null);

const Content = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  return (
    <main className="container mx-auto mt-11 flex-center flex-col">
      <TaskContext.Provider
        value={{ tasks, setTasks, completedTasks, setCompletedTasks }}
      >
        <h2 className="text-3xl space-x-2 font-bold underline text-green-600 ">
          Todo List
        </h2>
        <AddTask />
        <TodoBox />
      </TaskContext.Provider>
    </main>
  );
};

export default Content;
