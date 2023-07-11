import React from 'react'
import { motion } from "framer-motion"
const Section = ({ h3, text, hasBtn = true, btnText, imgSrc, imgSize = "70%", backgroundColor, headingColor, textColor, btnBgColor, btnColor }) => {


    const headingOptions = {
        initial: {
            y: "-100%",
            opacity: 0,

        },

        whileInView: {
            y: 0,
            opacity: 1,
        }
    }

    const textOption = {
        ...headingOptions,
        transition: {
            delay: 0.3,
        }
    }
    const buttonOption={
        initial:{
            y:"100%",
            opacity:0,
        },
        whileInView:{
            y:0,
            opacity:1,
        },
        transition:{
            delay:0.3,
            ease:"easeIn"
        }
    }

    const imgOptions={
        initial:{
            scale:0.1,
            opacity:0,
        },
        whileInView:{
            scale:1,
            opacity:1,
        },
        transition:{
            delay:0.3,
            ease:"easeIn"
        }
    }
    return (
        <div className='section' style={{
            backgroundColor: backgroundColor,
        }}>
            <div className="">
                <motion.h3 data-cursorpointer={true} style={{
                    color: headingColor,
                }}
                    {...headingOptions}
                >{h3}</motion.h3>

                <motion.p {...textOption} style={{
                    color: textColor,
                }}>{text}</motion.p>

                {hasBtn && <motion.button {...buttonOption} data-cursorpointer={true} style={{
                    color: btnColor,
                    background: btnBgColor,
                }}>{btnText}</motion.button>}

                <div className="">
                    <motion.img {...imgOptions} src={imgSrc} style={{
                        width: imgSize,
                    }} alt="ImgSrc" />
                </div>

            </div>
        </div>
    )
}

export default Section  