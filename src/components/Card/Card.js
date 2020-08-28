import React, { useState, useContext} from 'react';
import { OrderContext } from 'contexts/OrderProvider'

// components
import Tools from 'components/Tools'

// styles
import { CardContent } from './styles'

function Card({
  user
}){

  const { handleModal, showNaver, setCurrentUser } = useContext(OrderContext)

  const showInfoNaver = async (id) => {
    try {
      const data = await showNaver(id)
      setCurrentUser({...data})
      handleModal('User')
    }catch{
      alert('Ocorreu um erro!')
    }
  }
  return (
    <CardContent>
      <figure onClick={() => showInfoNaver(user.id)}>
        <img src={user.url} alt=""/>
      </figure>
      <h3>{user.name}</h3>
      <p>{user.job_role}</p>
      <Tools user={user} />
    </CardContent>
  )
}

export default Card;