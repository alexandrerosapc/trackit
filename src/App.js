import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./Components/Habits"
import Historic from "./Components/Historic"
import LoginPage from "./Components/LoginPage"
import SignUpPage from "./Components/SignUpPage"
import Today from "./Components/Today"
import { useState } from "react";
import AuthContext from "./Contexts/AuthContext";
import UserContext from "./Contexts/UserContext";


function App() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState({})
  return (
    <AuthContext.Provider value={{token, setToken}} >
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<SignUpPage/>}/>
          <Route path="/habitos" element={<Habits/>}/>
          <Route path="/hoje" element={<Today/>}/>
          <Route path="/historico" element={<Historic/>}/>
        </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
