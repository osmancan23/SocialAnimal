import React from "react";

const Login = () => {
  return (
    <div>
      <div className="mx-auto mt-[180px] flex max-w-[900px] flex-col gap-y-5  rounded-lg  p-10 shadow-outlineShadow">
        <label htmlFor="mail" className="text-[24px] font-medium">
          E-mail giriniz{" "}
        </label>
        <input type="text" id="mail" className="rounded-lg border outline-none h-10 pl-5" />
        <label htmlFor="name" className="text-[24px] font-medium">
          Şifre giriniz
        </label>
        <input type="password" id="name" className="rounded-lg border outline-none h-10 pl-5" />
        <button className="rounded-lg bg-[#F0EBCE] text-[24px] font-medium shadow-outlineShadow">
          Giriş
        </button>
        <div className="flex gap-x-4">
          <p className="font-medium">Yeni bir hesap için</p>
          <p className="font-bold underline cursor-pointer">Kaydol</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
