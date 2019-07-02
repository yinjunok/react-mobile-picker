import React from 'react'
import { animated, useTransition } from 'react-spring'
import noop from './noop'

interface IMaskProps {
  show: boolean
  onCancel?: () => void
}

function Mask({ show, onCancel }: IMaskProps) {
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: .5 },
    leave: { opacity: 0 },
  })

  return (
    <>
      {transitions.map(({ item, key, props }) => (
        item &&
          <animated.div
            key={key}
            style={props}
            onClick={onCancel}
            className='picker-mask'
          />
      ))}
    </>
  )
}

Mask.defaultProps = {
  onCancel: noop,
}

export default Mask
