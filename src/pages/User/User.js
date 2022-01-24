import { Link, useNavigate } from "react-router-dom";
import "./User.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducer/userSlice";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user.value);
  // const dispatch = useDispatch();
  console.log(user);
  const handleLogOut = () => {
    console.log("run.....");
    window.localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <>
      <div className="card">
        <img src="https://cf.shopee.vn/file/c5c6e067395edb3b091f22583e68c013" />
        <h1 className="card__name">{user.data.name}</h1>
        <ul className="card__menu">
          <li className="card__menu__item" to="/history">
            <i class="fas fa-shopping-cart"></i>
            <Link to="/history">My Order</Link>
          </li>
          {user.data.role && user.data.role === "admin" ? (
            <li className="card__menu__item" to="/history">
              <i class="fas fa-shopping-cart"></i>
              <Link to="/create-product">Add Products</Link>
            </li>
          ) : (
            ""
          )}

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
