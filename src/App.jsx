import React from 'react'
import './index.css';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import {useState} from 'react';
import {useEffect} from 'react'
import AddItem from './components/AddItem';
import SearchItem  from './components/SearchItem';
import EditItem from './components/EditItem';

function App() {
    const[items, setItems] = useState([]);
    const[newItem, setNewItem] = useState('')
    const[search, setSearch] = useState('');
    const[edit, setEdit] = useState(false);
    const[todoIndex, setTodoIndex] = useState('');
    const[todoText, setTodoText] = useState('');

    useEffect(() => {
      let todosFromLocalStorage = JSON.parse(
        window.localStorage.getItem("shoppinglist")
      );
      if (todosFromLocalStorage) {
        setItems(todosFromLocalStorage);
      } else {
        setItems([]);
      }
    }, []);

    const handleCheck = (id) => {
      console.log(`key: ${id}`);
      const listItems = items.map((item) =>
        item.id === id ? {...item, checked : !item.checked} : item
      );
      setAndSaveItem(listItems);
    }

    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setAndSaveItem(listItems);
    }

    const setAndSaveItem = (newItems) => {
      setItems(newItems)
      localStorage.setItem('shoppinglist', JSON.stringify(newItems));
    }

    const handleEdit =(item) => {
      setEdit(true);
      setTodoIndex(item.id);
      setTodoText(item.item);
    }

    const updateTodo = (e) => {
      e.preventDefault();
      console.log("1" + todoIndex);
      console.log("2" + todoText);
      let updatedTodos = items.map((todoItem) => {
        if (todoItem.id === todoIndex ) {
          todoItem.item = todoText;
        }
        return todoItem;
      });
      console.log(updatedTodos);
      setAndSaveItem(updatedTodos);
    }

    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = {id, checked: false, item}
      const listItems = [...items, myNewItem];
      setAndSaveItem(listItems);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem);
      setNewItem('')

    }

  return (
    <div className='App'>
      <Header title="Todo App!"/>
      {!edit && <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />}
      <SearchItem search={search} setSearch={setSearch} />
      {edit && <EditItem todoText={todoText} updateTodo={updateTodo} setTodoText ={setTodoText} setEdit={setEdit} />}
      <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} handleEdit={handleEdit} />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
