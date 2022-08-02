import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="">
        <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/signIn" element={<SignIn></SignIn>} />
      </Routes>
    </div>
  );
}

export default App;
