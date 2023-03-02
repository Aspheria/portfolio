import React from "react";
import {
  title,
  h3,
  container,
  main,
  detail,
  tweet,
  socialMedia,
  icon,
  li,
  btn,
  profilePic,
  leftPart,
  bg,
  rightPart,
} from "./about.module.scss";
import { TwitterEmbed } from "react-social-media-embed";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { GrSpotify } from "@react-icons/all-files/gr/GrSpotify";
import { AiFillMediumCircle } from "@react-icons/all-files/ai/AiFillMediumCircle";
import profile from "../../images/portfolio.jpg";
import resume from "../../images/LorraneParrillaResume.pdf";
import AnimateInView from "../Animation";

const about = () => {
  return (
    <>
      <div className={title} id="about">
        <h1>About Me</h1>
      </div>
      <div className={bg}>
        <div className={container}>
          <div className={leftPart}>
            <main className={main}>
              <p className={h3}>
                A Front-End Developer <br></br>specialized <span>React</span>
              </p>
            </main>
            <AnimateInView>
              <img src={profile} alt="profile" className={profilePic} />
            </AnimateInView>
            <AnimateInView>
              <ul className={detail}>
                <li>
                I'm a Front-end and a Blockchain Developer graduated in Data Science and <br/>I'm working on some side projects, learning a couple new skills, reading some Lovecraft books.{" "}
                </li>
                <li>
                  <span>Have strong communication skills</span> to have worked a
                  customer service as a technical support specialist for 2 years
                  and trained more than 80 employees.
                </li>
                <li>
                  <span>
                    “DIY Entusiast”
                  </span>{" "}
                  is my growth mindset
                </li>
                <li>
                  Spend most of my free time working out, travelling and
                  watching sitcoms <br></br>(
                  <span>"The office" and "sopranos" are the best show ever!</span>)
                </li>
              </ul>
            </AnimateInView>
          </div>
          <AnimateInView>
            <div className={rightPart}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 16,
                }}
              >
                {/* <TwitterEmbed
                  url="https://twitter.com/hk_Vancouver/status/1608891933912600577"
                  width={450}
                  height={600}
                /> */}
              </div>
              <div className={`${detail} ${tweet}`}>
                <p className={tweet}>
                  Check my social medias through
                  {/* <span>
                    <a href="https://twitter.com/hk_Vancouver"> my Twitter!</a>
                  </span> */}
                </p>
              </div>
              <div className={socialMedia}>
                <li>
                  <a href="https://www.linkedin.com/in/lorrane-p-03b992115/">
                    <AiFillLinkedin
                      size="40px"
                      color="#3e3e3e"
                      className={icon}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Aspheria/">
                    <AiFillGithub
                      size="40px"
                      color="#3e3e3e"
                      className={icon}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://open.spotify.com/user/starkilleer">
                    <GrSpotify
                      size="40px"
                      color="#3e3e3e"
                      className={icon}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@lorran.parrilla">
                    <AiFillMediumCircle size="40px" color="#3e3e3e" className={icon} />
                  </a>
                </li>
              </div>
              <button className={`${li} ${btn}`}>
                <a href={resume}>resume</a>
              </button>
            </div>
          </AnimateInView>
        </div>
      </div>
    </>
  );
};

export default about;
