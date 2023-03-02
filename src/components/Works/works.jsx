import React from "react";
import {
  title,
  container,
  rowWrapper,
  subTitle,
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  bg,
} from "./works.module.scss";

import youtube from "../../images/youtube.jpg";
import WorkCard from "../WorkCard/WorkCard";

const Works = () => {
  return (
    <>
      <div className={title}>
        <h1>Works</h1>
      </div>

      <div className={bg}>
        <h2 className={subTitle}>
          Hover over any project to learn more!
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
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
