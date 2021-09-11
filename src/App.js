
import './App.css';
import React, { useState } from 'react'
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { TodosContainer } from './components/TodosContainer';
import { TodoContext } from "./components/TodoContext";


function App() {
  const [NewTodoStatus, setNewTodoStatus] = useState(0)
  const [todos, setTodo] = useState([]);
  const [userinputDesc, setDesc] = useState("");
  const [editMode, setEditMode] = useState(false)
  const [editIemId, seteditIemId] = useState(-1)

  return (
    <>
      <Navbar />
      <TodoContext.Provider value={{ todos, setTodo, NewTodoStatus, setNewTodoStatus, userinputDesc, setDesc, editMode, setEditMode, editIemId, seteditIemId }}>

        <TodosContainer />

      </TodoContext.Provider>

      <Footer />
    </>


  );
}

export default App;
