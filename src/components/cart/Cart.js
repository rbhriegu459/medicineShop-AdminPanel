import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  return (
    <Modal onClose={props.onClose}>
      <ul>
        {props.cart.length > 0 ? (
          props.cart.map((item, index) => (
            <li key={index}>
              <div className={classes.itemList}>
                <h4>{item.medName}</h4>
                {/* <div>
                    <button >+</button>
                    <button>-</button>
                  </div> */}
              </div>
              <div className={classes.itemPrice}>
                &#x20B9; {item.price}
                <span className={classes.quantity}>x {item.quantity}</span>
              </div>
            </li>
          ))
        ) : (
          <h2>Cart is Empty.. :(</h2>
        )}
      </ul>
      <div className={classes.totalAmount}>
        <h3>
          Total Amount : &#x20B9;{" "}
          {props.cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </h3>
      </div>
      <div className={classes.closeOrClear}>
        {props.cart.length>0 && <button onClick={props.onClear}>Clear Cart</button>}
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
}

export default Cart;
