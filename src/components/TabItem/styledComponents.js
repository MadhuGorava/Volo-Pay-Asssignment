import styled from 'styled-components'

export const ListContainer = styled.li`
  padding-right: 4px;
  @media screen and (min-width: 992px) {
    padding-right: 24px;
  }
`
export const BtnText = styled.button`
  font-family: 'Roboto';
  color: ${props => (props.isActive ? '#3e4c59' : '#9aa5b1')};
  font-weight: 500;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: ${props => (props.isActive ? '2px solid #0b69ff' : 'none')};
  cursor: pointer;
  @media screen and (min-width: 992px) {
    font-size: 24px;
  }
`
