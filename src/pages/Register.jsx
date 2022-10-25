import React from "react";
import {  NavLink } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div className="mx-auto mt-[180px] flex max-w-[900px] flex-col gap-y-5  rounded-lg  p-10 shadow-outlineShadow">
      <label htmlFor="mail" className="text-[24px] font-medium">
          Ad Soyad
        </label>
        <input type="text" placeholder="Ad Soyad Giriniz" id="name" className="rounded-lg border outline-none h-10 pl-5" />
        
        <label htmlFor="mail" className="text-[24px] font-medium">
          E-mail {" "}
        </label>
        <input type="text" placeholder="Email adresinizi Giriniz"  id="mail" className="rounded-lg border outline-none h-10 pl-5" />
        <label htmlFor="name" className="text-[24px] font-medium">
          Şifre 
        </label>
        <input type="password" placeholder="Şifrenizi Giriniz" id="name" className="rounded-lg border outline-none h-10 pl-5" />
        <button className="rounded-lg bg-[#F0EBCE] text-[24px] font-medium shadow-outlineShadow">
          Kayıt Ol
        </button>
        <div className="flex gap-x-4">
          <p className="font-medium">Zaten bir hesabınız var mı?</p>
           <NavLink to="/Login">
           <p className="font-bold underline cursor-pointer">Giriş Yap</p>

           </NavLink>
        </div>
      </div>
     
    </div>
    
  );
};

export default Register;
