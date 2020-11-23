import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const SlideUpImage = (
  { image, onClose, onNextPhoto, onPreviousPhoto }
) => {
  const [prevX, setPrevX] = useState(0)

  const handleOnClose = () => {
    onClose()
  }

  const nextPhoto = () => {
    onNextPhoto()
  }

  const previousPhoto = () => {
    onPreviousPhoto()
  }

  const dragChangePhoto = newX => {
    const switchDistance = 75

    if ((newX - prevX) > switchDistance) {
      previousPhoto()
    } else if ((newX - prevX) < -switchDistance) {
      nextPhoto()
    }
  }

  return (
    <div className="photo-gallery-slide-up">
      <div>
        <button
          className="i-btn photo-gallery-image close"
          onClick={ () => handleOnClose() }
        >
          X
        </button>
        <button
          className="i-btn photo-gallery-image next"
          onClick={ () => nextPhoto() }
        >
          { '>' }
        </button>
        <button
          className="i-btn photo-gallery-image prev"
          onClick={ () => previousPhoto() }
        >
          { '<' }
        </button>
      </div>

      <div
        className="photo-gallery-slide-up-image-container photo-gallery-grabbable"
        draggable={ true }
        onDragStart={ e => setPrevX(e.screenX) }
        onDragEnd={ e => dragChangePhoto(e.screenX) }
        onDragOver={ e => e.preventDefault() }
        onTouchStart={ e => setPrevX(e.changedTouches[0].screenX) }
        onTouchEnd={ e => dragChangePhoto(e.changedTouches[0].screenX) }
      >
        <div className="photo-gallery-slide-up-image-grouping">
          <img
            className="photo-gallery-slide-up-image "
            alt={ image.caption } src={ image.url }
          />
          <div className="photo-gallery-slide-up-image-caption">
            { image.caption }
          </div>
        </div>
      </div>
    </div>
  )
}

SlideUpImage.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    caption: PropTypes.string,
    index: PropTypes.number
  }),
  onClose: PropTypes.func,
  onNextPhoto: PropTypes.func,
  onPreviousPhoto: PropTypes.func,
  prevX: PropTypes.number
}

export default SlideUpImage
