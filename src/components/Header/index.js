import {Component} from 'react'
import {FiVideo} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsGridFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import TabItem from '../TabItem'
import {
  VCardContainer,
  Heading,
  BtnLink,
  FilterContainer,
  Text,
  ShadowContainer,
  SubHeading,
  TabContainer,
  ListItemsContainer,
  IconCard,
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
    const {activeTabId} = this.state
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
        <TabContainer>
          <ListItemsContainer>
            {tabsList.map(tabDetails => (
              <TabItem
                key={tabDetails.tabId}
                tabDetails={tabDetails}
                updateActiveTabId={this.updateActiveTabId}
                isActive={tabDetails.tabId === activeTabId}
              />
            ))}
          </ListItemsContainer>
          <IconCard>
            <BsGridFill className="style-icon-menu" />
            <GiHamburgerMenu className="style-icon-menu" />
          </IconCard>
        </TabContainer>
      </>
    )
  }
}

export default Header
