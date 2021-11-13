import React from "react";
import { Link } from "react-router-dom";
import ButtonTemplate from "../../components/ButtonTemplate";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import "./my-hams.scss";
export default function MyHams() {
  const btn = {
    href: "/marketplace",
    text: "Marketplace",
    iconSrc: "assets/navigation-icons/marketplace.svg",
    color: "#ABA6A5",
    strokeColor: "#635e5d",
    textColor: "marketplace",
  };
  return (
    <div id="my-hams" className="">
      <div className="flex justify-between items-center">
        <SectionHeaderBackNav pageName="My Hamsters" />
        <Link className="block w-1/3" to={btn.href}>
          <ButtonTemplate color={btn.color} strokeColor={btn.strokeColor}>
            <div className={` button-text-container ${btn.textColor}`}>
              <img src={btn.iconSrc} alt={btn.text} />{" "}
              <span className="ml-2 relative z-10 text-black">{btn.text}</span>
            </div>
          </ButtonTemplate>
        </Link>
      </div>
    </div>
  );
}
