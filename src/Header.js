import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  // const { cart } = useSelector((state) => state.AddToCart);
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__sectionicon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="hader__optionLineOne">Hello Guest</span>
          <span className="hader__optionLineTwo">Sign in</span>
        </div>

        <div className="header__option">
          <span className="hader__optionLineOne">Return</span>
          <span className="hader__optionLineTwo">& order</span>
        </div>

        <div className="header__option">
          <span className="hader__optionLineOne">Your</span>
          <span className="hader__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="hader__optionLineTwo header__basketCount">
              {/* {cart?.length} */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
