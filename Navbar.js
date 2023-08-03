import { Link } from 'react-router-dom';
const Navbar = () => { //type sfc to get the arrow function
    return (  
        <nav className="navbar">
            <h1>VENT</h1>
            <div className='motto'>
                <i>Where you get your frustrations out</i>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Vent</Link>
                <Link to="/About">About</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;