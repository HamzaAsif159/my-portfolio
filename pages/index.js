import React from "react"
import Container from "../components/Container"
import Hero from "../components/Hero"
import FavoriteProjects from "../components/FavoriteProjects"
// importing aos
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Container>
        <Hero />
        <div data-aos="fade-up" data-aos-duration="3000">
          <FavoriteProjects />
        </div>
      </Container>
    </>
  )
}
