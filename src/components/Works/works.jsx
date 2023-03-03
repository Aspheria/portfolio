import React from "react";
import {
  title,
  container,
  rowWrapper,
  subTitle,
  work1,
  work2,
  bg,
} from "./works.module.scss";

import youtube from "../../images/youtube.jpg";
import WorkCard from "../WorkCard/WorkCard";
import email from "../../images/email.jpg"

const Works = () => {
  return (
    <>
      <div className={title}>
        <h1>Works</h1>
      </div>

      <div className={bg}>
        <h2 className={subTitle}>
          Take a look on projects that I dev
          <br></br>
          You can also see the details from the Github link.
        </h2>
        <div className={container}>
          <div className={rowWrapper}>
            <div className={work1}>
              <WorkCard
                worktitle={"YouTube clone UI"}
                details={
                  "A clone of Youtube with dark theme"
                }
                tool={"React.js"}
                tool2={"HTML5"}
                tool3={"Material UI"}
                github={"https://github.com/Aspheria/YouTube-Clone"}
                link={"https://elastic-lalande-0d8529.netlify.app/"}
                image={youtube}
              />
            </div>
            <div className={work2}>
              <WorkCard
                worktitle={"Pure HTML/CSS Email"}
                details={
                  "An pure HTML CSS for Gmail"
                }
                tool={"HTML5"}
                tool2={"CSS"}
                tool3={"Material UI"}
                github={"https://github.com/Aspheria/email-unplugged/tree/main/Review"}
                link={"https://codepen.io/aspheria/pen/XWPRKvX"}
                image={email}
              />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
