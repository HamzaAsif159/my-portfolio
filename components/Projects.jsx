import React from "react"
import ProjectCard from "./ProjectCard"
import Data from "../constant/Data"

export default function Projects() {
  return (
    <section className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto h-48 bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {Data.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              key={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
