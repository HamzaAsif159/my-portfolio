import React from "react"
import Data from "../constant/Data"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {
  return (
    <section className="text-white bg-gray-800">
      <div className="h-48 max-w-6xl mx-auto bbg-gray-800">
        <h1
          className="py-20 text-5xl font-bold text-center  md:text-9xl md:text-left"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Experience
        </h1>
      </div>
      <div className="-mt-4 bg-gray-900">
        <div className="grid max-w-xl grid-cols-1 pt-20 mx-auto dark:bg-gray-900">
          {/* Experience card */}
          {Data.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                description={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === Data.experience.length - 1 ? null : (
                <div className="flex flex-col items-center -mt-2 divider-container">
                  <div className="relative z-10 w-4 h-4 bg-green-500 rounded-full">
                    <div className="relative z-10 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 -mt-2 bg-gray-500 rounded-full"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
