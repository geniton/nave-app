import React, { useEffect } from 'react';

// components
import Tools from 'components/Tools'

// styles
import { CardContent } from './styles'

function Card({user}) {
  console.log(user)
  return (
    <CardContent>
      <figure>
        <img src={user.url} alt=""/>
      </figure>
      <h3>{user.name}</h3>
      <p>{user.job_role}</p>
      <Tools/>
    </CardContent>
  )
}

export default Card;