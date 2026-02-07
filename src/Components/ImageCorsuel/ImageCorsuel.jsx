import { useState } from 'react'

const ImageCorse = () => {
  const imagesSrc = [
    { id: 1, path: "https://wallpapercave.com/uwp/uwp4958665.jpeg" },
    { id: 2, path: "https://wallpapercave.com/uwp/uwp4960234.jpeg" },
    { id: 3, path: "https://wallpapercave.com/uwp/uwp4970302.png" },
    { id: 4, path: "https://wallpapercave.com/uwp/uwp4958665.jpeg" },
    { id: 5, path: "https://wallpapercave.com/uwp/uwp4958665.jpeg" },
    { id: 6, path: "https://wallpapercave.com/uwp/uwp4958665.jpeg" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === imagesSrc.length - 1 ? 0 : prev + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imagesSrc.length - 1 : prev - 1
    )
  }

  return (
    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: "flex", alignItems: "center", gap: '1rem' }}>
        <button onClick={handlePrev}>Prev</button>

        <div style={{ width: '1000px', height: '500px', border: "1px solid red" }}>
          <img
            src={imagesSrc[currentIndex].path}
            alt="carousel"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default ImageCorse
