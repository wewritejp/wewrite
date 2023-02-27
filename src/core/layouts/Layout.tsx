import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import Navbar from "../components/Navbar"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "wewrite"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {children}
    </>
  )
}

export default Layout
