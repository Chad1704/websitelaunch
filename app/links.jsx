"use client";

import React from "react";
import CustomTooltipLink from "./customToolTip";

function Links() {
  return (
    <div className="w-full font-mono h-full flex justify-center">
      <div className="flex flex-col space-y-14 md:space-y-17 lg:ml-30 mt-20 text-light duration-400 ease-in-out transition">
        <CustomTooltipLink href="https://www.linkedin.com/in/chadkatz/" target="_blank" rel="noopener noreferrer">
          <div className="linkbar custom-underline text-center opacity-70 hover:opacity-100">
            Linkedin
          </div>
        </CustomTooltipLink>

        <CustomTooltipLink href="/Blog" target="_blank" rel="noopener noreferrer">
          <div className="custom-underline linkbar text-center opacity-70 hover:opacity-100">
            Blog
          </div>
        </CustomTooltipLink>

        <CustomTooltipLink href="https://github.com/Chad1704" target="_blank" rel="noopener noreferrer">
          <div className="linkbar custom-underline text-center opacity-70 hover:opacity-100">
            Github
          </div>
        </CustomTooltipLink>

        <CustomTooltipLink href="https://chadkatz.com">
          <div className="linkbar custom-underline text-center opacity-70 hover:opacity-100">
            Email
          </div>
        </CustomTooltipLink>

        <CustomTooltipLink href="/404" target="_blank" rel="noopener noreferrer">
          <div className="linkbar custom-underline text-center opacity-70 hover:opacity-100">
            Resume
          </div>
        </CustomTooltipLink>

        <CustomTooltipLink href="/404" target="_blank" rel="noopener noreferrer">
          <div className="linkbar text-center custom-underline opacity-70 hover:opacity-100">
            Youtube
          </div>
        </CustomTooltipLink>
      </div>
    </div>
  );
}

export default Links;
