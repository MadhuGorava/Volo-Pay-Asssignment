import {Link} from 'react-dom'
import {ListContainer, BtnText} from './styledComponents'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <Link
      to={`/${displayText}`}
      style={{textDecoration: 'none', color: '#475569'}}
    >
      <ListContainer>
        <BtnText onClick={onClickTabItem} isActive={isActive}>
          {displayText}
        </BtnText>
      </ListContainer>
    </Link>
  )
}

export default TabItem
