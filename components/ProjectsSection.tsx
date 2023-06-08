import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare} from "react-icons/bs"

const projects = [
    {
        name: "Ryan's Portfolio Website",
        description:
            "A website about me and showcases my projects (that you are currently on now!) Created with Next.js and Tailwind CSS",
        image: "/website.jpg",
        github: "https://github.com/PinoyColada/ryan-hatamosa-website-v3",
        link:"www.google.com", // pending link
    },
    {
        name: "Body-Sculptors",
        description: "An application where you can record your workouts. Created with MongoDB, Express, React.js, and Node.js (MERN)",
        image: "/body-sculptors-logo.jpeg",
        github: "https://github.com/PinoyColada/Body-Sculptors",
        link: "https://agile-journey-75895.herokuapp.com/",
    },
    {
        name: "Coder Typer",
        description:
            "A type racing game by a Programmer, for programmers. Created with HTML, CSS, and Javascript",
        image: "/coder-typer-logo.png",
        github: "https://github.com/PinoyColada/Coder-Typer",
        link: "https://coder-typer.surge.sh/",
    },
]

const ProjectsSection = () => {
    return (
      <section id="projects">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
  
        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                        <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      </div>
                    </div>
                  </div>
              </div>
            )
          })}
          
        </div>
      </section>
    )
  }
  
  export default ProjectsSection