import backArrow from './assets/icons/back-arrow.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

function RightEmailInfo(){
    return <><div className="date-info">
    <p>17 March 2021, 09:33</p>
  </div>
  <div className="email-action-icons">
    <ul>
      <li>
        <img className="icon" src={backArrow} alt="reply button" />
      </li>
      <li>
        <img
          className="icon"
          src={rateStarButton}
          alt="star button"
        />
      </li>
      <li>
        <img
          className="icon"
          src={rubbishButton}
          alt="delete button"
        />
      </li>
    </ul>
  </div>
    </>
}
export default RightEmailInfo