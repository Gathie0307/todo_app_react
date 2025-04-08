import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
      <p>{length} Todo List {length === 1? 'item': 'items'}</p>
    </footer>
  );
}

export default Footer
