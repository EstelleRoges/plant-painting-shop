import React from 'react'
import { Link } from 'react-router-dom';

const error404 = () => {
  return (
    <div>Oups...ce tableau n'existe plus...
      <Link to="/products">On va en chercher un autre?</Link>
    </div>
  )
}

export default error404;