import styled from 'styled-components'
import media from "styled-media-query"

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 25px 30px;

  ${media.lessThan("medium")`
  padding: 20px;
`}
`
export const NavesLogo = styled.h1`
  margin: 0;

  a {
    display: block;

    svg {
      width: 145px;
      height: 37px;
    }
  }
`
export const Exit = styled.div`
  border: none;
  background-color: none;
  color: ${props => props.theme.colors.grayHigh};
  display: block;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`