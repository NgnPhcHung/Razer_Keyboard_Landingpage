import { useState } from "react";
import { createContext } from "react";
import { useGLTF } from '@react-three/drei';



export const ColorContext = createContext({});


export const ColorContextProvider = ({children}) => {
  const { materials } = useGLTF('/models/mechanicalSwitch.glb')
    const [currentColor, serCurrentColor] = useState({
        color:"#13C612",
        text:"RAZER™ Green",
        rgbColor:"124, 214, 109",
    })

    let changeColorContext = (colorObj) => {
        materials.housing.color.set('#2D2D2D')
        materials.stem.color.set(colorObj.color);
        serCurrentColor(colorObj)
      }

    return(
        <ColorContext.Provider value={{currentColor, changeColorContext}}>
            {children}
        </ColorContext.Provider>
    )

}