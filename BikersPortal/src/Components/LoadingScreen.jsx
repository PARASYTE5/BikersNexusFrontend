import { useState, useEffect } from "react";
import Logo from './Images/LogoW.png'
import "./LoadingScreen.css"; // Custom styles

const LoadingScreen = ({ onFinish }) => {
  const [showLogo, setShowLogo] = useState(true);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBlink(true);
      setTimeout(() => {
        setShowLogo(false);
        onFinish();
      }, 500);
    }, 2000);
  }, []);

  return (
    <div className={`loading-container ${!showLogo ? "hide" : ""}`}>
      <img
        src={Logo} // Replace with your actual logo path
        alt="Bikers Portal Logo"
        className={`logo ${blink ? "blink" : ""}`}
      />
    </div>
  );
};

export default LoadingScreen;

