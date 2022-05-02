import React from 'react'
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div>Oopsie...the page you required doesn't exist...
    <Link to="/">Get back to the Home page</Link></div>
  )
}

export default NoPage;