import { Outlet, Link } from "react-router-dom";
import Crownlogo from '../../assets/crown.svg'
import './navigation.scss'

//this is a top level navigation
const Navigation = () => {
  return (
    <>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
       <img src={Crownlogo} className="logo" alt="crownlogo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">
            SHOP
          </Link> 
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
