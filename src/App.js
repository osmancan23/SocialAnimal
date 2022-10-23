import { Route, NavLink, Routes, Link } from "react-router-dom";




import {FaUserAlt} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {GrClose} from "react-icons/gr";
import { useState } from "react";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import dogs from "./images/dogs.jpg";
function App() {
 const [status, setStatus] = useState(false);

  return (
    <>
     
      <nav className="flex h-[80px] w-full text-white items-center justify-between bg-[#395144] pl-2 shadow-2xl">
        <div className="md:w-[20%] md:pl-[60px] ">
        <NavLink to="/">
          <img className="h-[60px] w-[60px]   rounded-[50%]" src={dogs} alt="dogs"></img>
        </NavLink>
        </div>
     
        <div className="ml-8 flex w-[30%] gap-x-10 items-center md-max:hidden">
          <NavLink to="/Forum" className="hover:text-brand-16">Forum</NavLink>
          <NavLink to="/Blog" className="hover:text-brand-16">Blog</NavLink>
           <NavLink to="/Login" className="flex flex-col justify-center items-center hover:text-brand-16" ><FaUserAlt className="w-[20px] h-[20px]"/>
          <p>Login</p>
          </NavLink>
        </div>
        {
          status ? (  <GiHamburgerMenu onClick={()=>setStatus(!status)} className="md:hidden w-[40px] h-[40px] top-4 right-11 absolute cursor-pointer"/>): (  <GrClose onClick={()=>setStatus(!status)} className="md:hidden w-[40px] h-[40px] top-4 right-11 absolute cursor-pointer"/>)
        }
      
      
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Blog" element={<Blog />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;