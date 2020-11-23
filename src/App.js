import './App.css';

import PhotoGallery from './component/PhotoGallery'

const data = [
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 1' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 2' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 3' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 4' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 5' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 6' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 7' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 8' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 9' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 10' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 11' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'image 12' },
  { url: `https://placeimg.com/500/300/nature?t=${Math.random()}`, caption: 'poe poe is here' }
]

const App = () => {
  return (
    <div className="App">
      <PhotoGallery data={ data }></PhotoGallery>
    </div>
  )
}

export default App;
