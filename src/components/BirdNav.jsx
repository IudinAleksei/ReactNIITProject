import { NavLink } from 'react-router-dom'

function BirdNav() {
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Active</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">Link</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/self">Link</NavLink>
      </li>      
    </ul>  
  );
}

export default BirdNav;