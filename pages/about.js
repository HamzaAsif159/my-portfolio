import React from "react"
import Aboutme from "../components/Aboutme"
import Container from "../components/Container"

export default function about() {
  return (
    <Container title="Hamza Asif - About">
      <div data-aos="fade-up" data-aos-duration="2000">
        <Aboutme />
      </div>
    </Container>
  )
}
