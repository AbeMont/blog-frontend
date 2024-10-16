import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div id="navbarNav" className='container'>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link text-white">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to='/articles' className="nav-link text-white">
                            Articles
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to='/create-article' className="nav-link text-white">
                            Create Article  
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
     
    )
}

export default Navbar;