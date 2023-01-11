import React from "react"
import Link from "next/link"

export default function FavoriteProjects() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col items-center justify-between md:flex-row md:pt-40 md:my-20 lg:my-0">
          <h1 className="max-w-lg my-20 text-6xl font-bold text-center text-gray-600 lg:text-9xl md:my-0">
            Favorite Projects
          </h1>
          <Link
            href="/projects"
            className="flex flex-row items-center px-8 py-4 mb-20 space-x-4 text-xl font-semibold bg-white rounded-md shadow-lg md:mb-0 dark:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View all</p>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className="grid gap-8 md:pb-40 md:grid-cols-3 lg:-mt-8">
          {/* Single card */}
          <a
            href="https://react-weather-app233.netlify.app"
            className="block w-full col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://i.ibb.co/5R7VHRY/Screenshot-from-2023-01-04-18-02-35.png"
                alt="portfolio"
                className="w-screen transition ease-in transform hover:scale-110 duration-2000"
              />
              <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
                Weatherbug
              </h1>
              <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
                01
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://quizzical159.netlify.app/"
            className="block w-full col-span-3 shadow-2xl sm:col-span-2"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://i.ibb.co/jbmS8PV/Screenshot-from-2023-01-04-18-11-46.png"
                alt="portfolio"
                className="w-screen transition ease-out transform hover:scale-125 duration-2000"
              />
              <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
                Quizzical
              </h1>
              <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
                02
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://pictobook.netlify.app/"
            className="block object-cover w-full col-span-3 sm:col-span-1"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/F8F20cH/Screenshot-from-2023-01-04-18-05-46.png"
                alt="portfolio"
                className="object-cover transition ease-out transform shadow-2xl hover:scale-125 duration-2000"
              />
              <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
                Pictobook
              </h1>
              <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
                03
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
