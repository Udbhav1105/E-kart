import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Verify from "./Pages/Verify";
import VerifyEmail from "./Pages/VerifyEmail";
import Admin from "./Pages/Admin";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import Collections from "./Pages/Collections";
import View from "./components/ui/View";
import Cart from "./components/ui/Cart";
import Logout from "./Pages/Logout";
import { useState } from "react";


const App = () => {
    const [cartVal, setcartVal] = useState(0)
  return (
    <div className="">
      <Navbar cartVal={cartVal}/>
      <Routes >
      <Route path='/' element={<Home />} />
      <Route path="/collection" element={<Collections data={cartVal,setcartVal} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/verify/:token" element={<VerifyEmail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path='/product/:id' element={<View />} />
      <Route path='/user/cart' element={<Cart />} />
    </Routes>
    <Footer />
    </div>
  );
};

export default App;
