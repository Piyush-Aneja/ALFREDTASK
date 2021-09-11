import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { Todoitem } from "./Todoitem";
import { Addtodo } from "./Addtodo";
import noTodoImg from "../assets/no_todo.png";
import "./todoContainer.css";
export const TodosContainer = () => {
  const { todos, setTodo, NewTodoStatus, setNewTodoStatus } =
    useContext(TodoContext);

  function deletetodo(item) {
    console.log("i m on delete", item);
    setTodo(
      todos.filter((e) => {
        return e !== item;
      })
    );
  }

  return (
    <div>
      <h1 className="todohead">
        <i className="fas fa-clipboard-list"></i> Todo list.!!!
      </h1>

      <div className="Todocontainer">
        <button className="resetBtn" onClick={() => setTodo("")}>
          Reset
        </button>
        {todos.length === 0 ? (
          <h1 className="text-center">
            <img
              src={noTodoImg}
              alt="No to List"
              style={{
                backgroundColor: "orange",
                width: "320px",
                position: "relative",
                left: "2px",
              }}
            />
          </h1>
        ) : (
          todos.map((todols) => {
            console.log("came");
            return (
              <Todoitem item={todols} key={todols.id} deletetodo={deletetodo} />
            );
          })
        )}
        {NewTodoStatus === 1 && <Addtodo />}

        <i
          className="fas fa-plus-circle fa-lg"
          onClick={() => setNewTodoStatus(1)}
        ></i>
      </div>
    </div>
  );
};
