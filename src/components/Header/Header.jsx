// ====
import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donations'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="text-xl">Donation <span className="text-sm">CAMPAIGN</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;