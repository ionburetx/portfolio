import { useEffect, useState } from 'react'

const TransitionOverlay = ({ isEntering, onFadeOutComplete, duration = 500 }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (isEntering) {
      // Estamos entrando a una página → fade-out
      const timeout = setTimeout(() => {
        setVisible(false)
        if (onFadeOutComplete) onFadeOutComplete()
      }, duration)
      return () => clearTimeout(timeout)
    }
  }, [isEntering, duration, onFadeOutComplete])

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] transition-opacity duration-[${duration}ms] pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  )
}

export default TransitionOverlay

