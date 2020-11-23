import './App.css'

import PhotoGallery from './component/PhotoGallery'

const constructMockData = n => {
  const res = []
  
  for (let i = 0; i < n; i++) {
    res.push(
      {
        url: `https://placeimg.com/500/300/nature?t=${Math.random()}`,
        caption: `image ${i + 1}`
      }
    )
  }

  return res
}

const mockLength = 30
const data = constructMockData(mockLength)

const App = () => {
  return (
    <div className="App">
      <PhotoGallery data={ data }></PhotoGallery>
    </div>
  )
}

export default App
