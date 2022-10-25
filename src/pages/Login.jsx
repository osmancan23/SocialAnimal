import React from "react";
import {  NavLink } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  return (
    <div>
      <div className="mx-auto mt-[180px] flex max-w-[900px] flex-col gap-y-5  rounded-lg  p-10 shadow-outlineShadow">
        <label htmlFor="mail" className="text-[24px] font-medium">
          E-mail{" "}
        </label>
        <input type="text" placeholder="Email adresinizi giriniz" id="mail" className="rounded-lg border outline-none h-10 pl-5" />
        <label htmlFor="name" className="text-[24px] font-medium">
          Şifre
        </label>
        <input type="password" placeholder="Şifrenizi giriniz" id="name" className="rounded-lg border outline-none h-10 pl-5" />
        <button className="rounded-lg bg-[#F0EBCE] text-[24px] font-medium shadow-outlineShadow">
          Giriş Yap
        </button>
        <div className="flex gap-x-4">
          <p className="font-medium">Yeni bir hesap için</p>
           <NavLink to="/Register">
           <p className="font-bold underline cursor-pointer">Kaydol</p>

           </NavLink>
        </div>
      </div>
     
    </div>
    
  );
};

export default Login;
