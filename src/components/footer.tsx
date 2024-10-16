"use client";

import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socials } from "@/app/config";

// const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socials.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socials.github} icon={FaGithub} />
      <SocialLink href={socials.instagram} icon={FaInstagram} />
      <SocialLink href={socials.email} icon={TbMailFilled} />
      {/* <a href="/rss.xml" target="_self">
        <FaRss />
      </a> */}
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      {/* <time>© {YEAR}</time>{" "} */}
      <a
        className="no-underline"
        href={socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        {"Site powered by Next.js"}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
