import React, {useEffect, useState} from "react";
import "./poloska.css";
const Poloska=({src})=>{
    const [offset, setOffset] = useState(0)

    // useEffect(() => {
    //     function handleScroll() {
    //         setOffset(window.scrollY)
    //     }
    //
    //     window.addEventListener("scroll", handleScroll)
    //
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll)
    //     }
    // }, [])
    return(
            <div
    className="poloska"
    style={{
        backgroundPositionY: offset/2 ,
        background: `url(${src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        width: '100%',
        height: '170px',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    }}
    />
    )
}
export default Poloska;
