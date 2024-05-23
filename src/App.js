import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./Components/Habits"
import Historic from "./Components/Historic"
import LoginPage from "./Components/LoginPage"
import SignUpPage from "./Components/SignUpPage"
import Today from "./Components/Today"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}/>
      <Route path="/cadastro" element={<SignUpPage></SignUpPage>}/>
      <Route path="/habitos" element={<Habits></Habits>}/>
      <Route path="/hoje" element={<Today></Today>}/>
      <Route path="/historico" element={<Historic></Historic>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
