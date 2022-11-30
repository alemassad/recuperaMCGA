import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {

  return (
        <div>
          <h2>Pagina inicial</h2>
          <Link to={'/products'}><button>Ir al CRUD</button></Link>
        </div>
  )
}

export default Welcome