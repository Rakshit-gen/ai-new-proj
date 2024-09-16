'use client'

import Image from "next/image";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { BackgroundBeamsWithCollision } from "./components/acce-ui/beamswithcollsion";
import { CompareCode } from "./components/ai-code";
import { TabsDemo } from "./components/tabs-add";
import { TextHoverEffect } from "./components/acce-ui/text-hover";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="bg-black">
      
      <BackgroundBeamsWithCollision className="inline bg-black z-10 -my-24">
        <HomePage></HomePage>
        <h1 className="text-white text-center text-2xl mb-12 m-auto justify-center flex"><TextHoverEffect text="Example" duration={2} /></h1>
        <CompareCode></CompareCode>
        <h1 className="text-white text-center text-2xl m-auto -mb-24 justify-center flex mt-32"><TextHoverEffect text="Pages" duration={2} /></h1>
        <TabsDemo></TabsDemo>
        <Footer></Footer>
      </BackgroundBeamsWithCollision>
      
    </div>
  );
}
