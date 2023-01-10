import Container from "../components/Container"
import Hero from "../components/Hero"
import FavoriteProjects from "../components/FavoriteProjects"

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <FavoriteProjects />
      </Container>
    </>
  )
}
