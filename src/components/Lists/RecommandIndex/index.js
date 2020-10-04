import React from "react"
import RecommandIndexCommon from "./RecommandIndexCommon"
import RecommandIndexFrontend from "./RecommandIndexFrontend"
import RecommandIndexBackend from "./RecommandIndexBackend"
import RecommandIndexDatabase from "./RecommandIndexDatabase"
import RecommandIndexDevops from "./RecommandIndexDevops"

const RecommandIndex = () => {
  return (
      <>
        <RecommandIndexCommon />
        <RecommandIndexFrontend />
        <RecommandIndexBackend />
        <RecommandIndexDatabase />
        <RecommandIndexDevops />
      </>
  )
}

export default RecommandIndex
