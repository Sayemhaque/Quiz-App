import { useEffect, useState } from "react";
import loaderImage from "../../assets/loader.png"
import { MainLoader } from "./style";


const Loader = () => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);



  return (
    <MainLoader>
      <img src={loaderImage} alt="" />
      <br />
      <span>{progress}%</span>
    </MainLoader>
  );
};

export default Loader;
