import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "../../static/svg/search.svg";
import Notification from "../../static/svg/notification.svg";
import { toggle } from "../../features/popus/popupSlice";
import { useDispatch } from "react-redux";
import { Navigator } from "../../App";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const popUp = () => {
    dispatch(
      toggle({
        title: "Привет",

        func: () => {
          navigate("/register");
        },
        buttonTitle: "Продолжить регистрацию",
        message: "Для полноценного использования всех возможностей  предлагаем заполнить профиль пользовател",
      }),
    );
  };

  return (
    <header className="w-full h-[60px] bg-[#2B361E] flex justify-center text-white pb-[5px]">
      <div className="flex items-center justify-between h-full w-full max-w-[1280px] px-[20px] mx-auto">
        <Link to="/" className=" text-[32px] font-logo text-">
          Agro ID
        </Link>

        <Navigator />
        <div className="flex gap-6 text-secondary">
          <div className="flex gap-4">
            <button>
              <img src={SearchIcon} alt="" />
            </button>
            <button>
              <img src={Notification} alt="" />
            </button>
          </div>
          <div className="flex gap-2 text-[14px]">
            <Link to={"/profile"}>Войти</Link>
            <div>|</div>
            <Link to={"/register"}>Зарегистрироваться</Link>
            {/* <button onClick={popUp}>Зарегистрироваться</button> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
