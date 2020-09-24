import React from "react"
import RecommandIndexCommon from "./RecommandIndexCommon"
import RecommandIndexFrontend from "./RecommandIndexFrontend"
import RecommandIndexBackend from "./RecommandIndexBackend"
import RecommandIndexDevops from "./RecommandIndexDevops"

const RecommandIndex = () => {
  return (
      <>
        <RecommandIndexCommon />
        <RecommandIndexFrontend />
        <RecommandIndexBackend />
        <RecommandIndexDevops />
      </>
  )
}

export default RecommandIndex
