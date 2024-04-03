import classes from "./MedicineForm.module.css";
import { useState } from "react";

function MedicineForm({ onAdd }) {
  const [medName, setMedName] = useState("");
  const [medDesc, setMedDesc] = useState("");
  const [medPrice, setMedPrice] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (medName.length === 0 || medDesc.length === 0 || medPrice.length === 0) {
      return alert("Please enter full details");
    }

    onAdd({ medName, medDesc, price: Number(medPrice) });

    setMedName("");
    setMedDesc("");
    setMedPrice("");
  };

  return (
    <div className={classes.formMain}>
      <form onSubmit={handleSubmit}>
        <div className={classes.formIn}>
          <label htmlFor="name">Medicine Name -</label>
          <input
            id="name"
            type="text"
            value={medName}
            onChange={(e) => setMedName(e.target.value)}
          />
        </div>

        <div className={classes.formIn}>
          <label htmlFor="description">Description -</label>
          <input
            id="description"
            type="text"
            value={medDesc}
            onChange={(e) => setMedDesc(e.target.value)}
          />
        </div>

        <div className={classes.formIn}>
          <label htmlFor="price">Price -</label>
          <input
            id="price"
            type="number"
            value={medPrice}
            onChange={(e) => setMedPrice(e.target.value)}
          />
        </div>

        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
}

export default MedicineForm;
