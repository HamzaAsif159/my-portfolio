import React from "react"

export default function ExperienceCard({
  title,
  description,
  year,
  company,
  companyLink,
}) {
  return (
    <div className="relative z-10 p-4 mx-4 bg-gray-800 border rounded-md shadow-xl experience-card">
      <h1 className="absolute text-4xl text-gray-800 -top-10 md:-left-10 md:-top-10 font-bol">
        {year}
      </h1>
      <h1 className="text-xl font-semibold">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="my-2 text-gray-400">{description}</p>
    </div>
  )
}
