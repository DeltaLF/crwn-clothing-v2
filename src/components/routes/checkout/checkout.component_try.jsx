import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, changeItemQuantity, deleteItem } = useContext(CartContext);
  const renderCheckoutTable = () => {
    if (cartItems.length === 0) {
      return (
        <tr>
          <td>
            <h4>no items</h4>
          </td>
        </tr>
      );
    }
    return cartItems.map((cartItem) => {
      return (
        <tr key={cartItem.id}>
          <td>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={cartItem.imageUrl} alt="" />
              <span>{cartItem.name}</span>
              <div>
                <button
                  style={{ fontSize: "2rem" }}
                  onClick={() => {
                    changeItemQuantity("-", cartItem.id);
                  }}
                >
                  {"<"}
                </button>
                <span>{cartItem.quantity}</span>
                <button
                  style={{ fontSize: "2rem" }}
                  onClick={() => {
                    changeItemQuantity("+", cartItem.id);
                  }}
                >
                  {">"}
                </button>
                <span>price:{cartItem.quantity * cartItem.price}$</span>
                <button
                  onClick={() => {
                    deleteItem(cartItem.id);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1>checkout page</h1>
      <table>
        <thead>
          <tr>product description quantity price remove</tr>
        </thead>
        <tbody>{renderCheckoutTable()}</tbody>
      </table>
    </div>
  );
};

export default Checkout;
