import React from 'react'
import './FanMunchExperience.css'
import sectionImage from '../../../assets/images/bg-images/bg1.avif'

const FanMunchExperience = () => {
  return (
    <section className="fanmunch-experience">
      <div className="fanmunch-experience__inner">
        <div className="fanmunch-experience__content">
          <h2 className="fanmunch-experience__title">
            Stadium food,
            <br />
            delivered to your seat
          </h2>
          <div className="fanmunch-experience__accent" />
          <p className="fanmunch-experience__text">
            FanMunch makes game day simple: scan the QR code, select your venue, and order from
            your favorite vendors without leaving the action.
          </p>
          <p className="fanmunch-experience__text">
            Choose your section/seat location in the venue, pay securely, and get real-time order
            updates while your food is brought right to you.
          </p>
          <p className="fanmunch-experience__bold">
            Less waiting. More cheering. Better fan experience.
          </p>
        </div>

        <div className="fanmunch-experience__media">
          <img
            className="fanmunch-experience__image"
            src={sectionImage}
            alt="FanMunch experience"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default FanMunchExperience
