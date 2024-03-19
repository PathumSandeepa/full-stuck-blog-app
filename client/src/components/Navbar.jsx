import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'><img src={Logo} alt="logo"/>Register</Link>i
                </div>
                <div className='links'>links</div>
            </div>
        </div>
    )
}

export default Navbar;