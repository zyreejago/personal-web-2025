import { useState, useEffect } from 'react'

export function useTypingEffect(text: string, typingSpeed: number = 150) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (currentIndex <= text.length && !isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, typingSpeed)
    } else if (currentIndex > 0 && isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex - 1))
        setCurrentIndex(prevIndex => prevIndex - 1)
      }, typingSpeed / 2)
    } else {
      setIsDeleting(prev => !prev)
    }

    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, text, typingSpeed])

  return displayText
}

