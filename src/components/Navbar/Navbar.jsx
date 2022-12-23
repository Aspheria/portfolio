//一応モバイルファーストなのでモバイル用
//ハンバーガーメニュー設置

import React from "react";
import { div, header } from "./navbar.module.scss";
import DisplayNav from "./DisplayNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className={`${div} ${header}`}>
      <DisplayNav />
      <MobileNav />
    </div>
  );
};

export default Navbar;
