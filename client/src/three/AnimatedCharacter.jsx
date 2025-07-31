import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const AnimatedCharacter = (props) => {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/Animated.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0]?.name]?.reset().fadeIn(0.5).play()
      console.log("Available Animations:", animations.map(a => a.name))
    }
  }, [actions, animations])

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.2
  })

  return (
    <primitive
  ref={group}
  object={scene}
  scale={1.2} // Reduce scale slightly
  position={[0, -1, 0]} // Raise it up a bit
  {...props}
/>
  )
}

export default AnimatedCharacter
