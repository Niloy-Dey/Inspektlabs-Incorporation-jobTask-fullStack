import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadImage from "./Pages/UploadImage";
import ViewImage from "./Pages/ViewImage";
function App() {
  return (
    <div className="">
        <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/uploadImage" element={<UploadImage></UploadImage>} />
        <Route path="/viewImage" element={<ViewImage></ViewImage>} />
      </Routes>
    </div>
  );
}

export default App;
