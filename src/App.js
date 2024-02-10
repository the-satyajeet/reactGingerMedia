import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Signout from "./components/Signout/Signout"
// import Logout from "./components/Logout/Logout";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Update from "./components/Update/Update";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setUserName(user.displayName)
      }else setUserName("");
      console.log(user);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName} />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signout" element={<Signout />}></Route>
          <Route path="/update" element={<Update />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
