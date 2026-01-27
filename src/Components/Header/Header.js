import "./header.css";
import { Link } from "react-router";
import { FaReact } from "react-icons/fa";


const Header = () => {
  const navLinks = [
    { className: "link", path: "/ChipsInput" },
    { className: "link", path: "/Accordion" },
    { className: "link", path: "/GuessNumber" },
    // { className: "link", path: "/Counter" },
    // { className: "link", path: "/ToDoList" },
    // { className: "link", path: "/autosave" },
    // { className: "link", path: "/EvenOdd" },
    // { className: "link", path: "/animateloader" },
    // { className: "link", path: "/ShowBio" },
    // { className: "link", path: "/modal" },
    // { className: "link", path: "/readmore" },
    // { className: "link", path: "/copy" },
    // { className: "link", path: "/dark" },
    // { className: "link", path: "/ContactForm" },
    // { className: "link", path: "/NavBar" },
    // { className: "link", path: "/Notification" },
  ];

  return (
    <nav className="header-container">
      <FaReact size={40} color={"blue"} />
      <ul className="header-list-container">
        {navLinks?.map(({ className, path }, i) => {
          return (
            <li key={i + 1}>
              <Link to={path} className={className}>
                {path.replace("/", "")}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
