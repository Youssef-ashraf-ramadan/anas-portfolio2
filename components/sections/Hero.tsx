"use client";
import { motion } from "framer-motion";
import { Download, Monitor } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { personalInfo, heroContent } from "@/lib/data";
import { useState, useEffect } from "react";

export function Hero() {
  const [introText, setIntroText] = useState("");
  const [nameText, setNameText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const intro = heroContent.intro;
    const name = personalInfo.name;
    let introIndex = 0;
    let nameIndex = 0;
    let isTypingIntro = true;
    let isTypingName = false;
    let isDeletingIntro = false;
    let isDeletingName = false;
    let pauseCount = 0;

    const typeInterval = setInterval(() => {
      // Typing intro
      if (isTypingIntro && !isDeletingIntro) {
        if (introIndex < intro.length) {
          setIntroText(intro.slice(0, introIndex + 1));
          introIndex++;
        } else {
          // Wait before starting to type name
          pauseCount++;
          if (pauseCount > 5) {
            isTypingIntro = false;
            isTypingName = true;
            pauseCount = 0;
          }
        }
      }
      // Typing name
      else if (isTypingName && !isDeletingName) {
        if (nameIndex < name.length) {
          setNameText(name.slice(0, nameIndex + 1));
          nameIndex++;
        } else {
          // Wait before deleting
          pauseCount++;
          if (pauseCount > 20) {
            isTypingName = false;
            isDeletingName = true;
            pauseCount = 0;
          }
        }
      }
      // Deleting name
      else if (isDeletingName) {
        if (nameIndex > 0) {
          nameIndex--;
          setNameText(name.slice(0, nameIndex));
        } else {
          isDeletingName = false;
          isDeletingIntro = true;
        }
      }
      // Deleting intro
      else if (isDeletingIntro) {
        if (introIndex > 0) {
          introIndex--;
          setIntroText(intro.slice(0, introIndex));
        } else {
          // Restart cycle
          isDeletingIntro = false;
          isTypingIntro = true;
          introIndex = 0;
          nameIndex = 0;
          pauseCount = 0;
        }
      }
    }, 100);

    // Cursor blink animation
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] lg:min-h-screen w-full overflow-hidden py-12 lg:py-0 bg-[#1a1a1a]">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid - created via CSS/SVG inline for reliability */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Professional Icons - Real Tech Logos */}
        {[
          // JavaScript
          {
            Icon: SiJavascript,
            color: "text-brand-js",
            x: "10%",
            y: "20%",
            size: 48,
            delay: 0,
            duration: 8,
          },
          // React
          {
            Icon: SiReact,
            color: "text-brand-react",
            x: "85%",
            y: "15%",
            size: 56,
            delay: 1,
            duration: 10,
          },
          // Next.js
          {
            Icon: SiNextdotjs,
            color: "text-white",
            x: "80%",
            y: "65%",
            size: 52,
            delay: 2,
            duration: 9,
          },
          // TypeScript
          {
            Icon: SiTypescript,
            color: "text-brand-typescript",
            x: "15%",
            y: "70%",
            size: 48,
            delay: 3,
            duration: 11,
          },
          // Tailwind
          {
            Icon: SiTailwindcss,
            color: "text-brand-tailwind",
            x: "50%",
            y: "10%",
            size: 44,
            delay: 4,
            duration: 12,
          },
          // HTML5
          {
            Icon: SiHtml5,
            color: "text-brand-html",
            x: "45%",
            y: "85%",
            size: 40,
            delay: 2.5,
            duration: 7,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color} opacity-20`}
            style={{ top: item.y, left: item.x }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.Icon size={item.size} strokeWidth={1.5} />
          </motion.div>
        ))}

        {/* Gradient Orbs for Atmosphere */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-[128px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-primary/15 via-primary/8 to-transparent rounded-full blur-[128px] -z-10" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-6xl">
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8 will-change-transform"
          >
            <h2 className="text-lg md:text-xl font-semibold text-primary mb-3 font-outfit tracking-wide uppercase min-h-[1.5rem]">
              {introText}
              {showCursor && (
                <span className="animate-pulse">|</span>
              )}
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit tracking-tight leading-[1.1] mb-4 pb-2 min-h-[4rem]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary">
                {nameText}
                {showCursor && nameText.length > 0 && (
                  <span className="animate-pulse text-primary">|</span>
                )}
              </span>
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-2xl font-medium font-outfit mt-2">
              <span className="inline-block bg-[#1f1f1f] text-primary px-6 py-2 rounded-full border border-primary/30 transition-colors duration-300 font-semibold">
                {personalInfo.title}
              </span>
            </h3>
          </motion.div>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 font-normal max-w-xl mx-auto lg:mx-0">
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="/projects"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary via-primary/95 to-primary/90 hover:from-primary/90 hover:via-primary/85 hover:to-primary/80 text-slate-900 font-bold rounded-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Monitor className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              View Projects
            </Link>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="group w-full sm:w-auto px-8 py-4 bg-[#1f1f1f] text-primary font-bold rounded-xl border border-white/10 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative w-64 h-64 md:w-[450px] md:h-[450px] will-change-transform"
          >
            {/* Animated Background Glow */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary/25 via-primary/15 to-primary/10 rounded-full blur-[80px] -z-10 will-change-transform"
            />

            {/* Professional 2D Floating Animation */}
            <motion.div
              animate={{
                y: [-12, 12, -12],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              className="relative w-full h-full will-change-transform"
            >
              {/* Organic Blob Shape Image Container */}
              <div
                className="relative w-full h-full overflow-hidden group transition-all duration-500"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  backgroundColor: "#FEF418", // JS Yellow
                }}
              >
                {/* Optional Inner Ring for depth */}
                <div
                  className="absolute inset-0 z-10 box-border border-[6px] border-black/10 opacity-50 pointer-events-none"
                  style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                />

                <Image
                  src="/images/anas.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover scale-85 translate-y-2 transition-transform duration-700" // Smaller scale to show yellow background
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
