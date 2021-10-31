import { useContext, useState, useEffect } from "react";

import { TaskContext } from "./Content";

const AddTask = () => {
  const [value, setValue] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((arr) => [...arr, value]);
    setValue("");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <form className="w-4/6 flex-center" onSubmit={handleSubmit}>
      <input
        type="text"
        id="task"
        name="task"
        placeholder="Add Task"
        className="mt-8 border border-green-500 focus:border-blue-500 h-10 w-5/6 placeholder-gray-300 font-bold rounded-md pl-2"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default AddTask;
