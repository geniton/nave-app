import styled from 'styled-components'
import media from "styled-media-query"

export const Container = styled.section`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`

export const Wrapper = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`


export const Mask = styled.div`
  background-color: rgba(0,0,0,0.85);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  transition: all 0.4s ease-in-out;
`

export const Content = styled.div`
  height: auto;
  background-color: white;
  padding: 50px;
  margin-bottom: 30px;
  position: absolute;
  top: 100px;
  width: 60%;
  z-index: 3;

  ${media.lessThan("medium")`
    width: 85%;
    padding: 60px 25px 30px;
    top: 30px;
  `}
`