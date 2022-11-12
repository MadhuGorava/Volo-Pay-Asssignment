import {Component} from 'react'
import {FiVideo} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'
import {
  VCardContainer,
  Heading,
  BtnLink,
  FilterContainer,
  Text,
  ShadowContainer,
  SubHeading,
} from './styledComponents'
import './index.css'

const tabsList = [
  {tabId: 'YOUR', displayText: 'Your'},
  {tabId: 'ALL', displayText: 'All'},
  {tabId: 'BLOCKED', displayText: 'Blocked'},
]

class Header extends Component {
  state = {activeTabId: tabsList[1].tabId}

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  render() {
    return (
      <>
        <VCardContainer>
          <FilterContainer>
            <Heading>Virtual Cards</Heading>
            <BtnLink as="a" href="#">
              <FiVideo className="style-icon" />
              <Text>Learn more</Text>
            </BtnLink>
          </FilterContainer>
          <ShadowContainer>
            <AiOutlinePlus className="style-icon" />
            <SubHeading>Virtual Cards</SubHeading>
          </ShadowContainer>
        </VCardContainer>
      </>
    )
  }
}

export default Header
