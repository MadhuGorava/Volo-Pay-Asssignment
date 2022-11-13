import {Link} from 'react-router-dom'
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <Link to={`/${displayText}`}>
        <button
          type="button"
          className={`tab-btn ${activeTabClassName}`}
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </Link>
    </li>
  )
}

export default TabItem
