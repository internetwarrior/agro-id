import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "../../static/svg/search.svg";
import Notification from "../../static/svg/notification.svg";
import { toggle } from "../../features/popus/popupSlice";
import { useDispatch } from "react-redux";
import { HeaderNavigator } from "../../App";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header className="w-full h-[60px] bg-[#2B361E] flex justify-center text-white">
      <div className="flex items-center justify-between h-full w-full max-w-[1600px] px-[20px] md:px-[40px] 2xl:px-[0px]">
        <Link to="/" className=" text-[32px] font-logo text-">
          Agro ID
        </Link>

        <HeaderNavigator />
        <div className="flex gap-6 text-secondary">
          <div className="flex gap-4">
            <button>
              <img src={SearchIcon} alt="" />
            </button>
            <button>
              <img src={Notification} alt="" />
            </button>
          </div>
          <div className="flex gap-2">
            <Link to={"/profile"}>Войти</Link>
            <div>|</div>
            <button
              onClick={() => {
                dispatch(
                  toggle({
                    title: "Привет",

                    func: () => {
                      navigate("/register");
                    },
                    buttonTitle: "Продолжить регистрацию",
                    message:
                      "Для полноценного использования всех возможностей  предлагаем заполнить профиль пользовател",
                  })
                );
              }}
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;