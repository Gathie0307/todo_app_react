import React from 'react'
import ItemList from './ItemList.jsx';

const Content = ({items,handleCheck,handleDelete, handleEdit}) => {


  return (
    <main>
    {items.length ? ( <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} handleEdit={handleEdit} /> ) : (<p style={{marginTop: '2rem'}}>Your Todo List is Empty</p>)}
    </main>
  )
}

export default Content
