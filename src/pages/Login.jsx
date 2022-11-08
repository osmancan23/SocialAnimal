import {  NavLink, useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import {useAuth} from "../components/Context/UseContext"
function Login() {

  const { setUser } = useAuth();
  const navigate = useNavigate();
  const loginHandle = () => {
    setUser({ name: "John Doe" });
    navigate("/");
  };
  return (
    <Container>
      <div className="flex flex-row gap-x-5  justify-center ">
        <div className="mt-[100px] min-w-[600px] h-[500px] bg-brand-7">

        </div>
        <div className="mt-[100px] flex   w-[800px] flex-col gap-y-5  rounded-lg  p-10 shadow-outlineShadow">
          <label htmlFor="mail" className="mt-[50px] text-[24px] font-medium">
            E-mail{" "}
          </label>
          <input type="text" placeholder="Email adresinizi giriniz" id="mail" className="rounded-lg border outline-none h-10 pl-5" />
          <label htmlFor="name" className="text-[24px] font-medium">
            Şifre
          </label>
          <input type="password" placeholder="Şifrenizi giriniz" id="name" className="rounded-lg border outline-none h-10 pl-5" />
          <button className="rounded-lg bg-[#F0EBCE] text-[24px] font-medium shadow-outlineShadow" onClick={loginHandle}>
            Giriş Yap
          </button>
          <div className="flex gap-x-4">
            <p className="font-medium">Yeni bir hesap için</p>
            <NavLink to="/Auth/register">
              <p className="font-bold underline cursor-pointer">Kaydol</p>

            </NavLink>
          </div>
        </div>

      </div>
    </Container>


  );
}

export default Login;
