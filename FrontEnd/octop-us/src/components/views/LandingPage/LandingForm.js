import { React, useState } from "react";
import "./LandingForm.css";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function LandingForm(props) {
  const [loginmodalopen, setLoginModalOpen] = useState(false);
  const [registermodalopen, setRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };
  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };
  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  return (
    <div>
      <div className="landing-page__btndiv">
        <button className="landing-page__btn" onClick={openLoginModal}>
          로그인
        </button>
        <LoginModal open={loginmodalopen} close={closeLoginModal}></LoginModal>
        <button className="landing-page__btn" onClick={openRegisterModal}>
          회원가입
        </button>
        <RegisterModal
          open={registermodalopen}
          close={closeRegisterModal}
        ></RegisterModal>
      </div>
    </div>
  );
}

export default LandingForm;