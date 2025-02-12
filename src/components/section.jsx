import React from 'react'
import {delay, motion} from "framer-motion"

const section = ({h3,text,hasbtn=true,btntext,imgsrc,imgsize="70%",bgcolor,headingcolor,textcolor,btncolor,btnbgcolor}) => {
    const headingoptions = {
        intial:{
          y:'100%',
          opacity:0,
        },
        whileInView:{
          y:0,
          opacity:1,
        }
      };
      const textoptions = {
        ...headingoptions,
        transition: {
            delay: 0.9,
        }
      }
    return (
    <section className='section'>
        <div>
            <motion.h3 style={{
                color:headingcolor,
            }}  intial={{
                y:'100%',
                opacity:0,
              }}
              whileInView={{
                y:0,
                opacity:1,
              }}>{h3}
            </motion.h3>
            <motion.p style={{
                color:textcolor,
            }} {...textoptions}>{text}</motion.p>
            {
                hasbtn && <button style={{
                    color:btncolor,
                    backgroundColor:btnbgcolor
                }}>{btntext}</button>
            }
            <div>
                <img src={imgsrc} alt="" style={{
                    width:imgsize,
                }} />
            </div>
        </div>
    </section>
  )
}

export default section;