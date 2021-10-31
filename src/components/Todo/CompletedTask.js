import { useContext } from "react";
import CompletedTaskList from "./CompletedTaskList";
import { TaskContext } from "./Content";

const CompletedTask = () => {
  const { completedTasks } = useContext(TaskContext);
  return (
    <div className="task-box">
      <h3 className="heading-tasks">Completed Tasks</h3>
      <ul className="mt-5 text-md">
        {completedTasks.length === 0 ? (
          <h3 className="text-center">No task initiated</h3>
        ) : (
          completedTasks.map((task, index) => (
            <CompletedTaskList key={index} id={index} task={task} />
          ))
        )}
      </ul>
    </div>
  );
};

export default CompletedTask;
