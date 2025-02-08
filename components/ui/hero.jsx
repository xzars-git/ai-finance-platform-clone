"use client";

import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { useEffect } from "react";
import { useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef();
  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='pb-20 px-4'>
      <div className='container mx-auto text-center'>
        <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>
          Manage Your Finances <br /> with Intellegence
        </h1>
        <p className='text-x1 text-gray-600 mb-8 max-w-2xl mx-auto'>
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className='flex justify-center space-x-4'>
          <Link href='/dashboard'>
            <Button size='lg' className='px-8'>
              Get Started
            </Button>
          </Link>
          <Link href='/dashboard'>
            <Button variant='outline' size='lg' className='px-8' va>
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className='hero-image-wrapper'>
          <div ref={imageRef} className='hero-image'>
            <Image
              src={"/banner.jpeg"}
              height={720}
              width={1280}
              priority
              className='rounded-lg shadow-2xl border mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
