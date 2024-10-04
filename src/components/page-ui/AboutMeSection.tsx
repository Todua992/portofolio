// src/components/page-ui/AboutMeSection.tsx
"use client";
import React from "react";
import Image from "next/image";

export function AboutMeSection() {
  return (
    <section
      id="aboutme"
      className="max-w-[1280px] mx-auto py-20 px-8 h-screen flex justify-center items-center"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[960px]">
        {/* Left Text Section */}
        <div className="flex-1 text-left lg:pr-8 pb-8 lg:pb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg lg:text-xl">
            I&#39;m a Software Engineering{" "}
            <span className="text-red-500">Student</span> at Aalborg University
            in Copenhagen, passionate about programming languages, algorithms,
            and data structures. Beyond coding, I prioritize physical fitness
            through sports like Paddle Tennis and Disc Golf.
          </p>
          <p className="text-lg lg:text-xl mt-4">
            On weekends, I enjoy the vibrant social scene, and instead of books,
            I dive into Stack Overflow to stay updated.
          </p>
          
          {/* Image placed between paragraphs for smaller screens */}
          <div className="block lg:hidden my-8 flex justify-center">
            <div className="overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
              <Image
                src="/images/me.png" // Replace with your actual image path
                alt="About Me"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-lg lg:text-xl mt-4">
            I thrive on developing games and apps, blending technical skills
            with creativity to innovate and engage users.
          </p>
          <p className="text-lg lg:text-xl mt-4">
            I excel in team settings, leveraging over four years of experience
            in C# and other languages to tackle diverse programming challenges.
          </p>
        </div>

        {/* Image Section - Only on larger screens */}
        <div className="flex-1 hidden lg:flex justify-center">
          <div className="overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
            <Image
              src="/images/me.png" // Replace with your actual image path
              alt="About Me"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}