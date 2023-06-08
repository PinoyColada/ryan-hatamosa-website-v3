import React from 'react'

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
                            From front-end to back-end, my expertise knows no limits. Once a computer engineer
                            major, I founded out about coding, and thus submerged myself in the world of programming.
                        </p>
                        <br />
                        <p>
                            Graduating from Prince George&#39;s Community College, I have learned to
                            design algorithms to solve complex mathematical or scientific problems
                            and utilize object-oriented methodology to write efficient code. Onwards,
                            I&#39;ve graduated from General Assembly&#39;s Software Immersive Bootcamp which consisted of
                            420+ hours of learning the fundamentals of front-end and back-end web development.
                            I am now pursuing on obtaining my Bachelor&#39;s degree at University Of Maryland.
                        </p>
                        <br />
                        <p>
                            As a result of these experiences, I had the opportunity to work with a
                            variety of developers and teams. This has allowed me to develop a working style that emphasizes{" "}
                            <span className="font-bold">{" open-mindedness"}</span>,
                            <span className="font-bold">{" problem-solving"}</span>,
                            <span className="font-bold">{" adaptability"}</span>, and
                            <span className="font-bold">{" collaboration"}</span>.
                            Alongside that, my background in management allows
                            me to improve my communication and leadership skills to make me an efficient team player.
                        </p>
                        <br />
                        <p>
                            <span className="font-bold text-teal-500">
                                I&#39;m currently looking for a position. You should hire me. 🙂
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection