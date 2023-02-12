// Context
import Context from "./store/context";

// Components
import ShoppingForm from "./components/ShoppingForm/ShoppingForm";
import Header from "./components/Header/Header";
import ShoppingList from "./components/ShoppingList/ShoppingList";

// Hooks
import { useState } from "react";

// React Router
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const deleteItemHandler = (id) => {
    const newShoppingCart = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(newShoppingCart);
  };

  const addItemHandler = (item) => {
    const newItem = { ...item, id: Math.random().toString() };
    console.log(newItem);
    setShoppingCart([...shoppingCart, newItem]);
  };

  return (
    <Context.Provider
      value={{
        shoppingCart: shoppingCart,
        delete: deleteItemHandler,
        add: addItemHandler,
      }}
    >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/add-new" element={<ShoppingForm />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
        </Routes>
      </main>
    </Context.Provider>
  );
};

export default App;
