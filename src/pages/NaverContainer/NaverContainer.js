import React, { useEffect, useCallback, useState, useContext} from 'react';
import { OrderContext } from 'contexts/OrderProvider'
import history from 'history.js'

// styles
import { 
  Container, 
  Header, 
  IconLink, 
  Title, 
  Wrapper,
  InputGroup,
  ButtonContainer
} from './styles';

import { ModalContent } from 'pages/Home/styles'

// components
import FormValidation from 'components/FormValidation'
import FieldElement from 'components/FieldElement'
import Modal from 'components/Modal'

function NaverContainer({
  profile,
  profileTitle,
  addNaverTitle
}) {
  const { 
    updateNaver,
    createNaver, 
    currentUser, 
    handleModal,
    showModalFeedbackCreate,
    showModalFeedbackUpdate
   } = useContext(OrderContext)

   useEffect(() => {
     setForm({
      name           : (currentUser.name && profile) ? currentUser.name : '',
      job_role       : (currentUser.job_role && profile) ? currentUser.job_role : '',
      birthdate      : (currentUser.birthdate && profile) ? formatDate(currentUser.birthdate) : '',
      admission_date : (currentUser.admission_date && profile) ? formatDate(currentUser.admission_date) : '',
      project        : (currentUser.project && profile) ? currentUser.project : '',
      url            : (currentUser.url && profile) ? currentUser.url : '',
      user_id        : (currentUser.user_id && profile) ? currentUser.user_id : null,
      formError      : {}
    })
   },[])

  const [form,setForm] = useState({})

  const formatDate = (date) => {
    if (!date) return false

    date = new Date(date)

    let dia = (date.getUTCDate() < 10) ? `0${date.getUTCDate()}` : date.getUTCDate();
    let mes = ((date.getUTCMonth()+1) < 10) ? `0${date.getUTCMonth()+1}` : date.getUTCMonth()+1;
    let ano = date.getUTCFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  const handleSubmit = useCallback(async (e,isValid, formError) => {
    e.preventDefault()

    if (!isValid) {
      setForm({
        ...form,
        formError
      })
    } else if (profile) {

      try {
        const response = await updateNaver(form)
        handleModal('FeedbackUpdate')
      }catch(err) {
        alert('ocorreu um erro ao atualizar o naver')
      }

    } else {

      try {
        console.log(form)
        const response = await createNaver(form)
        handleModal('FeedbackCreate')
      }catch(err) {
        alert('ocorreu um erro ao criar o naver')
      }

    }
  },[form])


  const changeHandle = useCallback((e) => {
    const inputName = e.target.name
    let inputValue = e.target.value

    const formError = {
      ...form.formError,
      [inputName]: false
    }

    if (inputName === 'admission_date' || inputName === 'birthdate'){
      inputValue = inputValue.replace(/\D/g,'').replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{4})\d+?$/, '$1')
    }

    setForm((f) => ({
      ...f,
      [inputName]: inputValue,
      formError
    }))
  },[])

  console.log(form)

  const {
    name,
    job_role,
    birthdate,
    admission_date,
    project,
    url,
    formError
  } = form

  return (
    <Container>
      <Wrapper>
        <Header>
          <IconLink/>
          <Title>{profile ? profileTitle : addNaverTitle}</Title>
        </Header>
        <FormValidation onSubmit={handleSubmit}>
          <InputGroup>
            <FieldElement
              id="name" 
              onChange={(e) => changeHandle(e)}
              name="name"
              data-validation="name"
              placeholder="Nome" 
              type="text"
              data-validation='name'
              messageError="Nome inválido"
              formError={formError}
              value={name} 
            />
            <FieldElement
              id="job_role" 
              onChange={(e) => changeHandle(e)}
              name="job_role"
              placeholder="Cargo"
              data-validation="required"
              type="text"
              data-validation='required'
              messageError="Cargo inválido"
              formError={formError}
              value={job_role} 
            />
          </InputGroup>

          <InputGroup>
            <FieldElement
              id="birthdate" 
              onChange={(e) => changeHandle(e)}
              name="birthdate"
              data-validation="birthdate"
              placeholder="Idade" 
              type="text"
              data-validation="required"
              messageError="Idade inválida"
              formError={formError}
              value={birthdate} 
            />
            <FieldElement
              id="admission_date" 
              onChange={(e) => changeHandle(e)}
              name="admission_date"
              placeholder="Tempo de empresa"
              data-validation="required"
              type="text"
              messageError="Tempo de empresa inválido"
              formError={formError}
              value={admission_date} 
            />
          </InputGroup>

          <InputGroup>
            <FieldElement
              id="project" 
              onChange={(e) => changeHandle(e)}
              name="project"
              data-validation="required"
              placeholder="Projetos que participou" 
              type="project"
              messageError="Projetos é obrigatório"
              formError={formError}
              value={project} 
            />
            <FieldElement
              id="url" 
              onChange={(e) => changeHandle(e)}
              name="url"
              placeholder="Url da foto do Naver"
              type="url"
              messageError="Url inválido"
              formError={formError}
              value={url} 
            />
          </InputGroup>

          <ButtonContainer>Salvar</ButtonContainer>

        </FormValidation>

        <Modal show={showModalFeedbackCreate} closeModal={() => handleModal('FeedbackCreate')} size={592}>
          <ModalContent>
            <h4>Naver Criado</h4>
            <p>Naver criado com sucesso!</p>
          </ModalContent>
        </Modal>

        <Modal show={showModalFeedbackUpdate} closeModal={() => handleModal('FeedbackUpdate')} size={592}>
          <ModalContent>
            <h4>Naver Atualizado</h4>
            <p>Naver atualizado com sucesso!</p>
          </ModalContent>
        </Modal>
      </Wrapper>
    </Container>
  );
}

NaverContainer.defaultProps = {
  profileTitle: 'Editar Naver',
  addNaverTitle: 'Adicionar Naver'
}

export default NaverContainer;