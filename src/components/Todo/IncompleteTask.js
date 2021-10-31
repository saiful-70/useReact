import { useContext } from "react";
import { TaskContext } from "./Content";
import IncompleteTaskList from "./IncompleteTaskList";

const IncompleteTask = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="task-box border-b-4 lg:border-0 lg:border-r-4 border-green-700">
      <h3 className="heading-tasks">Tasks</h3>
      <ul className="mt-5 text-md">
        {tasks.length === 0 ? (
          <h3 className="text-center">No task initiated</h3>
        ) : (
          tasks.map((task, index) => (
            <IncompleteTaskList key={index} id={index} task={task} />
          ))
        )}
      </ul>
    </div>
  );
};

export default IncompleteTask;
