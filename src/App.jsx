import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <CreateEmployee />,
            // loader:
            // errorElement:
        },
        {
            path: "/list",
            element: <EmployeeList />,
            // loader:
            // errorElement:
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
