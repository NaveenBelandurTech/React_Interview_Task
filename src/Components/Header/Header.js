import './header.css'
import {Link} from 'react-router'
import { FaReact } from "react-icons/fa";
const Header = () =>{
    return (
        <nav className='header-container'>
          <FaReact size={40} color={'blue'}/>
          <ul className='header-list-container'>
          <li><Link to='/chipsinput' className='link'>Chips Input</Link></li>
          <li><Link to='/accordion' className='link'>Accordion</Link></li>
           <li><Link to='/GuessNumber' className='link'>Guess Number</Link></li>
          </ul>

        </nav>
    )
}


export default Header