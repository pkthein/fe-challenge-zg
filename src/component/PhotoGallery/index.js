import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const PhotoGallery = ({ data }) => {
  return (
    <div align="center">
      <h4 className="photo-gallery-text-h4" >Photo Gallery</h4>
      <hr/>

      {
        data.length > 0 &&
        data.map((img, idx) => (
          <img
            className="photo-gallery-image-box" width="300"
            key={ idx } alt={ img.caption } src={ img.url }
          />
        ))
      }
    </div>
  )
}

PhotoGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    caption: PropTypes.string
  }))
}

export default PhotoGallery
