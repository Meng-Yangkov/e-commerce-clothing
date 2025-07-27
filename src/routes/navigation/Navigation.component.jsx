import {Outlet ,Link, Await} from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useContext } from "react";
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.style.scss'

const Navigation = () => {
  const {currentUser} = useContext(UserContext);

  return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>)
              : (
              <Link className="nav-link" to="/auth">
                Sign In
              </Link>)
          }  
          <CartIcon />
        </div>
        <CartDropDown />
      </div>
      <Outlet/>
    </Fragment>
  );
}   
export default Navigation;