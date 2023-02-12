import "./Header.css";

// React Router
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shopping-list">Shopping List</Link>
          </li>
        </ul>
        <Link to="/add-new">
          <button className="new-btn">Add New</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
