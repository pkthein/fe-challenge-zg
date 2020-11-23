import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const PhotoGallery = ({ data }) => {
  const [image, setImage] = useState({ url: '', caption: '', index: 0 })
  const [visible, setVisible] = useState(false)
  const [prevY, setPrevY] = useState(0)
  const [prevX, setPrevX] = useState(0)

  useEffect(() => {
  }, [image, visible])

  const displayImage = (idx) => {
    setPrevY(window.scrollY)
    setImage({ ...data[idx], index: idx })
    setVisible(true)
    window.scrollTo(0, 0)
  }

  const onClose = () => {
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

  const nextPhoto = () => {
    const newIndex = image.index === data.length - 1 ? 0 : image.index + 1
    setImage({ ...data[newIndex], index: newIndex })
  }

  const previousPhoto = () => {
    const newIndex = image.index === 0 ? data.length - 1 : image.index - 1
    setImage({ ...data[newIndex], index: newIndex })
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
    <div
      align="center"
      style={
        { overflow: visible ? 'hidden' : 'auto', height: visible ? 0 : 'auto' }
      }
    >
      <h4 className="photo-gallery-text-h4" >Photo Gallery</h4>
      <hr/>

      {
        data.length > 0 &&
        data.map((img, idx) => (
          <img
            className="photo-gallery-image-box" width="300"
            key={ idx } alt={ img.caption } src={ img.url }
            onClick={ e => displayImage(idx) }
          />
        ))
      }

      {
        visible && (image.url && image.caption) && (
          <div className="photo-gallery-slide-up">
            <div>
              <button
                className="i-btn photo-gallery-image close"
                onClick={ () => onClose() }
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
  prevX: PropTypes.number,
  prevY: PropTypes.number
}

export default PhotoGallery
