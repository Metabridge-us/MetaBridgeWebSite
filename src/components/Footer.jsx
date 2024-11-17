import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p  className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <p  className="text-n-4">CONTACT US
          <p>Corporate HQ</p>
          <p>400 North Saint Paul St.</p>
          <p>Suite 920</p>
          <p>Dallas, Texas 75201</p>
          Toll Free: <span className="text-purple-500">(888) 732-4197</span> 
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-full transition-colors hover:bg-slate-200"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;