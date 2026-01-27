import "./navbar.css";
import DashBoard from "./DashBoard/DashBoard";
import UserContext from "../../../utils/LoggedContext";
import {useContext} from 'react'
import {useState} from 'react'

const NavBar = () => {
    const {isLogged} = useContext(UserContext)
    const [logged,setLogged] = useState(isLogged)
  
  return (
    <section>
      <div className="header__">
        <h3>App</h3>
        <button onClick={()=>setLogged(!logged)}>{logged ? "Login" : "Logout"}</button>
      </div>
      <div>
        <DashBoard logged={logged} />
      </div>
    </section>
  );
};

export default NavBar;
