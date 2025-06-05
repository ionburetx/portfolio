// src/pages/TransitionPage.jsx
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import TransitionOverlay from '../components/TransitionOverlay'
import { TRANSITION_DURATION } from '../utils/Constants'

const TransitionPage = () => {
  const [opacity, setOpacity] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  const target = location.state?.target || '/Welcome'

  useEffect(() => {
    // 1. Fade-in a negro
    const fadeInTimeout = setTimeout(() => {
      setOpacity(1)
    }, 10)

    // 2. Después del fade-in, navegar
    const navigateTimeout = setTimeout(() => {
      navigate(target, { replace: true })
    }, TRANSITION_DURATION + 10)

    return () => {
      clearTimeout(fadeInTimeout)
      clearTimeout(navigateTimeout)
    }
  }, [])

  return <TransitionOverlay opacity={opacity} />
}

export default TransitionPage

