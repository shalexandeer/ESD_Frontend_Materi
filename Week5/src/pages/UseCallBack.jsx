/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";

function Item({ item, onClick }) {
  return (
    <div>
      <h3 onClick={onClick}>{item.title}</h3>
      {item.isVisible && <p>{item.content}</p>}
    </div>
  );
}

function ParentComponent() {
  const [items, setItems] = useState([
    { id: 1, title: "Item 1", content: "Content 1", isVisible: false },
    { id: 2, title: "Item 2", content: "Content 2", isVisible: false },
    { id: 3, title: "Item 3", content: "Content 3", isVisible: false },
  ]);

  const toggleVisibility = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isVisible: !item.isVisible } : item
      )
    );
  }, []);

  return (
    <div>
      <h1>UseCallback</h1>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onClick={() => toggleVisibility(item.id)}
        />
      ))}
    </div>
  );
}

export default ParentComponent;
