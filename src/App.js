
import ReactDOM from 'react-dom/client'
import Headers from './Components/Header/Header'
import ChipsInput from './Components/ChipsInput/Chips'
import Accordion from './Components/Accordion/Accordion '
import GuessNumber from './Components/Guess/GuessNumber'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router'
import '/index.css'
const App = ()=>{
    return (
        <div>
            <Headers/>
            <Outlet/>
        </div>
    )
}


const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/chipsinput',
                element:<ChipsInput/>
            },
            {
                path:'/accordion',
                element:<Accordion/>
            },
            {
                path:'/GuessNumber',
                element:<GuessNumber/>
            }
            
        ]
    }
])


export default App

const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(<RouterProvider router={AppRouter} />)