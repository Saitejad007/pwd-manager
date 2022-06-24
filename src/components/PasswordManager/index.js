import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchInput: '',
    credentialsList: [],
    isChecked: false,
  }

  addPassword = event => {
    event.preventDefault()

    const {website, username, password} = this.state

    const newLogin = {
      id: v4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      credentialsList: [...prevState.credentialsList, newLogin],
      website: '',
      username: '',
      password: '',
    }))
  }

  captureWebsite = event => {
    this.setState({website: event.target.value})
  }

  captureUsername = event => {
    this.setState({username: event.target.value})
  }

  capturePassword = event => {
    this.setState({password: event.target.value})
  }

  checkPassword = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  searchPassword = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteCredential = id => {
    const {credentialsList} = this.state
    this.setState({
      credentialsList: credentialsList.filter(eachItem => eachItem.id !== id),
    })
  }

  render() {
    const {
      website,
      username,
      password,
      credentialsList,
      searchInput,
      isChecked,
    } = this.state

    const filteredList = credentialsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const passwordCount = filteredList.length

    return (
      <div className="app-container">
        <div className="responsive-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-container">
            <form
              className="add-password-container"
              onSubmit={this.addPassword}
            >
              <h1 className="heading">Add New Password</h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="logo"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.captureWebsite}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="logo"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={this.captureUsername}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="logo"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.capturePassword}
                />
              </div>
              <button type="submit">Add</button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
          </div>
          <div className="your-password-container">
            <div className="password-search-container">
              <div className="password-count-container">
                <h1 className="search-heading">Your Passwords</h1>
                <p className="password-count">{passwordCount}</p>
              </div>

              <div className="input-container-search">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="logo"
                />
                <input
                  type="search"
                  className="searchbar"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.searchPassword}
                />
              </div>
            </div>

            <hr className="line" />
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox"
                id="check"
                onClick={this.checkPassword}
              />
              <label htmlFor="check" className="show-password">
                Show passwords
              </label>
            </div>
            {filteredList.length > 0 ? (
              <ul className="password-list">
                {filteredList.map(eachItem => (
                  <PasswordItem
                    passwordDetails={eachItem}
                    checkStatus={isChecked}
                    deleteCredential={this.deleteCredential}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-img"
                />
                <p className="no-passwords">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
