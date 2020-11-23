import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

import SlideUpImage from './SlideUpImage'

const PhotoGallery = ({ data }) => {
  const [image, setImage] = useState({ url: '', caption: '', index: 0 })
  const [visible, setVisible] = useState(false)
  const [prevY, setPrevY] = useState(0)

  useEffect(() => {
  }, [image, visible])

  const displayImage = (idx) => {
    setPrevY(window.scrollY)
    setImage({ ...data[idx], index: idx })
    setVisible(true)
    window.scrollTo(0, 0)
  }

  const handleOnClose = () => {
    setVisible(false)

    // checking if the browser is safari for smooth scroll
    if (/apple/i.test(navigator.vendor)) {
      setTimeout(() => {
        window.scrollTo(0, prevY)
      }, 100)
    } else {
      setTimeout(() => {
        window.scrollTo({
          top: prevY,
          left: 0,
          behavior: 'smooth'
        })
      }, 100)
    }
  }

  const handleNextPhoto = () => {
    const newIndex = image.index === data.length - 1 ? 0 : image.index + 1
    setImage({ ...data[newIndex], index: newIndex })
  }

  const handlePreviousPhoto = () => {
    const newIndex = image.index === 0 ? data.length - 1 : image.index - 1
    setImage({ ...data[newIndex], index: newIndex })
  }

  return (
    <div
      align="center"
      style={
        { overflow: visible ? 'hidden' : 'auto', height: visible ? 0 : 'auto' }
      }
    >
      <h4 className="photo-gallery-text-h4" >Photo Gallery</h4>
      <hr/>

      {
        data.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
              data.map((img, idx) => (
                <div key={ idx } className="photo-gallery-image-box-container">
                  <img
                    className="photo-gallery-image-box" width="300"
                    alt={ img.caption } src={ img.url }
                    onClick={ () => displayImage(idx) }
                  />
                  <span>{ img.caption }</span>
                </div>
              ))
            }
          </div>
        )
      }

      {
        visible && (image.url && image.caption) && (
          <SlideUpImage
            image={ image }
            onClose={ () => handleOnClose() }
            onNextPhoto={ () => handleNextPhoto() }
            onPreviousPhoto={ () => handlePreviousPhoto() }
          ></SlideUpImage>
        )
      }
    </div>
  )
}

PhotoGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    caption: PropTypes.string
  })),
  image: PropTypes.shape({
    url: PropTypes.string,
    caption: PropTypes.string,
    index: PropTypes.number
  }),
  visible: PropTypes.bool,
  prevY: PropTypes.number
}

export default PhotoGallery
