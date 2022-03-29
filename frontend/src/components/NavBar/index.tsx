import {ReactComponent as UserIcon} from 'assets/user.svg';
import {ReactComponent as CartIcon} from 'assets/carrinho.svg'
import logo from 'assets/logo.png';

import './styles.css';

function NavBar() {
    return (
    <header>
      <nav>
        <div className='estreet-nav-content'>
          <UserIcon className='user' />
          <a>Catálogo</a>
          <a>Looks</a>
          <img src={logo}></img>
          <a>Brindes</a>
          <a>Ajuda</a>
          <CartIcon className='cart' />
        </div>
      </nav>
    </header>
    );
}

export default NavBar;