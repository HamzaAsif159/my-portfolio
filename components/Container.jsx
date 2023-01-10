import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Container({ children, ...customMeta }) {
  const router = useRouter()

  const meta = {
    title: "Hamza Asif - React Developer",
    description: `Get in touch with me to know more.`,
    image: "https://i.ibb.co/7VNwPRF/fav.jpg",
    type: "website",
    ...customMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Hamza Asif" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* Twitter meta card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hamzicodes" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main className="w-full bg-gray-800">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  )
}
