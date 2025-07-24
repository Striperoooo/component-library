import React from "react"
import "./index.css"
import Badge from "./components/Badge"
import Banner from "./components/Banner"


function App() {

  return (
    <>

      <Badge shape="pill" badgeColor="green" />
      <Banner type="neutral"
        title="I am the title"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est iste perspiciatis debitis at.
      </Banner>
    </>
  )
}

// <Badge badgeColor="green" shape="pill" className="fart">""</Badge>

export default App
