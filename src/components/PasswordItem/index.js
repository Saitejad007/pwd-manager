import './index.css'

const PasswordItem = props => {
  const {passwordDetails, checkStatus, deleteCredential} = props
  const {id, website, username, password} = passwordDetails
  const initial = username ? username[0].toUpperCase() : ''

  const deleteItem = () => {
    deleteCredential(id)
  }

  const colorList = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']

  const initialClassName =
    colorList[Math.floor(Math.random() * colorList.length)]

  return (
    <li className="list-item">
      <div className="text-container">
        <div className={`initial-container ${initialClassName}`}>
          <p className="initial">{initial}</p>
        </div>
        <div className="password-website-container">
          <p className="website">{website}</p>
          <p className="website">{username}</p>
          {checkStatus ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        testid="delete"
        className="button"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="logo"
        />
      </button>
    </li>
  )
}

export default PasswordItem
