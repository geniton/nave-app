import styled from 'styled-components'
import media from "styled-media-query"

export const Container = styled.section`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  overflow: auto;
`

export const Mask = styled.div`
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  transition: all 0.4s ease-in-out;
`

export const Content = styled.div`
  background-color: white;
  height: auto;
  left: 50%;
  max-width: ${({size}) => `${size}px` || '592px'};
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  z-index: 3;

  ${media.lessThan("medium")`
    width: 85%;
    padding: 60px 25px 30px;
    top: 30px;
    transform: translateX(-50%);
  `}
`

export const Close = styled.button`
  background-color: none;
  border: none;
  height: 14px;
  position: absolute;
  right: 21px;
  top: 21px;
  width: 14px;
  cursor: pointer;

  i {
    background-color: ${props => props.theme.colors.grayHigh};
    display: block;
    height: 2px;
    position: absolute;
    right: 0;
    width: 100%;

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`