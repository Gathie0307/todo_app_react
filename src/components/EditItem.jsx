import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaRegSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {useRef} from 'react'

const EditItem = ({todoText, setTodoText, handleSubmit, updateTodo, setEdit}) => {

  const inputRef =  useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor= "editItem">Edit Task</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Edit Task"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        required
        />
      <button type="submit" aria-label="Add Item" onClick={(e) => updateTodo(e)}>
        <FaRegSave className='save' />
      </button>
      <button type="reset" className='cancel' aria-label="Add Item" onClick={() => {setTodoText(""); setEdit(false);}}>
        <MdCancel />
      </button>
    </form>
  )
}

export default EditItem
