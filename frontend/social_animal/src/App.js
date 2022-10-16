import logo from "./images/cat_logo.jpg"; // with import

import './App.css';

function App() {
  return (
    <div class="container">

        <div class="logo">
            <img src={logo} alt="Logo"/>
        </div>

        <form action="#">

            <div class="title">KAYIT EKRANI</div>

            <div class="input-box">
                <input type="email" placeholder="Adınızı Giriniz..." required/>
                <div class="underline"></div>
            </div>

            <div class="input-box">
                <input type="password" placeholder="Soyadınızı Giriniz..." required/>
                <div class="underline"></div>
            </div>

            <div class="input-box">
                <input type="email" placeholder="Email Adresinizi Giriniz..." required/>
                <div class="underline"></div>
            </div>

            <div class="input-box">
                <input type="email" placeholder="Şifrenizi Giriniz..." required/>
                <div class="underline"></div>
            </div>


            <div class="input-box button">
                <input type="submit" value="Kayıt Ol"/>
            </div>
            

        </form>

        <div class="text">Diğer Seçeneklerle Kayıt Olun</div>


        <div class="twitter">
            <a href="#"><i class="fab fa-twitter"></i>Twitter ile Giriş</a>
        </div>

        <div class="facebook">
            <a href="#"><i class="fab fa-facebook"></i>Facebook ile Giriş</a>
        </div>


    </div>
  );
}

export default App;
