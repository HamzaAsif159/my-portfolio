import React from "react"
import Data from "../constant/Data"

export default function Aboutme() {
  return (
    <section className="bg-gray-800">
      <div className="h-48 max-w-6xl mx-auto text-white bg-gray-800">
        <h1 className="py-20 text-5xl font-bold text-center  md:text-9xl md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-gray-900">
        <div className="max-w-6xl pt-20 mx-auto text-container">
          <p
            className="mx-4 text-2xl font-semibold leading-loose text-white md:text-4xl"
            style={{ lineHeight: "3rem" }}
          >
            {Data.about.title}. Currently working on{" "}
            <a
              className="px-2 py-1 text-white bg-red-500 rounded-md cursor-pointer"
              href={Data.about.currentProjectUrl}
            >
              {Data.about.currentProject}
            </a>
          </p>
        </div>
      </div>
      <div className="px-4 bg-gray-900 ">
        <div className="grid max-w-6xl grid-cols-1 pt-20 mx-auto md:grid-cols-3 gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-200">Contact</h1>
              <p className="mt-4 text-lg text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${Data.email}`}
                  className="font-bold text-gray-300 border-b-2 border-gray-300 "
                >
                  mail
                </a>{" "}
                and I will get back. I swear.
              </p>
            </div>

            {/* Social Links */}
            <h1 className="mt-8 text-xl font-semibold text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4 text-white">
              <div className="flex flex-row items-center justify-start ">
                <a
                  href={Data.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="relative overflow-hidden font-mono text-lg text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </div>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={Data.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="relative overflow-hidden font-mono text-lg text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </div>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={Data.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="relative overflow-hidden font-mono text-lg text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={Data.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="relative overflow-hidden font-mono text-lg text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={Data.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="relative overflow-hidden font-mono text-lg text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            <p className="mb-4 text-xl text-gray-300 ">
              {Data.about.description}
            </p>
            <h1 className="inline-block px-2 py-1 text-3xl font-bold bg-red-500 rounded-md text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://i.ibb.co/zH30cGr/Tailwind-CSS-Logo-svg.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
                className="w-20 h-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
