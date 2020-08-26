import React, { useState, useContext } from 'react';
import { AuthContext } from 'contexts/AuthProvider'
import { ReactComponent as Logo } from 'images/nave-logo.svg'

// styles
import { 
  Container, 
  LoginCard, 
  LinkLogo,
  Button
} from './styles'

//Components
import FormValidation from 'components/FormValidation'
import FieldElement from 'components/FieldElement'

const Login = () => {
  const { Login } = useContext(AuthContext)
  const [form,setForm] = useState({
    email: '',
    password: '',
    formError: {}
  })

  const handleLogin = (e,isValid, formError) => {
    e.preventDefault()

    if (!isValid) {
      setForm({
        ...form,
        formError
      })
    }else {
      Login(email,password)
    }
  }

  const changeHandle = (e) => {
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
  }

  const {
    email, 
    password, 
    formError
  } = form

  return (
      <Container>
        <LoginCard>
          <LinkLogo to="/">
            <Logo/>
          </LinkLogo>
          <FormValidation onSubmit={handleLogin}>
            <FieldElement
              id="email" 
              onChange={(e) => changeHandle(e)}
              name="email"
              data-validation="email"
              placeholder="E-mail" 
              type="email"
              messageError="Email inválido"
              formError={formError}
              value={email} 
            />

            <FieldElement
              id="password" 
              onChange={(e) => changeHandle(e)}
              name="password"
              placeholder="Senha"
              data-validation="minlength"
              data-min-length="6"
              type="password"
              messageError="Senha inválida"
              maxLength={15}
              formError={formError}
              value={password}
            />

            <Button type="submit">
              Entrar
            </Button>

          </FormValidation>

          
        </LoginCard>
      </Container>
  )
}

export default Login;