import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const PhotoGallery = ({ data }) => {
  console.log(data)

  return (<div>Welcome from PhotoGallery</div>)
}

PhotoGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    caption: PropTypes.string
  }))
}

export default PhotoGallery
