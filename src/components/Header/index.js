import './styles.css';
import logo from "../../assets/images/y.svg"

const Header = () => {
  return (
    <div className="header">
        <img src={logo} />
        <div>Menu</div>
    </div>
  );
}

export default Header;
