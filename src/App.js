// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import Layout from "./components/Todo";
// import Todo from "./components/Todo";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>

        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
