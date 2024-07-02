import './Browser.css'

const Browser = props => {
  const {detailsList, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = detailsList

  const deleteItem = () => {
    onDelete(id)
  }
  return (
    <li className="items-holder">
      <p className="time">{timeAccessed}</p>
      <div className="icon-holder">
        <img src={logoUrl} alt="domain logo" className="logo-element" />
        <div className="logo-content">
          <p className="name">{title}</p>
          <p className="website">{domainUrl}</p>
        </div>
      </div>
      <button type="button" onClick={deleteItem} className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default Browser
