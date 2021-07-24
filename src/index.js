import React, { Suspense, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import './styles.css'
import Model from './model'
import { OrbitControls, Stage, Loader } from '@react-three/drei'

function Thing() {
  const ref = useRef()
  return (
    <>
      <Suspense fallback="null">
        <Stage environment="dawn">
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} />
    </>
  )
}

ReactDOM.render(
  <>
    <Canvas>
      <Thing />
    </Canvas>
    <Loader />
  </>,
  document.getElementById('root')
)
