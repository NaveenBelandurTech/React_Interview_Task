import { useEffect, useState } from 'react'

export const Capatch = () => {
  const [captch, setCaptch] = useState('')
  const [text, setext] = useState('')
  const [correct, setCorrect] = useState('')

  const generateRandomWord = (length = 6) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    let word = ''
    for (let i = 0; i < length; i++) {
      word += chars[Math.floor(Math.random() * chars.length)]
    }
    return word
  }

  useEffect(() => {
    setCaptch(generateRandomWord())
  }, [])

  const handleClick = () => {
    if (captch === text) {
      setCorrect('✅ Correct')
    } else {
      setCorrect('❌ Incorrect')
    }
  }

  const handleregenerator = () => {
    setCaptch(generateRandomWord())
    setext('')
    setCorrect('')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f4f6f8',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '25px',
          borderRadius: '10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          width: '300px',
          textAlign: 'center'
        }}
      >
        <h2 style={{ marginBottom: '15px' }}>Captcha Generator</h2>

        <p
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            letterSpacing: '3px',
            background: '#eee',
            padding: '10px',
            borderRadius: '6px',
            userSelect: 'none'
          }}
        >
          {captch}
        </p>

        <input
          type="text"
          value={text}
          onChange={(e) => setext(e.target.value)}
          placeholder="Enter captcha"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />

        <button
          onClick={handleClick}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '15px',
            border: 'none',
            borderRadius: '6px',
            background: '#4CAF50',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Submit
        </button>

        <button
          onClick={handleregenerator}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '10px',
            border: 'none',
            borderRadius: '6px',
            background: '#2196F3',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Regenerate
        </button>

        <p
          style={{
            marginTop: '15px',
            fontWeight: 'bold',
            color: correct.includes('Correct') ? 'green' : 'red'
          }}
        >
          {correct}
        </p>
      </div>
    </div>
  )
}
