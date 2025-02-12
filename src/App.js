import { useEffect } from "react";
import {} from "framer-motion";
import Introvideo from "./components/Introvideo";
import Section from "./components/section";
import Footer from "./components/Footer";
import Misc from "./components/misc";
import "./styles/App.scss";
import "./styles/Section.scss"
import "./styles/Introvideo.scss";
import "./styles/Footer.scss";
import "./styles/misc.scss";
import freshtopicimg from "./assets/academy.png";
import freshtopic2img from "./assets/story.png";
import tedTalksimg from "./assets/in-the-news.gif";
import franchiseimg from "./assets/franchise.gif";
import mapimg from "./assets/locations.png";
import coursesimg from "./assets/image2.png";
import albumimg from "./assets/mba-cares.gif";
import baratimg from "./assets/image1.png";
import chaiwalaimg from "./assets/image3.png";
import data from "./data/data.json";

const yellow = '#fff100', pink = '#ed1e79', red = 'red', white = 'fff', brown = '#6d3d0f';

function App() {

const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala} = data;

  const dotcursor=(e)=>{
    const cursor=document.querySelector(".cursor");
    cursor.style.top=`${e.pageY-14}px`;
    cursor.style.left=`${e.pageX-14}px`;
  }

  useEffect(() => {
    window.addEventListener("mousemove",dotcursor);
    return () => {
    window.removeEventListener("mousemove",dotcursor);
    }
  })
  
  return (<div>
    <Introvideo />
    <Section h3={freshTopic.heading} text={freshTopic.text}
      btntext={freshTopic.btn} imgsrc={freshtopicimg}
      bgcolor={pink} headingcolor={yellow} textcolor={yellow} btncolor={pink} btnbgcolor={yellow} />

       <Section h3={freshTopic2.heading} text={freshTopic2.text}
      btntext={freshTopic2.btn} imgsrc={freshtopic2img}
      bgcolor={pink} headingcolor={yellow} textcolor={yellow} btncolor={pink} btnbgcolor={yellow} />

       <Section h3={tedTalks.heading} text={tedTalks.text}
      btntext={tedTalks.btn} imgsrc={tedTalksimg}
      bgcolor={pink} headingcolor={yellow} textcolor={yellow} btncolor={pink} btnbgcolor={yellow} />

      <Section h3={franchise.heading} text={franchise.text}
      btntext={franchise.btn} imgsrc={franchiseimg}
      bgcolor={pink} headingcolor={yellow} textcolor={yellow} btncolor={pink} btnbgcolor={yellow} />

      <Section h3={map.heading} text={map.text}
      hasbtn={false} btntext={map.btn} imgsrc={mapimg}
      bgcolor={pink} headingcolor={yellow} textcolor={yellow} btncolor={pink} btnbgcolor={yellow} />

      <Section h3={courses.heading} text={courses.text}
      btntext={courses.btn} imgsrc={coursesimg}
      bgcolor={pink} headingcolor={yellow} textcolor={yellow} btncolor={pink} btnbgcolor={yellow} />
      
      <Section h3={album.heading} text={album.text}
      btntext={album.btn} imgsrc={albumimg}
      bgcolor={pink} headingcolor={yellow} textcolor={yellow} btncolor={pink} btnbgcolor={yellow} />

      <Section h3={barat.heading} text={barat.text}
      btntext={barat.btn} imgsrc={baratimg}
      bgcolor={pink} headingcolor={yellow} textcolor={yellow} btncolor={pink} btnbgcolor={yellow} />

      <Section h3={chaiwala.heading} text={chaiwala.text}
      btntext={chaiwala.btn} imgsrc={chaiwalaimg}
      bgcolor={pink} headingcolor={yellow} textcolor={yellow} btncolor={pink} btnbgcolor={yellow} /> 
      <Footer />

      <Misc />
  </div>
  )
}

export default App;
