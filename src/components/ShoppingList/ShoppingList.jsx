// Styles
import "./ShoppingList.css";

// Hooks
import { useContext } from "react";

// Context
import Context from "../../store/context";

// Components
import ShoppingDate from "../../components//ShoppingDate/ShoppingDate";

const ShoppingList = () => {
  const contextData = useContext(Context);

  console.log(contextData.shoppingCart);
  return (
    <>
      {contextData.shoppingCart.length !== 0 ? (
        <div className="shoppingList">
          <ul>
            {contextData.shoppingCart.map((item, index) => (
              <li key={index}>
                <div className="shopping-item">
                  <ShoppingDate date={item.date} />
                  <div className="shopping-item__description">
                    <h2>{item.title}</h2>
                    <div className="shopping-item__price">${item.amount}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>There is not any item in the Shopping List</p>
      )}
    </>
  );
};

export default ShoppingList;
