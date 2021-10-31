import { useContext, useState } from "react";

import { TaskContext } from "./Content";

const AddTask = () => {
  const [value, setValue] = useState("");
  const { setTasks } = useContext(TaskContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((arr) => [...arr, value]);
    setValue("");
  };

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
      {/* <button className="btn" type="submit" onSubmit={handleSubmit}>
        Add
      </button> */}
    </form>
  );
};

export default AddTask;
