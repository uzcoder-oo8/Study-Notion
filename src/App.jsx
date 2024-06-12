import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}
