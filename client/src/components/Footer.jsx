import Logo from '../img/logo.png';

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span>
               Crafted with 🤍 and <b>React.js</b> by Pathum Sandeepa
            </span>
        </footer>
    )
}

export default Footer;