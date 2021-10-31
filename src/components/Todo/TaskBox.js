const TaskBox = ({ extendClass, children }) => {
  return (
    <div className={`task-box ${extendClass}`}>
      <h3 className="heading-tasks">Completed Tasks</h3>
      <ul className="mt-5 text-md">{children}</ul>
    </div>
  );
};

export default TaskBox;
