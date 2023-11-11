import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

import Form from "./components/Form";
import Items from "./components/Items";

const list = JSON.parse(localStorage.getItem("list") || "[]");

const setLocalStorage = items => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(list);

  const addItem = itemName => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added to list.");
  };

  const removeItem = id => {
    const newItems = items.filter(item => item.id !== id);

    setItems(newItems);
    setLocalStorage(newItems);
    toast.info("Item removed from list.");
  };

  const toggleItem = itemId => {
    const newItems = items.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} toggleItem={toggleItem} />
    </section>
  );
};

export default App;
