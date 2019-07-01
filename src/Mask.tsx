import React from 'react'
import { animated, useTransition } from 'react-spring'

interface IMaskProps {
  show: boolean
}

function Mask({ show }: IMaskProps) {
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: .7 },
    leave: { opacity: 0 },
  })

  return (
    <>
      {transitions.map(({ item, key, props }) => (
        item && <animated.div key={key} style={props} className='c-picker-mask' />
      ))}
    </>
  )
}

export default Mask
