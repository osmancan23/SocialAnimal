import { Route, NavLink, Routes } from "react-router-dom";




import {FaUserAlt} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {GrClose} from "react-icons/gr";
import { useState } from "react";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
function App() {
 const [status, setStatus] = useState(false);

  return (
    <>
     
      <nav className="flex h-[80px] w-full items-center justify-between bg-brand-2 opacity-40 shadow-2xl">
        <div className="w-[20%] pl-[60px]">
          <div className="h-[50px] w-[50px] bg-red-400 pl-5"></div>
          <p className="">asdsad</p>
        </div>
        <div className="ml-8 flex w-[30%] gap-x-10 items-center md-max:hidden">
          <NavLink to="/Forum">Forum</NavLink>
          <NavLink to="/Blog">Blog</NavLink>
           <NavLink to="/Login" className="flex flex-col justify-center items-center" ><FaUserAlt className="w-[20px] h-[20px]"/>
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