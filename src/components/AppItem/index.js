// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName, category} = appDetails

  return (
    <>
      <li className="app-item-container">
        <img src={imageUrl} className="image" alt={appName} />

        <p>{appName}</p>
      </li>
    </>
  )
}

export default AppItem
