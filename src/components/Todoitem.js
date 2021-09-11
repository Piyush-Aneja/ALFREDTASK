import React, { useState, useRef, useContext, useEffect } from "react";
import { TodoContext } from "./TodoContext";
import "./todoItem.css";
export const Todoitem = (props) => {
  const [hideStatus, sethideStatus] = useState(0);
  const {
    todos,
    setNewTodoStatus,
    setDesc,
    setEditMode,
    editIemId,
    seteditIemId,
  } = useContext(TodoContext);

  const TodoRefDesc = useRef();

  function editTask(id, TodoRefDesc) {
    let item = todos.find((todo) => {
      return todo.id === id;
    });

    console.log("editing this", item.desc);
    console.log(editIemId);
    setDesc(item.desc);
  }
  const [lineStyle, setlineStyle] = useState("none");
  useEffect(() => {
    if (TodoRefDesc.current != null)
      TodoRefDesc.current.style.textDecoration = lineStyle;
  }, [lineStyle]);

  return (
    <>
      {!hideStatus ? (
        <>
          <div className="todoItem">
            <input
              className="fas fa-uncheck-square"
              type="checkbox"
              onChange={(e) => {
                // console.log(TodoRefDesc.current);
                e.currentTarget.checked
                  ? setlineStyle("line-through")
                  : setlineStyle("none");
              }}
            />
            <span className="todoDesc" ref={TodoRefDesc}>
              {props.item.desc}
            </span>

            <i
              className="fas fa-trash-alt"
              onClick={() => props.deletetodo(props.item)}
            ></i>

            <i
              className="fas fa-eye-slash"
              style={{}}
              onClick={() => sethideStatus(1)}
            ></i>

            <i
              className="fas fa-edit"
              onClick={() => {
                console.log("props", props.item.id);
                setNewTodoStatus(1);
                setEditMode("true");
                seteditIemId(props.item.id);
                console.log("edit item id,", editIemId);

                editTask(props.item.id, TodoRefDesc);
              }}
            ></i>
          </div>
        </>
      ) : (
        <>
          <div
            className="far fa-eye fa-lg"
            onClick={() => sethideStatus(0)}
            style={
              {
                // padding: "20px",
              }
            }
          ></div>
        </>
      )}
    </>
  );
};
