import ReactDOM from "react-dom/client";
import Headers from "./Components/Header/Header";
import ChipsInput from "./Components/ChipsInput/Chips";
import Accordion from "./Components/Accordion/Accordion ";
import GuessNumber from "./Components/Guess/GuessNumber";
import Counter from "./Components/Counter/Counter";
import ToDoList from "./Components/ToDoList/ToDoList";
import Autosave from "./Components/AutoSave/AutoSave";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import "/index.css";
import EvenOdd from "./Components/EvenOdd/Even";
import AnimateLoader from "./Components/AnimateLoader/AnimateLoader";
import ShowBio from "./Components/ShowBio/ShowBio";
import Modal from "./Components/Modal/Modal";
import ReadMore from "./Components/ReadMore/ReadMore";
import Copy from "./Components/CopyToClipBoard/Copy";
import DarkMode from "./Components/DarkMode/DarkMode";
import ContactForm from "./Components/ContactForm/ContactForm";
import NavBar from "./Components/NavBar/NavBar";
import UserContext from "../utils/LoggedContext";
import Notification from "./Components/Noti/Notification";
import { Link } from "react-router";
import TrafficLight from "./Components/TrafficSignal/TrafficLight";
import Tab from "./Components/Tab/Tab";
import { FocusInput } from "./Components/FocusInput/FocusInput";
import ProgressBar from './Components/ProgressBar/ProgressBar'

const navLinks = [
  { className: "link", path: "/ChipsInput" },
  { className: "link", path: "/Accordion" },
  { className: "link", path: "/GuessNumber" },
  { className: "link", path: "/Counter" },
  { className: "link", path: "/ToDoList" },
  { className: "link", path: "/autosave" },
  { className: "link", path: "/EvenOdd" },
  { className: "link", path: "/animateloader" },
  { className: "link", path: "/ShowBio" },
  { className: "link", path: "/modal" },
  { className: "link", path: "/readmore" },
  { className: "link", path: "/copy" },
  { className: "link", path: "/dark" },
  { className: "link", path: "/ContactForm" },
  { className: "link", path: "/NavBar" },
  { className: "link", path: "/Notification" },
  { className: "link", path: "/TrafficLight" },
  { className: "link", path: "/Tab" },
  { className: "link", path: "/Focus" },
    { className: "link", path: "/ProgressBar" },
];


const App = () => {
  return (
    <div>
      <Headers />
      <div className="app_container">
        <p>
          This section includes React interview practice tasks frequently asked
          by leading companies such as Meta (Facebook) and Zoom for Frontend
          Developer roles. Each task is presented with a clear problem statement
          and its corresponding solution. The links below contain all
          implementations.   
        </p>
        <ul className='list__item'>
          {navLinks.map(({ path, className },i) => {
            return (
                <li key={i+1} className='flex_item'>
                  {" "}
                  <Link to={path} className={className}>
                    {path.replace("/", "")}
                  </Link>
                </li>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/ChipsInput",
        element: <ChipsInput />,
      },
      {
        path: "/Accordion",
        element: <Accordion />,
      },
      {
        path: "/GuessNumber",
        element: <GuessNumber />,
      },
      {
        path: "/Counter",
        element: <Counter />,
      },
      {
        path: "/ToDoList",
        element: <ToDoList />,
      },
      {
        path: "/autosave",
        element: <Autosave />,
      },
      {
        path: "/EvenOdd",
        element: <EvenOdd />,
      },
      {
        path: "/animateloader",
        element: <AnimateLoader />,
      },
      {
        path: "/ShowBio",
        element: <ShowBio />,
      },
      {
        path: "/modal",
        element: <Modal />,
      },
      {
        path: "/readmore",
        element: <ReadMore />,
      },
      {
        path: "/copy",
        element: <Copy />,
      },
      {
        path: "/dark",
        element: <DarkMode />,
      },
      {
        path: "/ContactForm",
        element: <ContactForm />,
      },
      {
        path: "/NavBar",
        element: (
          <UserContext.Provider value={{ isLogged: false }}>
            <NavBar />
          </UserContext.Provider>
        ),
      },
      {
        path: "/Notification",
        element: <Notification />,
      },
         {
        path: "/TrafficLight",
        element:<TrafficLight/>
      },
       {
        path: "/Tab",
        element:<Tab/>
      },
      {
        path:'/focus',
        element:<FocusInput/>
      },
         {
        path:'/ProgressBar',
        element:<ProgressBar/>
      },
      
    ],
  },
]);

export default App;

const Root = ReactDOM?.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={AppRouter} />);
