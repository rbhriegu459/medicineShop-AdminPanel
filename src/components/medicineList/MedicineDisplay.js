import classes from './MedicineDisplay.module.css';

function MedicineDisplay(props) {

  const addToCart = (medicine) => {
    props.setCartItem((prevCart) => {
      const itemInCart = prevCart.find((item) => item.medName === medicine.medName);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.medName === medicine.medName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...medicine, quantity: 1 }];
    });
    props.updateTotal((prev) => prev + 1);
  };

  return (
    <div className={classes.display}>
      <h2><span>List of Medicines</span></h2>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Medicine Name</th>
            <th>Medicine Description</th>
            <th>Medicine Price</th>
            <th>Add To Cart</th>
          </tr>
        </thead>

        <tbody>
          {props.medList.map((medicine, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{medicine.medName}</td>
              <td>{medicine.medDesc}</td>
              <td>&#x20B9; {medicine.price}</td>
              <td>
                <button onClick={() => addToCart(medicine)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineDisplay;
