import { useAppContext } from "../../CartContext";

const Cart = () => {
  const { cart } = useAppContext();


  return (
    <div className="cart-wrapper">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: "24px" }}>
              <img
                src={item.images && item.images[0]}
                alt={item.title}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                {/* <button onClick={() => removeFromCart(item.id)}>Remove</button> */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
