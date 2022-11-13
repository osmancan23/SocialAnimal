import {  NavLink, useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import {useAuth} from "../components/Context/UseContext"
import lottie from 'lottie-web';
import React,{useEffect,useRef} from 'react';
import image from "../images/kopek.jpg";
 
function Profile() {
  const container=useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container:container.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData:require("../lotties/dogWalking.json")
    })
  }, [])
  return (
    <div>
      <Container>
        <div className="mt-20 [200px] flex max-w-[1000px] flex-col items-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex h-[350px] w-[350px] flex-col gap-y-5">
              
            <div className='container' ref={container}></div>

             {/* <p className="text-2xl font-semibold">İsim Soyisim</p>*/}
            </div>
            <div className="flex flex-col gap-y-[51px]" >
              <div className="flex items-center gap-x-5">
                <label htmlFor="username" className="text-xl font-semibold">
                  Ad-Soyad:
                </label>
                <input type="text"  placeholder="Ad-Soyad giriniz" id="username" className="border p-2 w-[300px]" />
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
                <input type="password" placeholder="Şifrenizi giriniz" id="password" className="border p-2 w-[300px]" />
              </div>
              <div className="flex w-full flex-row justify-between">
                <label htmlFor="password" className="text- xl font-semibold">
                  Bağış miktarı: 
                </label>
                <input type="password" placeholder="Bağış miktarını giriniz" id="password" className="border p-2 w-[300px]" />
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
