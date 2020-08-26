import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import Button from 'components/Button'

export const Container = styled.section`
  padding: 40px 20px;
  display: flex;
  justify-content: center;
`

export const ProfileWrapper = styled.div`
  max-width: 600px;
  width: 100%;
`

export const ProfileHeader = styled.header`
  align-items: center;
  display: flex;
`

export const IconLink = styled(Link).attrs({
  to: '/'
})`
  border: 2px solid ${props => props.theme.colors.grayHigh};
  border-top: none;
  border-right: none;
  display: block;
  height: 12px;
  transform: rotate(45deg);
  width: 12px;
  margin-right: 30px;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.grayHigh};
  font-size: 24px;
`

export const InputGroup = styled.div`
  color: ${props => props.theme.colors.grayHigh};
  font-size: 24px;

  ${media.greaterThan('500px')`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr;
  `}

  label {
    &:first-child {
      margin-top: 32px;
    }
  }
`

export const ButtonContainer = styled(Button)`
  margin-top: 32px;
`