import React from "react";
import LineItem from "./LineItem.jsx";


const ItemList = ({ items, handleCheck, handleDelete, handleEdit }) => {
  return (
    <ul>
      {items.map((item) => ( <LineItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} handleEdit={handleEdit}/>
      ))}
    </ul>
  );
};

export default ItemList;
