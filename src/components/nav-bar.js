import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <span>You are not logged in</span>
    <nav>
      <Link to="/">Home</Link> <Link to="/">Profile</Link>{" "}
      <Link to="/">Logout</Link>
    </nav>
  </div>
)
