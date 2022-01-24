import { Link, useNavigate } from "react-router-dom";
import "./User.scss";
function User() {
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
          <li className="card__menu__item" to="/history">
            <i class="fas fa-sign-out-alt"></i>
            Log Out
          </li>
        </ul>
        {/* <a href="#"> */}
        {/*   <i className="fa fa-dribbble"></i> */}
        {/* </a> */}
        {/* <a href="#"> */}
        {/*   <i className="fa fa-twitter"></i> */}
        {/* </a> */}
        {/* <a href="#"> */}
        {/*   <i className="fa fa-linkedin"></i> */}
        {/* </a> */}
        {/* <a href="#"> */}
        {/*   <i className="fa fa-facebook"></i> */}
        {/* </a> */}
        <p>
          <button>Home</button>
        </p>
      </div>
    </>
  );
}
export default User;
