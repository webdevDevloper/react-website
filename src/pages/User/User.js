import { Link, useNavigate } from "react-router-dom";
import "./User.scss";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducer/userSlice";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log("run.....");
    window.localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <>
      <div className="card">
        <img src="https://cf.shopee.vn/file/c5c6e067395edb3b091f22583e68c013" />
        <h1 className="card__name">John Doe</h1>
        <ul className="card__menu">
          <li className="card__menu__item" to="/history">
            <i class="fas fa-shopping-cart"></i>
            <Link to="/history">My Order</Link>
          </li>
          <li className="card__menu__item" to="/history" onClick={handleLogOut}>
            <i class="fas fa-sign-out-alt"></i>
            Log Out
          </li>
        </ul>
        <p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </p>
      </div>
    </>
  );
}
export default User;
