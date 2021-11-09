import './Header.scss';
import { FC } from 'react';
import NavLinks from '../componentes/NavLinks/NavLinks';
import Logo from '../componentes/Logo/Logo';
import ShoppingCart from '../componentes/ShoppingCart/ShoppingCart';

type CartProps = {
  itemsInCart: number;
  price: number,
}

const navItems = ['Home', 'About', 'Store'];

const Header: FC<CartProps> = ({ itemsInCart, price }) => (
  <div className="header__container">
    <Logo
      imgSrc="https://js-beginners.github.io/filter-project/img/logo.svg"
      alt="macaroons"
    />
    <div className="navLinks-wrapper">
      {navItems.map((item) => (
        <NavLinks
          linkName={item}
        />
      ))}
    </div>
    <div className="contact">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="20px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <rect fill="none" height="24" width="24" />
        <g>
          <g><path d="M17.46,5c-0.06,0.89-0.21,1.76-0.45,2.59l1.2,1.2c0.41-1.2,0.67-2.47,0.76-3.79H17.46z M7.6,17.02 c-0.85,0.24-1.72,0.39-2.6,0.45v1.49c1.32-0.09,2.59-0.35,3.8-0.75L7.6,17.02z M16.5,3H20c0.55,0,1,0.45,1,1c0,9.39-7.61,17-17,17 c-0.55,0-1-0.45-1-1v-3.49c0-0.55,0.45-1,1-1c1.24,0,2.45-0.2,3.57-0.57c0.1-0.04,0.21-0.05,0.31-0.05c0.26,0,0.51,0.1,0.71,0.29 l2.2,2.2c2.83-1.45,5.15-3.76,6.59-6.59l-2.2-2.2c-0.28-0.28-0.36-0.67-0.25-1.02C15.3,6.45,15.5,5.25,15.5,4 C15.5,3.45,15.95,3,16.5,3z" /></g>
        </g>
      </svg>
      <div>
        + 123 456 789
      </div>
      <ShoppingCart
        itemsInCart={itemsInCart}
        price={price}
      />
    </div>
  </div>
);

export default Header;
