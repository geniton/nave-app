import React, { useEffect } from 'react';
import { Content } from './styles'

// import { Container } from './styles';

function Card({data}) {
  return (
    <CardContent>
      <figure>
        <img src={data.url} alt=""/>
      </figure>
      <h3>{data.name}</h3>
      <p>{data.jog_role}</p>
      <ToolsList/>
    </CardContent>
  )
}

export default Card;