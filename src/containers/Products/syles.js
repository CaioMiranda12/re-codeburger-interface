import styled from 'styled-components'

export const Container = styled.div``

export const ProductImg = styled.img`
  width: 100vw;
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const ContainerButton = styled.button`
  color: ${props => (props.isActived ? '#9758A6' : '#9a9a9d')};
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  border-bottom: ${props => (props.isActived ? '2px solid #9758A6' : 'none')};
  background: none;
  cursor: pointer;
`
