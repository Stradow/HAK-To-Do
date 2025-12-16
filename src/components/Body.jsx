import { useState } from "react";
import dailyTasks from "../data.json";

function Body({ selectedDay }) {
  const [tasks, setTasks] = useState(dailyTasks);

  const [newTaskText, setNewTaskText] = useState("");

  function checkBoxChange(taskId) {
    const updatedTasks = tasks.map((oneTask) => {
      if (oneTask.id !== taskId) return oneTask;

      const doneDays = oneTask.doneDays || [];

      const isDoneToday = doneDays.includes(selectedDay);

      return {
        ...oneTask,
        doneDays: isDoneToday
          ? doneDays.filter((day) => day !== selectedDay)
          : [...doneDays, selectedDay],
      };
    });
    setTasks(updatedTasks);
  }

  function handleDeleteTask(taskId) {
    const updatedTasks = tasks
      .map((oneTask) => {
        if (oneTask.id !== taskId) return oneTask;

        const updatedDays = oneTask.days.filter((day) => day !== selectedDay);

        return {
          ...oneTask,
          days: updatedDays,
          doneDays: (oneTask.doneDays || []).filter(
            (day) => day !== selectedDay
          ),
        };
      })
      .filter((oneTask) => oneTask.days.length > 0);

    setTasks(updatedTasks);
  }

  const visibleTasks = tasks.filter((oneTask) => {
    return oneTask.days.includes(selectedDay);
  });

  function handleAddTask(event) {
    event.preventDefault();

    if (newTaskText.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      isDone: false,
      days: [selectedDay],
    };

    setTasks([newTask, ...tasks]);
    console.log(setTasks);
  }

  return (
    <div className="body">
      {visibleTasks.map((oneTask) => (
        <div id="daily-task-container" key={oneTask.id}>
          <input
            type="checkbox"
            checked={(oneTask.doneDays || []).includes(selectedDay)}
            onChange={() => checkBoxChange(oneTask.id)}
          />
          <span>{oneTask.text}</span>

          <button onClick={() => handleDeleteTask(oneTask.id)}>Delete</button>
        </div>
      ))}
      <form onSubmit={handleAddTask}>
        <label>
          Add task:
          <input
            type="text"
            name="task"
            value={newTaskText}
            onChange={(event) => {
              // handleAddTask(event.target.value);
              setNewTaskText(event.target.value);
            }}
            placeholder="Add your new task here"
          ></input>
        </label>
        <button onClick={handleAddTask}>Add</button>
      </form>
    </div>
  );
}

export default Body;
