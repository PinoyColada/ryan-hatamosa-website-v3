import React from "react";
import Image from "next/image";
import Link from "next/link";

const skills = [
  { skill: "Java" },
  { skill: "Spring" },
  { skill: "Python" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Nestjs" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "PostgreSQL" },
  { skill: "MongoDB" },
  { skill: "Firebase" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              From front-end to back-end, my expertise knows no limits. Once a
              computer engineer major, I founded out about coding, and thus
              submerged myself in the world of programming.
            </p>
            <br />
            <p>
              As a graduate of both Prince George's Community College and
              University of Maryland, I have learned to design algorithms to
              solve complex mathematical or scientific problems and utilize
              object-oriented methodology to write efficient code. Onwards,
              I&#39;ve graduated from General Assembly&#39;s Software Immersive
              Bootcamp which consisted of 420+ hours of learning the
              fundamentals of front-end and back-end web development. For my
              experience, I've interned as a Full-stack developer to help
              develop{" "}
              <Link
                href="https://www.amotionsinc.com/"
                className="hover:underline font-bold"
              >
                Amotions
              </Link>
              . Currently, I am working for{" "}
              <Link
                href="https://astreya.com/"
                className="hover:underline font-bold"
              >
                Astreya
              </Link>{" "}
              as a IT Technician providing support to Google employees.
              Additionally, I volunteer as a Discord Bot Developer at{" "}
              <Link
                href="https://www.pitchlabs.org/"
                className="hover:underline font-bold"
              >
                Pitch Labs
              </Link>
              .
            </p>
            <br />
            <p>
              As a result of these experiences, I had the opportunity to work
              with a variety of developers and teams. This has allowed me to
              develop a working style that emphasizes{" "}
              <span className="font-bold">{" open-mindedness"}</span>,
              <span className="font-bold">{" problem-solving"}</span>,
              <span className="font-bold">{" adaptability"}</span>, and
              <span className="font-bold">{" collaboration"}</span>. Alongside
              that, my background in management allows me to improve my
              communication and leadership skills to make me an efficient team
              player.
            </p>
            <br />
            <p>
              <span className="font-bold text-teal-500">
                I&#39;m currently looking for a Software Development position.
                You should hire me. 🙂
              </span>
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:block md:relative md:left-20 md:z-0"
              src="/anime_character.png"
              alt="anime guy"
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
