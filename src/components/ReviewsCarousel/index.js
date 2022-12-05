// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {ActiveReviewIndex: 0}

  ReviewRightArrow = () => {
    const {ActiveReviewIndex} = this.state
    const {reviewsList} = this.props

    if (ActiveReviewIndex < reviewsList.length - 1) {
      this.setState(prev => ({ActiveReviewIndex: prev.ActiveReviewIndex + 1}))
    }
  }

  RenderActiveReview = review => {
    const {imgUrl, companyName, description, username} = review

    return (
      <div className="ReviewData">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  ReviewLeftArrow = () => {
    const {ActiveReviewIndex} = this.state

    if (ActiveReviewIndex > 0) {
      this.setState(prev => ({ActiveReviewIndex: prev.ActiveReviewIndex - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {ActiveReviewIndex} = this.state
    console.log(ActiveReviewIndex)
    const CurrentReviewData = reviewsList[ActiveReviewIndex]

    return (
      <div className="App-Container">
        <div className="ReviewCarousel-Container">
          <h1 className="heading">Reviews</h1>
          <div className="Arrows-Container">
            <button
              id="leftArrow"
              type="button"
              className="arrow-btn"
              onClick={this.ReviewLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            {this.RenderActiveReview(CurrentReviewData)}
            <button
              id="rightArrow"
              type="button"
              className="arrow-btn"
              onClick={this.ReviewRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
