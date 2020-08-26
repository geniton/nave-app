import React, { useCallback, useState} from 'react';

// styles
import { 
  Container, 
  ProfileHeader, 
  IconLink, 
  Title, 
  ProfileWrapper,
  InputGroup,
  ButtonContainer
} from './styles';

// components
import FormValidation from 'components/FormValidation'
import FieldElement from 'components/FieldElement'

function Profile() {

  const [form,setForm] = useState({
    name       : '',
    job_role   : '',
    birthdate  : '',
    companyTime: '',
    project    : '',
    url        : '',
    formError  : {}
  })

  console.log(form)

  const saveData = useCallback((e,isValid, formError) => {
    e.preventDefault()

    if (!isValid) {
      setForm({
        ...form,
        formError
      })
    }
  },[form])

  const changeHandle = useCallback((e) => {
    const inputName = e.target.name
    const inputValue = e.target.value

    const formError = {
      ...form.formError,
      [inputName]: false
    }

    setForm({
      ...form,
      [inputName]: inputValue,
      formError
    })
  },[form])

  const {
    name,
    job_role,
    birthdate,
    companyTime,
    project,
    url,
    formError
  } = form

  return (
    <Container>
      <ProfileWrapper>
        <ProfileHeader>
          <IconLink/>
          <Title>Adicionar Naver</Title>
        </ProfileHeader>
        <FormValidation onSubmit={saveData}>
          <InputGroup>
            <FieldElement
              id="name" 
              onChange={(e) => changeHandle(e)}
              name="name"
              data-validation="name"
              placeholder="Nome" 
              type="text"
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
              type="date"
              messageError="Idade inválida"
              formError={formError}
              value={birthdate} 
            />
            <FieldElement
              id="companyTime" 
              onChange={(e) => changeHandle(e)}
              name="companyTime"
              placeholder="Tempo de empresa"
              data-validation="required"
              type="date"
              messageError="Tempo de empresa inválido"
              formError={formError}
              value={companyTime} 
            />
          </InputGroup>

          <InputGroup>
            <FieldElement
              id="project" 
              onChange={(e) => changeHandle(e)}
              name="project"
              data-validation="project"
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
              data-validation="required"
              type="url"
              messageError="Url inválido"
              formError={formError}
              value={url} 
            />
          </InputGroup>

          <ButtonContainer>Salvar</ButtonContainer>

        </FormValidation>
      </ProfileWrapper>
    </Container>
  );
}

export default Profile;