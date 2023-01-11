import React from "react"
import { RoughNotationGroup } from "react-rough-notation"
import { RainbowHighlight } from "./RainbowHighlight.jsx"
import Data from "../constant/Data.js"

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981"]
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden md:flex-row md:items-start">
      {/* Text container */}

      <div className="w-full mx-auto text-center md:w-1/2 md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="my-2 text-4xl font-bold text-gray-200 md:text-8xl">
              React Developer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="my-2 text-4xl font-bold text-gray-200 md:text-8xl">
              Fixing bugs
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="my-2 text-4xl font-bold text-gray-200 md:text-8xl">
              & words
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="relative w-11/12 md:-mr-10  md:w-1/2 mt-14">
        <div className="w-full md:w-9/12 ">
          <img src={Data.avatarUrl} alt="avatar" className="shadow " />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-white bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono text-white"> That is me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
