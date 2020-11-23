import React, { useEffect, useState }  from 'react'
import PropTypes from 'prop-types'
import './index.css'

const PhotoGallery = ({ data }) => {
  const [image, setImage] = useState({ url: '', caption: '', index: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    console.log(image, visible)
  }, [image, visible])

  const displayImage = (idx) => {
    setImage({ ...data[idx], index: idx })
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
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
            </div>

            <div className="photo-gallery-slide-up-image-container">
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
  visible: PropTypes.bool
}

export default PhotoGallery
