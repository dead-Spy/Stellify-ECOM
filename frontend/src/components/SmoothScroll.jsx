import { ReactLenis } from '@studio-freight/react-lenis'

function SmoothScroll({ children }) {
  
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, 
    wheelMultiplier: 1,
  }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;