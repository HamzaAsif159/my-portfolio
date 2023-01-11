import React from "react"
import ProjectCard from "./ProjectCard"
import Data from "../constant/Data"

export default function Projects() {
  return (
    <section className="text-white bg-gray-800">
      <div className="h-48 max-w-6xl mx-auto bg-gray-800">
        <h1 className="py-20 text-5xl font-bold text-center md:text-9xl md:text-left">
          Projects
        </h1>
      </div>
      <div className="bg-gray-900">
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:py-20  md:grid-cols-2">
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
