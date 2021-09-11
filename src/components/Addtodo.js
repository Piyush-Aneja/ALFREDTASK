import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "./addTodo.css";
export const Addtodo = () => {
  const {
    todos,
    setTodo,
    userinputDesc,
    editIemId,
    editMode,
    setNewTodoStatus,
    setEditMode,
    setDesc,
  } = useContext(TodoContext);
  function addtodo(desc) {
    var todo = {
      id: new Date().getTime().toString(),
      desc: desc,
    };
    console.log(todo);
    setTodo([...todos, todo]);
    setNewTodoStatus(0);

    setDesc("");
    console.log("todos", todos);
  }

  function formsubmit(e) {
    e.preventDefault();
    if (!userinputDesc) alert("Title or Description cannot be empty");
    else if (editMode) {
      setTodo(
        todos.map((todo) => {
          if (todo.id === editIemId) {
            todo.desc = userinputDesc;
          }
          return todo;
        })
      );
      setEditMode(0);
      setNewTodoStatus(0);

      setDesc("");
    } else {
      console.log("list to be added");
      addtodo(userinputDesc);
      //   setNewTodoStatus(0);
    }
  }
  return (
    <div>
      <form onSubmit={formsubmit}>
        <input
          className="TodoListInput"
          type="text"
          value={userinputDesc}
          name="desc"
          id="titleInp"
          placeholder="Add your todo list"
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="submitBtn">Submit</button>
      </form>
    </div>
  );
};
