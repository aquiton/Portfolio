import { useEffect, useState } from "react"
import { BubbleHeader } from "./BubbleHeader"
import { DropDownHeader } from "./DropDownHeader"

export const Header = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
  
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])

    return(
        <div>
            {screenWidth > 1440 ? (<BubbleHeader/>): (<DropDownHeader/>)}
        </div>
    )
}