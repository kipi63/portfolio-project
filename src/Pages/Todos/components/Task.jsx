import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import "./task.scss";

export const Task = ({ toDo, onMark, onSetUpdateData, onDelete }) => {
  return (
    <>
      {toDo.map((task) => (
        <div className="tasks" key={task.id}>
          <div className={task.status ? "task done" : " task"}>
            {task.title}
          </div>
          <div className="icons-container">
            <span onClick={() => onMark(task.id)}>
              <FaCheck className="complete" />
            </span>
            {task.status ? null : (
              <span
                className="edit"
                onClick={() =>
                  onSetUpdateData({
                    id: task.id,
                    title: task.title,
                    satus: task.status,
                  })
                }
              >
                <FaEdit />
              </span>
            )}
            <span onClick={() => onDelete(task.id)} className="delete">
              <FaTrash />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
