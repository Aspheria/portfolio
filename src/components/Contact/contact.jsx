import React from "react";
import {
  container,
  title,
  mainBg,
  mainText,
  socialMedia,
  icon,
  contactBtn,
} from "../Contact/contact.module.scss";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { GrSpotify } from "@react-icons/all-files/gr/GrSpotify";
import AnimateInView from "../Animation";

const contact = () => {
  return (
    <>
      <div className={container} id="contact">
        <div className={mainBg}>
          <div className={mainText}>
            <div className={title}>
              <h1>Contact</h1>
              <AnimateInView>
                <div>
                  <p>
                    If you like my work,<br></br> why not contact me for your
                    next project?{" "}
                  </p>
                  <p>
                    You can find me on social media or send me a message here!
                  </p>
                </div>
              </AnimateInView>
            </div>
          </div>
          <div className={socialMedia}>
            <li>
              <a href="https://www.linkedin.com/in/lorrane-p-03b992115/">
                <AiFillLinkedin size="40px" color="#3e3e3e" className={icon} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Aspheria">
                <AiFillGithub size="40px" color="#3e3e3e" className={icon} />
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
          </div>
          <button className={contactBtn}>
            <a href="mailto:lorran.parrilla@gmail.com">Contact Me</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default contact;
