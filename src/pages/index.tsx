import React, { memo } from "react"
import Repositories from "../components/organisms/Repositories"
import { SEO } from "../components/atoms/SEO"

function Home({ pageContext }: { pageContext: any }) {
  return (
    <>
      <SEO title="Home"/>
      <Repositories repos={pageContext.repos} />
    </>
  )
}

export default memo(Home)