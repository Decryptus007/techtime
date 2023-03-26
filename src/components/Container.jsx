import React from 'react'

function Container({ children }) {
  return (
    <div className="w-full px-2 lg:px-8 3xl:container 3xl:mx-auto">{children}</div>
  )
}

export default Container