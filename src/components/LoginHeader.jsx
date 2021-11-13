import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
const links = [
  { text: "about", href: "/" },
  { text: "team", href: "/" },
  { text: "roadmap", href: "/" },
  { text: "market", href: "/" },
];
export default function LoginHeader() {
  return (
    <div className="my-container flex items-center justify-between">
      <Link to="/">
        {" "}
        <img src="assets/logo.png" alt="logo" />
      </Link>
      <div className="flex gap-10">
        {links.map((link) => (
          <a key={link.text} className="text-white capitalize font-bold" href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}
