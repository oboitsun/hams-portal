import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/uiReducer";
import { useNavigate, useLocation } from "react-router-dom";
import "./login-page.scss";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import loginBG from "/assets/bg-login.png";
import Modal from "../../components/Modal";
import ButtonTemplate from "../../components/ButtonTemplate";

export default function Login(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  let state = location.state;
  let from = state ? state.from.pathname : "/";
  const handleLogin = () => {
    dispatch(setUser(true));
    navigate(from, { replace: true });
  };
  const wallets = [
    {
      name: "stoic",
      onClick: handleLogin,
      btnStyle: "turf",
      strokeColor: "#696251",
      color: "#9E9171",
    },
    {
      name: "plug",
      onClick: handleLogin,
      btnStyle: "crimson",
      strokeColor: "#AD6016",
      color: "#D88535",
    },
    {
      name: "earth",
      onClick: handleLogin,
      btnStyle: "charcoal",
      strokeColor: "#000",
      color: "#252525",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  return (
    <div id="login-page" className="w-full min-h-screen overflow-hidden relative">
      <div className="absolute top-10 w-full left-0 z-[2]">
        <LoginHeader />
      </div>
      <img className="background" src={loginBG} alt="bg" />
      <div className="shade-gradient"></div>
      <div className="my-container">
        <div className="login-window ">
          <p className="heading font-creep">
            Enter the
            <br />
            Haunted house
          </p>
          <div className="grid gap-6 w-full">
            {wallets.map((wallet, i) => (
              <ButtonTemplate
                color={wallet.color}
                strokeColor={wallet.strokeColor}
                key={i}
                type={wallet.btnStyle}
                className={`wallet ${wallet.name}`}
                onClick={wallet.onClick}
              >
                <p className="text-center z-10 relative"> connect {wallet.name} wallet</p>
              </ButtonTemplate>
            ))}
          </div>
          <div className="w-full h-1 bg-white opacity-20 my-8"></div>
          <p className="text-white font-bold text-sm self-start">Help Center</p>
        </div>
        <div className="absolute bottom-10 w-full left-0 z-[2]">
          <LoginFooter
            onClick={() => {
              setShowModal(true);
            }}
            login
          />
        </div>
      </div>
      <Modal />
    </div>
  );
}
