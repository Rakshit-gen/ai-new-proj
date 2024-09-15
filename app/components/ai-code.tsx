'use client'

import React from "react";
import { Compare } from "./acce-ui/compare";
import { GlareCard } from "./acce-ui/glarecard";

export function CompareCode() {
  return (
    <div className="p-4 flex items-center m-auto justify-center bg-black gap-24">
      <div>
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] bg-black"
        slideMode="hover"
      />
      </div>
      <div>
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] bg-black"
        slideMode="hover"
      />
      </div>
    </div>
  );
}
