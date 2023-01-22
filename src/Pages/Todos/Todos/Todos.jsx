import "./todos.scss";
import { useState } from "react";
// import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../components/Task";

import { Section } from "../../../Section";
import { useLocalStorageValue } from "../hooks/useLocalStorageValue";

export const Todos = () => {
  const [toDo, setToDo] = useLocalStorageValue("Todos", []);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  // useEffect(() => {
  //   localStorage.setItem("Todos", JSON.stringify(toDo));
  // }, [toDo]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask) {
      let taskId = uuidv4();
      let newEntry = {
        id: taskId,
        title: newTask,
        status: false,
      };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };
  const markDone = (id) => {
    const newTasks = toDo.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: !task.status,
        };
      }
      return task;
    });
    setToDo(newTasks);
  };
  const cancelUpdate = () => {
    setUpdateData("");
  };
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <Section>
      <div className="task-container">
        <h1>Todo App</h1>

        {updateData && updateData ? (
          <form className="form-todo">
            <input
              type={"text"}
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}
              className="input"
            />

            <div className="input-btns">
              <button className="input-btn success " onClick={updateTask}>
                Update
              </button>
              <button className="input-btn warning" onClick={cancelUpdate}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <form className="form-todo">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="input"
            />

            <div className="input-btns">
              <button className="input-btn success" onClick={addTask}>
                Add Task
              </button>
            </div>
          </form>
        )}
        {toDo && toDo.length ? "" : "No tasks..."}
      </div>

      <Task
        toDo={toDo}
        onMark={markDone}
        onSetUpdateData={setUpdateData}
        onDelete={deleteTask}
      />
    </Section>
  );
};
