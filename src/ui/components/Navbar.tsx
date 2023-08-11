import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link className="navbar-brand mx-3" to="/">Associations</Link>

            <div className="navbar-collapse mx-3">
                <div className="navbar-nav">
                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/marvel">
                        Marvel
                    </NavLink>

                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/dc">
                        DC
                    </NavLink>

                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/search">
                        Search
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end mx-3">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>Angel González</span>
                    <button className='nav-item nav-link btn'>Logout </button>
                </ul>
            </div>
        </nav>
    )
}
