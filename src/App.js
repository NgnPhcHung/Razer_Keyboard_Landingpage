import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import KeyboardModel from "./sections/KeyboardModel";
import ChromaSection from "./sections/ChromaSection";
import Quotes from "./sections/Quotes";
import { GlobalStyle } from "./styles/GlobalStyles";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
import { ColorContextProvider } from "./context/ColorContext";
import PreviewSection from "./sections/PreviewSection";

function App() {
  return (
    <>
    <GlobalStyle/>
    
      <Quotes/>
      <KeyboardModel/> 
      <HeroSection/>
      <DesignSection/>
      <DisplaySection/>
      <ChromaSection/>
      <BatterySection/>
      <ColorContextProvider>
        <ColorSection/>
        <PreviewSection/>
      </ColorContextProvider>      
    </>
  );
}

export default App;
