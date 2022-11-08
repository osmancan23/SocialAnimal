/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container } from "../components/Container";
import image from "../images/dogs.jpg";
const Profile = () => {
  return (
    <div>
      <Container>
        <div className="mt-20 [200px] flex max-w-[900px] flex-col items-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex h-[450px] w-[400px] flex-col gap-y-5">
              <img
                src={image}
                className="h-[400px] w-[400px] rounded-[12px]"
              ></img>
             {/* <p className="text-2xl font-semibold">İsim Soyisim</p>*/}
            </div>
            <div className="flex flex-col gap-y-[100px]" >
              <div className="flex items-center gap-x-5">
                <label htmlFor="username" className="text-xl font-semibold">
                  Kullanıcı Adı:
                </label>
                <input type="text"  placeholder="Kullanıcı Adınızı giriniz" id="username" className="border p-2 w-[300px]" />
              </div>
              <div className="flex w-full flex-row justify-between">
                <label htmlFor="email" className="text-xl font-semibold">
                  E-posta:
                </label>
                <input type="email" placeholder="E-posta Adresinizi giriniz" id="email" className="border p-2 w-[300px]" />
              </div>
              <div className="flex w-full flex-row justify-between">
                <label htmlFor="password" className="text-xl font-semibold">
                  Şifre:
                </label>
                <input type="password" placeholder="Şİfrenizi giriniz" id="password" className="border p-2 w-[300px]" />
              </div>
              {/* <div className="flex w-full flex-row justify-between">
                <label htmlFor="bio" className="text-xl font-semibold">
                 Bio:
                </label>
                <textarea id="bio" name="w3review" rows="4" cols="38" className="border"></textarea>
               </div>*/}
              <button className=" mb-20 w-[200px] h-[40px] rounded-[300px] flex justify-center items-center text-lg bg-brand-9 text-white font-semibold">Çıkış Yap</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
