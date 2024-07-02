// import logo from './logo.svg';
import{
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import './App.css';
import Adduser from "./Components/Adduser";
import Edituser from "./Components/Edituser";
import Homepage from "./Components/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/add-user",
      element: <Adduser />,
    },
    {
      path: "/edit-user",
      element: <Edituser />,
    },
    {
      path: "*",
      element: <div>Page Not Found!</div>,
    },
  ]);
  return <RouterProvider router={router} />
  
}

export default App;
