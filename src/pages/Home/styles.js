import styled from 'styled-components'
import media from 'styled-media-query'

export const NaveContainer = styled.section`
  padding: 40px 30px 0;

  ${media.lessThan("medium")`
  padding: 40px 20px 0;
`}
`

export const NaveHeader = styled.header`
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

export const Button = styled.button`
  border: none;
  background-color: ${props => props.theme.colors.grayHigh};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  padding: 10px 42px;
  text-align: center;

  ${media.lessThan("medium")`
    font-size: 12px;
    padding: 10px 20px;
  `}
`

export const NaveCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  grid-gap: 30px;
  margin-top: 45px;
  width: 100%;
`