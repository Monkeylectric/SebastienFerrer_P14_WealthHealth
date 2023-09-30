import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <CreateEmployee />,
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
