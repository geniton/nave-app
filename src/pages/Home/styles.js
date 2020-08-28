import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

export const NaverContainer = styled.section`
  padding: 40px 30px 0;

  ${media.lessThan("medium")`
  padding: 40px 20px 0;
`}
`

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.grayHigh};
  font-size: 40px;
  font-weight: 600;
  margin: 0;

  ${media.lessThan("medium")`
    font-size: 30px;
  `}
`

export const LinkNaver = styled(Link).attrs({
  to: '/adicionar'
})`
  background-color: ${props => props.theme.colors.grayHigh};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  padding: 10px 42px;
  text-align: center;
  text-decoration: none;

  ${media.lessThan("medium")`
    font-size: 12px;
    padding: 10px 20px;
  `}
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  grid-gap: 30px;
  margin-top: 45px;
  width: 100%;
`

export const ModalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.lessThan("medium")`
    display: block;
  `}
`

export const ModalContent = styled.div`
  padding: ${({userStyle}) => userStyle ? '32px' : '42px'};

  h4,h3 {
    font-size: 24px;
    color: ${({theme}) => theme.colors.grayHigh};
    font-weight: 600;
    line-height: 36px;
    &:not(h3) {
      margin-bottom: 24px;
    }
  }

  span {
    margin-top: 10px;
    display: block;
    font-size: 16px;
    line-height: 24px;
  }

  strong {
    display: block;
    margin-bottom: 10px;
  }

  p {
    margin-top: 24px;
  }

  ul {
    position: absolute;
    bottom: 32px;

    ${media.lessThan("medium")`
      display: block;
      bottom: 12px;
    `}
  }
`

export const Figure = styled.figure`
`

export const Img = styled.img`
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 33px;

  button {
    margin: 0;

    &:first-child {
      margin-right: 23px;
    }
  }
`