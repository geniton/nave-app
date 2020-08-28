import React, { useEffect, useState,useContext, useCallback } from 'react';
import Api from 'services/Api'
import { OrderContext } from 'contexts/OrderProvider'

// components
import Card from 'components/Card'
import Modal from 'components/Modal'
import Button from 'components/Button'
import Tools from 'components/Tools'

// styles 
import {
  NaverContainer,
  Header,
  Cards,
  Title,
  LinkNaver,
  ModalWrapper,
  ModalContent,
  ButtonWrapper
} from './styles'

function Home() {
  const { 
    handleModal, 
    showModalDelete,
    showModalFeedbackDelete, 
    showModalUser,
    deleteNaver,
    currentUser
  } = useContext(OrderContext)

  const [users, setUsers] = useState(null)

  useEffect(() => {
      (async () => {
          const { data } = await Api.get('/navers')
          setUsers(data)
      })()
  },[])

  const handleDeleteNaver = useCallback(async(id) => {

    console.log(id)
    try {
      const response = await deleteNaver(id)
      handleModal('Delete')
      handleModal('FeedbackDelete')
    }catch(err) {
      alert('Ocorreu um erro ao deletar o naver')
    }

  },[])

  const {
    name,          
    job_role,      
    birthdate,     
    admission_date,
    project,       
    url,
    user_id
  } = currentUser

  return (
   users ? 
    <NaverContainer>
      <Header>
        <Title onClick={() => handleModal('User')}>Navers</Title>
        <LinkNaver>Adicionar Naver</LinkNaver>
      </Header>
      <Cards>
        { users.map(user => <Card key={user.id} user={user}/> )}
      </Cards>

      <Modal show={showModalUser} closeModal={() => handleModal('User')} size={1006}>
        <ModalWrapper>
          <figure>
            <img src={url} alt=""/>
          </figure>
          <ModalContent userStyle>
            <h3>{name}</h3>
            <span>{job_role}</span>
            <p>
              <strong>Idade</strong>
              {birthdate}
            </p>
            <p>
              <strong>Tempo de empresa</strong>
              {admission_date}
            </p>
            <p>
              <strong>Projetos em que participou</strong>
              {project}
            </p>
            <Tools user={currentUser}/>
          </ModalContent>
        </ModalWrapper>
      </Modal>

      <Modal show={showModalDelete} size={592}>
        <ModalContent>
          <h4>Excluir Naver</h4>
          <p>Tem certeza que deseja excluir este Naver?</p>
          <ButtonWrapper>
            <Button onClick={() => handleModal('Delete')}>Cancelar</Button>
            <Button onClick={() => handleDeleteNaver(user_id)}>Excluir</Button>
          </ButtonWrapper>
        </ModalContent>
      </Modal>

      <Modal show={showModalFeedbackDelete} size={592} closeModal={() => handleModal('FeedbackDelete')}>
        <ModalContent>
          <h4>Naver Excluído</h4>
          <p>Naver excluído com sucesso!</p>
        </ModalContent>
      </Modal>
    </NaverContainer> : null
  );
}

export default Home;