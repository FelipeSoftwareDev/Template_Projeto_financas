import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Stocks from "./pages/Stocks";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/crypto", element: <Crypto /> },
  { path: "/stocks", element: <Stocks /> },
]);

export default router;
