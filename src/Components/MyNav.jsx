import React from 'react';
import { Link } from 'react-router-dom';

const MyNav = () => {
return( 
    <div>
            <nav className="navbar navbar-dark bg-dark mb-3">
                <Link to="/" className="btn btn-outline-danger">[  Home  ]</Link>
                <Link to="/all2020" className="btn btn-outline-warning">[  2020 Movies  ]</Link>
                <Link to="/search" className="btn btn-outline-info">[  Search Movies  ]</Link>
            </nav>
        </div>
 );
}
export default MyNav;