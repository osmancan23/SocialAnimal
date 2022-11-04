import { Route, NavLink, Routes} from "react-router-dom";

import { FaBook, FaPeopleArrows, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import dogs from "./images/cat.jpg";
import Register from "./pages/Register";
import { useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import Profile from "./pages/Profile";

function App() {
  const [status, setStatus] = useState(false);


  return (
    <>
      <nav className="flex h-[80px] w-full items-center justify-between bg-[#395144] pl-2 text-white shadow-cardShadow">
        <div className="md:w-[20%] md:pl-[60px] ">
          <NavLink to="/">
            <img
              className="h-[60px] w-[60px]   rounded-[50%]"
              src={dogs}
              alt="dogs"
            ></img>
          </NavLink>
        </div>

        <div className="ml-8 flex w-[30%] items-center gap-x-10 md-max:hidden">
          <NavLink to="/forum" className="flex flex-col items-center justify-center hover:text-brand-16">
          <FaPeopleArrows className="h-[20px] w-[20px]" />
            <p>Forum</p>
            
          </NavLink>
          <NavLink to="/blog" className=" flex flex-col items-center justify-center hover:text-brand-16">
            
          <FaBook className="h-[20px] w-[20px]" />
            <p>Blog</p>
            
          </NavLink>
          <NavLink
            to="/login"
            className="flex flex-col items-center justify-center hover:text-brand-16"
>
            <FaUserAlt className="h-[20px] w-[20px]" />
            <p>Login</p>
          </NavLink>
          <NavLink
            to="/profile"
            className="flex flex-col items-center justify-center hover:text-brand-16"
>
            <FaUserAlt className="h-[20px] w-[20px]" />
            <p>Profil</p>
          </NavLink>
        </div>

        
        {status ? (
          <GiHamburgerMenu
            onClick={() => setStatus(!status)}
            className="absolute top-4 right-11 h-[40px] w-[40px] cursor-pointer md:hidden"
          />
        ) : (
          <GrClose
            onClick={() => setStatus(!status)}
            className="absolute top-4 right-11 h-[40px] w-[40px] cursor-pointer md:hidden"
          />
        )}
      </nav>

     
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/blog" element={<Blog />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
