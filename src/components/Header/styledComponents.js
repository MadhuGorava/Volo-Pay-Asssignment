import styled from 'styled-components'

export const VCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Heading = styled.h1`
  color: #252525;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const BtnLink = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 10px;
`
export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`
export const Text = styled.p`
  color: blue;
  font-size: 10px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-left: 5px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const ShadowContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  margin: 10px 10px 0px 0px;
  border-radius: 12px;
`
export const SubHeading = styled(Heading)`
  font-size: 10px;
  padding: 5px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const IconCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
`
export const ListItemsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
`
