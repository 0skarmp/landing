
import Lottie from "lottie-react";
import fondo from '../src/assets/images/green line.json';
import Body from "./components/body";


function LandingPage() {
  return (
    <>
   
      <Body/>
      <div className="absolute mt-18 left-0 w-full z-1" > 
        <Lottie className='w-full fixed overflow-hidden'  animationData={fondo} loop={true} />
      </div>
      
    </>
  );
}

export default LandingPage;
