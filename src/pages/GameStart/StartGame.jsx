import logo from "../../assets/logo.png"
import startButton from "../../assets/button_start.svg"
const StartGame = () => {
    return (
        <div className="h-[770px] flex justify-center items-center flex-col text-center py-12">
            <div className=" bg-[#107fc9] w-screen h-auto pb-28">
            <div className="w-1/2 mx-auto pt-[7%]">
                <img   src={logo} alt="" />
            </div>
            <div className="flex justify-center items-center cursor-pointer  w-[15%] m-auto mt-[10px]">
                <img  src={startButton} alt="" />
            </div>
        </div>
        </div>
    );
};

export default StartGame;