import { useState } from "react";
import dailyTasks from "../data.json";

function Body() {
  const [tasks, setTasks] = useState(dailyTasks);

  function checkBoxChange(taskId) {
    const updatedTasks = tasks.map((oneTask) => {
      if (oneTask.id === taskId) {
        return {
          id: oneTask.id,
          text: oneTask.text,
          isDone: !oneTask.isDone,
        };
      }
      return oneTask;
    });
    setTasks(updatedTasks);
  }
  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter((oneTask) => {
      return oneTask.id !== taskId;
    });
  }

  return (
    <div className="body">
      {tasks.map((oneTask) => (
        <div id="daily-task-container" key={oneTask.id}>
          <input
            type="checkbox"
            checked={oneTask.isDone}
            onChange={() => checkBoxChange(oneTask.id)}
          />
          <span>{oneTask.text}</span>

          <button onClick={() => handleDeleteTask(oneTask.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Body;
