import {Component} from 'react'

import Browser from './Browser'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]
// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    listItems: initialHistoryList,
    isTrue: false,
  }

  onchangeSearchItem = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {listItems} = this.state
    const resultItems = listItems.filter(eactValue => eactValue.id !== id)
    this.setState({listItems: resultItems})

    if (resultItems.length === 0) {
      this.setState({listItems: resultItems, isTrue: true})
    } else {
      this.setState({listItems: resultItems})
    }
  }

  render() {
    const {searchInput, listItems, isTrue} = this.state

    const resultItems = listItems.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (resultItems.length === 0) {
      this.setState({isTrue: true})
    }

    return (
      <div className="main-container">
        <div className="top-holder">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="image"
          />
          <div className="search-holder">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="input-element"
              placeholder="Search history"
              onChange={this.onchangeSearchItem}
              value={searchInput}
            />
          </div>
        </div>
        <div className="content-holder">
          <ul className="inner-holder">
            {resultItems.map(eachItem => (
              <Browser
                detailsList={eachItem}
                key={eachItem.id}
                onDelete={this.onDelete}
              />
            ))}
            {isTrue && (
              <div className="empty-container">
                <p>There is no history to show</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
