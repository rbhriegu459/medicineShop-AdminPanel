import logo from "../../assests/logo.png";
import classes from "./TextShow.module.css";

function TextShow() {
  return (
    <div className={classes.main}>
      <div className={classes.textBox}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <h1>MediPanel</h1>
      </div>
      <h1 className={classes.animated}>
        Providing Care, One Prescription At A Time ...
      </h1>
    </div>
  );
}

export default TextShow;
