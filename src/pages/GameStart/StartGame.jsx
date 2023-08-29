import logo from "../../assets/logo.png"
import startButton from "../../assets/button_start.svg"
const StartGame = () => {
    return (
        <div id="logoHolder">
           <div className="mainContent fitImg">
           <div className="logo">
           <img src={logo} alt="" />
           </div>
           <div className="startImg buttonClick">
            <img src={startButton} alt="Start" />
           </div>
           </div>
        </div>
    );
};

export default StartGame;