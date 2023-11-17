import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home.js";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const { user } = useSelector((state) => ({...state}));
  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
