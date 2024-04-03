import { useState } from "react";
import classes from "./App.module.css";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import MedicineForm from "./components/addForm/MedicineForm";
import MedicineDisplay from "./components/medicineList/MedicineDisplay";
import TextShow from "./components/addForm/TextShow";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [medList, setMedList] = useState([]);
  const [cart, setCartItem] = useState([]);
  const [total, updateTotal]= useState(0);

  const showCart = () => {
    setCartVisible(true);
  };

  const hideCart = () => {
    setCartVisible(false);
  };

  const addMedicine = (medicine) => {
    setMedList((prev) => {
      return [...prev, medicine];
    });
  };

  const clearCart = () => {
    updateTotal(0);
    setCartItem([]);
  };

  return (
    <div className={classes.App}>
      {cartVisible && (
        <Cart onClose={hideCart} onClear={clearCart} cart={cart} />
      )}
      <Header showCart={showCart} total={total}/>

      <div className={classes.formBox}>
        <TextShow />
        <MedicineForm onAdd={addMedicine} />
      </div>
      {medList.length > 0 && (
        <MedicineDisplay medList={medList} setCartItem={setCartItem} updateTotal={updateTotal}/>
      )}
    </div>
  );
}

export default App;
