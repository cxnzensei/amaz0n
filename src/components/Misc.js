import React from "react";
import "../styles/Misc.css";
import { useStateValue } from "./StateProvider";

function Misc() {
  const [{ user }] = useStateValue();
  return (
    <div className="misc">
      <p className="status">{user ? `` : `You are not logged in`}</p>
      <a
        href="https://blog.aboutamazon.com/company-news/amazons-actions-to-help-employees-communities-and-customers-affected-by-covid-19/?_encoding=UTF8&token=GW&utm_content=COVID-19_roundup&utm_medium=swm&utm_source=gateway&utm_term=gw03162020&ref_=nav_swm_undefined&pf_rd_p=27b7c12a-22ef-4993-9b9d-d3fcfd2170df&pf_rd_s=nav-sitewide-msg-text-export&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=WC40YWRF0J6B2AEVDTQ3"
        className="ama-article"
      >
        {" "}
        Amazon's Response to COVID-19{" "}
      </a>
    </div>
  );
}

export default Misc;
