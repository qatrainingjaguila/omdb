import React from 'react';
import { Link } from 'react-router-dom';
import {  Navbar, Nav,Button} from 'react-bootstrap';

const MyNav = () => {
return( 
    <div>
            <nav className="navbar navbar-dark bg-dark mb-3">
                <Link to="/" ><Button variant="success">Home</Button></Link>
                <Link to="/all2020" ><Button variant="danger">2020 Movies</Button></Link>
                <Link to="/search" ><Button variant="warning">Search Movies</Button></Link>
            </nav>
        </div>
 );
}
export default MyNav;