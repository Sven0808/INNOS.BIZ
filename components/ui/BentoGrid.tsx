"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./Gradientbg";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";




export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "akashjana663@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <>
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          className
        )}
        style={{

          background: " ",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >

        <div className={`${id === 6 && "flex justify-center"} h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )}
          </div>
          <div
            className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
              } `}
          >
            {spareImg && (
              <>
                <img
                  src={spareImg}
                  alt={spareImg}
                  //   width={220}
                  className="object-cover object-center w-full h-full"
                />
              </>
            )}
          </div>
          {id === 6 && (
            // add background animation , remove the p tag
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
          )}

          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>

            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
            >
              {title}
            </div>
            {/* 
            {id === 2 && (<>
              <GridGlobe />
              <p className="italic text-cyan-400">The security first platform</p>
              <h1 className="text-green-300">Simplify Your Security With Authentication Services</h1>
              <p className="italic max-w-64">Define acess roles for the end-users and extend your authorization capabilities to implement dynamic acess control</p>
              <button className="w-64 h-6 border-2">Simplify your security</button>
              <button className="w-64 h-10 border-2">Customer identify</button> 
              <button className="w-64 h-10 border-2">Adaptable authantication</button>
            </>)} */}


            {/* {id === 3 && (
              <div>
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
                <div className="absolute z-20 max-w-7xl">
                  <p className="italic text-cyan-300"> From custom software development to seamless integrations, we are your trusted partner in transforming ideas into impactful, scalable solutions. Let us guide you through the digital transformation journey with innovative, tailor-made services.</p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1udileHqcrbD09gjuFpUZlHgpOajw3UU_/view?usp=sharing"
                  target="_blank"
                >
                  <div className="z-10">
                    <LitupButton name="View Resume" />
                  </div>
                </a>
              </div>
            )} */}
            {id === 6 && (
              <div className="mt-5 relative">
                <div
                  className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                    }`}
                >
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
