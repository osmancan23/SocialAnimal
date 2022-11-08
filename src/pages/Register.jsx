import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../components/Container";
const Register = () => {
  return (
    <Container>
      <div className="flex flex-row justify-center  gap-x-5 ">
        <div className="mt-[100px] h-[500px] w-[600px] bg-brand-7"></div>
        <div className=" mt-[100px] flex w-[800px] flex-col gap-y-5  rounded-lg  p-10 shadow-outlineShadow">
          <label htmlFor="mail" className="text-[24px] font-medium">
            Ad Soyad
          </label>
          <input
            type="text"
            placeholder="Ad Soyad Giriniz"
            id="name"
            className="h-10 rounded-lg border pl-5 outline-none"
          />

          <label htmlFor="mail" className="text-[24px] font-medium">
            E-mail{" "}
          </label>
          <input
            type="text"
            placeholder="Email adresinizi Giriniz"
            id="mail"
            className="h-10 rounded-lg border pl-5 outline-none"
          />
          <label htmlFor="name" className="text-[24px] font-medium">
            Şifre
          </label>
          <input
            type="password"
            placeholder="Şifrenizi Giriniz"
            id="name"
            className="h-10 rounded-lg border pl-5 outline-none"
          />
          <button className="rounded-lg bg-[#F0EBCE] text-[24px] font-medium shadow-outlineShadow">
            Kayıt Ol
          </button>
          <div className="flex gap-x-4">
            <p className="font-medium">Zaten bir hesabınız var mı?</p>
            <NavLink to="/Auth">
              <p className="cursor-pointer font-bold underline">Giriş Yap</p>
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
