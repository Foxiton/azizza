import { Link } from 'react-router-dom';

import { SidebarData } from '../../globals/constants/sidebarData';

import './Sidebar.scss';
import logo from "../../assets/treva.png";


const Sidebar = () => {
    return (
        <>
        <nav className={'nav-menu active'}>
          <Link to='/'>
            <img src={logo} alt='Company Logo' className='nav-logo'/>
          </Link>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={`nav-text ${item.cname}`}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
    )
}

export default Sidebar;
