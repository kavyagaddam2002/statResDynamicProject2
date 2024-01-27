// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-con">
      <button type="button" onClick={onClickTabItem} className="tabItem">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
