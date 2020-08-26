import React, { useEffect, useState, useContext } from 'react';
import Api from 'services/Api'

// components
import Card from 'components/Card'

// styles 

import {
  NaveContainer,
  NaveHeader,
  NaveCards,
  Title,
  Button
} from './styles'

function Home() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
      (async () => {
          const { data } = await Api.get('/navers')
          setUsers(data)
      })()
  },[])
  
  return (
   users ? 
    <NaveContainer>
      <NaveHeader>
        <Title>Navers</Title>
        <Button>Adicionar Naver</Button>
      </NaveHeader>
      <NaveCards>
        { users.map(user => <Card key={user.id} user={user}/> )}
      </NaveCards>
    </NaveContainer> : null
  );
}

export default Home;