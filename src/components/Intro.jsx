import React from 'react'
import video from "../assets/mbaVideo.mp4"
import "../styles/intro.scss"
const Intro = () => {
    return (
        <div className='intro'>
            <video src={video} muted autoPlay loop controlsList='nodownload'></video>
            <div className="">
                
            </div>
        </div>
        
    )
}

export default Intro