import PropTypes from 'prop-types'
import BioImageDown from "../../assets/BioImageDown.png"
import BioImageUp from "../../assets/BioImageUp.png"
import "./BioImage.css"

export const BioImage = ({ src, alt }) => {
  return (
    <div className="bio-image-container">
      <div className="bio-image">
        <img src={BioImageDown} alt={alt} className='image-down' />
        <img src={BioImageUp} alt={alt} className='image-up' />
      </div>
    </div>
  )
}

BioImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}